import { createStore } from 'vuex'; // Import createStore từ vuex

export default createStore({
  state: {
    isAuthenticated: false
  },
  mutations: {
    setIsAuthenticated(state, value) {
      state.isAuthenticated = value;
    }
  }
});
