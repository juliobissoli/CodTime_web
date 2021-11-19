export default{
    commitsList(state){
        return state.commits
    },

    noteList(state){
        return state.notes.sort((a, b) => a.created_at < b.created_at)
    }
}