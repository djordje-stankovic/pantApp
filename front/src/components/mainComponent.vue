<template>
    <div>
      <sideNav></sideNav>
      <topNav></topNav>
    </div>
  </template>
  
  <script>
  
  import sideNav from './sideNav.vue'
  import topNav from './topNav.vue'
  export default {
    name: 'mainComponent',
    components: {
      sideNav,
      topNav
    }
  }
  </script>
  
  <style lang="scss">
  
  </style>
  