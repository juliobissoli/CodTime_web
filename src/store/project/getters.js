import Epcs from '../../data/epc'
import Commits from  '../../data/commit'
export default{

    projectList(state){
        return state.projects   
    },

    projectDetail(state){
        return state.project_detail 
        ? state.project_detail 
        :  {
            name: "",
            description: 'Descrição',
            collaborators:[],
            thumbnail: null
        }
    },

    epcList(state){
        return state.project_detail ?  Epcs.epcs.filter(el => el.project_id == state.project_detail.id) : []
    },

    commitsList(state){
        return state.project_detail ?  Commits.commits.filter(el => el.project_id == state.project_detail.id) : []

    }
}