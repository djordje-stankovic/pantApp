/* eslint-disable */
import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    userLogIn : 'Sanja',
    userID : 0,

  },
  getters: {
    getCurrentUser : (state) => state.userLogIn
   
  },
  mutations: {
    SET_USER(state,user){
      state.userLogIn = user.userName
      state.userID = user.userID
    }
  },
  actions: {
    async getUser({ commit }) {
      let user = {
        user : 'AD'
      }
      try {
        const data = await axios.post(
          "https://jsonplaceholder.typicode.com/users",user
        );
        console.log(data)
        //commit("SET_USERS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  modules: {
  }
})
