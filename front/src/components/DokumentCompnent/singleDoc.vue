<template>
  <li class="table-row pointerOfHover">
      <div class="col col-1" data-label="Job Id">{{singleDoc.acKeyView}}</div>
      <div class="col col-2" data-label="Customer Name">{{ formatdDate(singleDoc.adDate) }}</div>
      <div class="col col-3" data-label="Amount">{{ singleDoc.acIssuer }}</div>
      <div class="col col-4" data-label="Payment Status">{{ singleDoc.acPrsn3 }}</div>
      <div class="col col-5" data-label="Payment Status">{{singleDoc.acReceiver}}</div>
    </li>
</template>

<script>
import moment from 'moment'
export default {
    props: ['singleDoc'],
    data(){
      return{

      }
    },
    methods:{
      formatdDate(date) {
        return moment(date).format('DD.MM.YYYY');
      }
    },
    beforeMount(){

},
    
}
</script>

<style lang="scss">

.container {
  width: 80%;
  margin-left: auto;
  margin-right: auto;

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
    background-color: #95A5A6;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .table-row {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
  }
  .col-1 {
    flex-basis: 30%;
  }
  .col-2 {
    flex-basis: 10%;
  }
  .col-3 {
    flex-basis: 20%;
  }
  .col-4 {
    flex-basis: 20%;
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
        color: #6C7A89;
        
      
        text-align: right;
      }
    }
  }
  .pointerOfHover:hover{
    cursor: pointer;
  }
}
</style>