<template>
    <div>
      <sideNav></sideNav>
      <topNav></topNav>
      <tableOfDoc></tableOfDoc>


     
    </div>
  </template>
  
  <script>
  
  import sideNav from './sideNav.vue'
  import topNav from './topNav.vue'
  import tableOfDoc from '../components/DokumentCompnent/tableOfDocumet.vue'
  export default {
    name: 'mainComponent',
    components: {
      sideNav,
      topNav,
      tableOfDoc

    }
  }
  </script>
  
  <style lang="scss">

.container {
  max-width: 2000px;
  margin-left: auto;
  margin-right: auto;


}
  </style>
  