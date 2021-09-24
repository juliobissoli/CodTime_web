export default {
  userName(state) {
    return state.username;
  },
  avatar(state) {
    state.avatar_url;
  },

  userInfo(state) {
    return {
      id: state.id,
      name: state.name,
      username: state.username,
      state: state.state,
      avatar_url: state.avatar_url,
      web_url: state.web_url,
      created_at: state.created_at,
      bio: state.bio,
      email: state.email
    };
  },
};
