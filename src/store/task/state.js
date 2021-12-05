export default{
    tasks: [],
    url: '',
    url_before: '',
    filter: {
        project_id: null,
        many_url: false,
        projects_list: [],
        updated_after: '',  //data fim
        updated_before: '', //data inicio
        due_date: '',       //data de vencimento [overdue, week, month, next_month_and_previous_two_weeks]
        assignee_id: null,
        author_id: null,
        search: '',
        state: ''
    },
}