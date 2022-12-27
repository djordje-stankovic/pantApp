/* eslint-disable */
import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    userLogIn : '',
    userID : 0,
    isLogIn : true ,

  },
  getters: {
    getCurrentUser : (state) => state.userLogIn,
    isLogInUser : (state) => state.isLogIn
   
  },
  mutations: {
    SET_USER(state,user){
      console.log(user)
      state.userLogIn = user.acSubject
      state.userID = user.acUserId
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
