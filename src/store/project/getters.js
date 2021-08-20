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
    }
}