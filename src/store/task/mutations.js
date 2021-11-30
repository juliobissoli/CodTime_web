import * as types from '../mutationTypes'
import moment from 'moment'
export default {
    [types.SET_TASKS](state, value) {
      state.tasks = value.map((el) => ({
        ...el,
        status:
          el.state === "closed"
            ? 3
            : el.merge_requests_count > 0
            ? 2
            : !el.milestone
            ? 0
            : 1,
        description_lines: el.description ? el.description.split('\n') : [],
        collaborator: el.assignee,
      }));
    },

    [types.SET_FILTER_TASK](state, data){
      const body = data ? {
        // project_id: data.project_id ? data.project_id : null,
        updated_after: data.date_init ? moment(data.date_init + ' 00:00').utc().format('') : '', //data fim
        updated_before: data.date_end ? moment(data.date_end + ' 24:00').utc().format() : '', //data inicio
        due_date: data.due_date ? moment(data.due_date).format('YYYY-MM-DD[T00:00:00Z]') : '', 
        assignee_id: data.assignee_id ? data.assignee_id : null,
        author_id: data.author_id ? data.author_id : null,
        search: data.search ? data.search : null ,
        state: data.state ? data.state : null,
      } 
     : {
        project_id: null,
        updated_after: '',  //data fim
        updated_before: '', //data inicio
        due_date: '',       //data de vencimento [overdue, week, month, next_month_and_previous_two_weeks]
        assignee_id: null,
        author_id: null,
        search: '',
        state: ''
    }
    const header_url =  mountUrl(body)
      if(Array.isArray(data.project_id)){

        const url = data.project_id.map(id =>  `${`projects/${id}/issues`}` + `${header_url ? '?' : ''}${header_url}` )
        
       
        state.filter = body
        state.url_before = state.url
        state.url = url
      }
      
      else {
        const url = `${body.project_id ? `projects/${body.project_id}/issues` : "issues"}` + `${header_url ? '?' : ''}${header_url}`
        state.filter = body
        state.url_before = state.url
        state.url = url
      }
      
    }
    
  };

  function mountUrl(data){
   return Object.keys(data).filter(el => data[el]).map(el => `${el}=${data[el]}`).join('&')
  }