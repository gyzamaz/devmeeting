export const setUserId = 'SET_USER_ID';


const initialState = () => ({
  user: null,
});

const state = initialState;

const getters = {
  user: store => store.user,
};

const mutations = {
  // SET_USER_ID(store, settings) {
  // store.settings = settings;
  // },
};

const actions = {
  setUserId(context, data) {
    context.commit('SET_USER_ID', data);
    return data;
  },
};

export default {
  namespaced: true,
  getters,
  actions,
  mutations,
  state,
};
