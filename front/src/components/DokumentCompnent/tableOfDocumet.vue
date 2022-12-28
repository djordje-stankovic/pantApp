<template>
   <div>
        <div class="container">
  <h2>Dokuments</h2>
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">acKey</div>
      <div class="col col-2">Datum</div>
      <div class="col col-3">Izdavalac</div>
      <div class="col col-4">Kupac</div>
      <div class="col col-4">Magacin</div>
    </li>
    <singleDoc @click="displaySingleDoc(item.acKey)" v-for="(item) in listOfDock"  :key="item.acKey" v-bind:singleDoc="item">
        
    </singleDoc>
    
  </ul>
</div>
      </div>
</template>

<script>
import singleDoc from './singleDoc.vue'
import axios from "axios";
export default {
components :{
    singleDoc
},
data(){
    return{
     listOfDock : []   
    }
},
beforeMount(){
//this.$store.dispatch('getDocList')
this.getDock()
},
// computed: {
//     getDocuments(){
//         return this.$state.dokuments
//     }
// },
methods:{
  async getDock(){
    let typeOfDoc = {
        docType : '1200'
      }
      try {
        const data = await axios.post(
          "http://localhost:5000/dokument",typeOfDoc
        );
        this.listOfDock = data.data
      } catch (error) {
        alert(error);
        console.log(error);
      }
  },
  displaySingleDoc(id){
    console.log(id);
  }
}
}
</script>


<style lang="scss">

.container {
  text-align: center;
    font-size: 13px;

}

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
  small {
    font-size: 0.5em;
  }
}

.responsive-table {
  li {
    border-radius: 3px;
    padding: 15px 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 7px;
  }
  .table-header {
    background-color :  #81274e;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: white;
  }
  .table-row {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
  }
 
  .col-1 {
    flex-basis: 20%;
    
  }
  .col-2 {
    flex-basis: 10%;
  }
  .col-3 {
    flex-basis: 25%;
  }
  .col-4 {
    flex-basis: 25%;
  }
  .col-5 {
    flex-basis: 20%;
  }
  
  
  @media all and (max-width: 767px) {
    .table-header {
      display: none;
    }
    .table-row{
      
    }
    li {
      display: block;
    }
    .col {
      
      flex-basis: 50%;
      
    }
    .col {
      display: flex;
      padding: 10px 0;
      &:before {
        color :  #81274e;
        
      
        text-align: right;
      }
    }
  }
}
</style>