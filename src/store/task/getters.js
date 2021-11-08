export default{

    taskList(state){
           return state.tasks; 
    },

    mapTasks2State(state){
        const status_list = [0,1,2,3]
        let list_aux = []
        const map  = new Map()
        status_list.forEach(i => {
            list_aux = state.tasks.filter(el => el.status == i)

            map.set(i, list_aux)
        })

        return map
        // const map  = new Map
        // state.tasks.map(el => {

        // });
    },


    taskProject: (state) => (project_id) => {
        return state.tasks.filter(el => el.project_id === project_id)
      },
}