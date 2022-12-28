/* eslint-disable */
import { createStore } from 'vuex'
import axios from "axios";
// import VuexPersistence from 'vuex-persist';
// import localForage from 'localforage';
// import {clone} from 'pouchdb-utils';

// const vuexLocal = new VuexPersistence({
//   storage: localForage,
//   asyncStorage: true,
//   reducer: (state) => clone(state),
// });

export default createStore({
  state: {
    userLogIn : '',
    userID : 0,
    isLogIn : true ,
    dokuments : []
  },
  getters: {
    getCurrentUser : (state) => state.userLogIn,
    isLogInUser : (state) => state.isLogIn,
    curentDokuments : (state) => state.dokuments
   
  },
  mutations: {
    SET_USER(state,user){
      console.log(user)
      state.userLogIn = user.acSubject
      state.userID = user.acUserId
    },
    SET_DOKUMENTS(state,doks){
      console.log(doks)
      state.dokuments = []
      state.dokuments = doks
      
    }
  },
  actions: {
    async getUser({ commit }) {
      let user = {
        user : 'AD'
      }
      try {
        const data = await axios.post(
          "http://localhost:5000/user",user
        );
        console.log(data)
        commit("SET_USERS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async getDocList({ commit }) {
      let typeOfDoc = {
        docType : '1200'
      }
      try {
        const data = await axios.post(
          "http://localhost:5000/dokument",typeOfDoc
        );
        console.log(data)
        //this.state.dokuments = data
        commit("SET_DOKUMENTS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  modules: {
  },
  // plugins: [vuexLocal.plugin],
})
