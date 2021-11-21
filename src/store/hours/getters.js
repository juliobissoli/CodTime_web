import moment from 'moment'

export default{
    commitsList(state){
        return state.commits
    },

    noteList(state){
        return state.notes.sort((a, b) => moment(b.created_at).diff(moment(a.created_at)))
    }
}