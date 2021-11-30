import Epcs from '../../data/epc'
import Commits from  '../../data/commit'
import Tasks from '../../data/task'
export default{

    projectList(state){
        return state.projects 
    },

    mapCollaborators(state){
        const map = new Map()
        state.collaborators.forEach(el => {
            map.set(el.project_id, el.list)
        });
        return map
        // return state.map_collaborators_project
    },

    collaboratorsList(state){
        return state.collaborators
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

    projectMap(state){
        const map = new Map(state.projects.map(el => [el.id, el]))
        return map
      },

    epcList(state){
        return state.project_detail ?  Epcs.epcs.filter(el => el.project_id == state.project_detail.id) : []
    },

    commitsList(state){
        return state.project_detail ?  Commits.commits.filter(el => el.project_id == state.project_detail.id) : []

    },

    tasksList(state){
        return state.project_detail ?  Tasks.tasks.filter(el => (el.project.id == state.project_detail.id && el.status != -1)) : []
    },

    tasksListBackLog(state){
        return state.project_detail ?  Tasks.tasks.filter(el => (el.project.id == state.project_detail.id && el.status == -1)) : []
    }
}