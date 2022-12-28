<template>
    <div>
     <div
       id="mySidebar"
       class="sidebar"
       v-bind:style="{ width: this.widthOfSideBar + 'px' }"
     >
       <a @click="openNav()" href="#"
         ><i class="fa fa-arrow-left colorIcon"></i>Collapls</a
       >
       <a href="#" @click="changeComponent('TableOfContent')"><i class="fa fa-home colorIcon"></i> Home</a>
       <a  href="#" @click="changeComponent('charDetails')"><i class="fa fa-pie-chart colorIcon"></i> Data Char</a>
       <a href="#"><i class="fa fa-users colorIcon"></i> Family circles</a>
       <a href="#"><i class="fa fa-volume-up colorIcon"></i> Audio Messages</a>
       <a href="#"><i class="fa fa-pencil colorIcon"></i>Writen Messages</a>
       <a href="#"><i class="fa fa-image colorIcon"></i>Photos</a>
       <a href="#"><i class="fa fa-play colorIcon"></i> Videos</a>
       <a href="#"><i class="fa fa-volume-up colorIcon"></i> Scheaduled Post</a>
       <a href="#"><i class="fa fa-calendar colorIcon"></i> Billing</a>
       <a href="#"><i class="fa fa-random colorIcon"></i> Log Out</a>
     </div>
 
     
   </div>
 </template>
 
 <script>
 export default {
     methods: {
     openNav() {
       if (this.widthOfSideBar == 65) {
         this.widthOfSideBar = 250;
       } else {
         this.widthOfSideBar = 65;
       }
     }
     
   },
   data() {
     return {
       widthOfSideBar: 65,
       
     };
   },
 }
 </script>
 
 <style scoped >
 .colorIcon {
   color: #81274e;
   font-size: 25px;
   margin-left: -1rem;
   margin-right: 2rem;
 }
 .sidebar {
   height: 100%;
   width: 65px;
   position: fixed;
   z-index: 1;
   top: 0;
   left: 0;
   background-color: white;
   transition: 0.5s;
   overflow-x: hidden;
   padding-top: 60px;
   white-space: nowrap;
 }
 
 .sidebar a {
   padding: 8px 8px 8px 32px;
   text-decoration: none;
   font-size: 18px;
   color: black;
   display: block;
   margin-top: 2rem;
 }
 
 .sidebar a:hover {
   color: #d3206e;
 }
 
 main .sidebar {
   position: absolute;
   top: 0;
   right: 25px;
   font-size: 36px;
   margin-left: 50px;
 }
 
 .material-icons,
 .icon-text {
   vertical-align: middle;
 }
 
 .material-icons {
   padding-bottom: 3px;
   margin-right: 30px;
 }
 
 #main {
   padding: 16px;
   margin-left: 85px;
   transition: margin-left 0.5s;
   background: whitesmoke;
 }
 
 @media screen and (max-height: 450px) {
   .sidebar {
     padding-top: 15px;
   }
   .sidebar a {
     font-size: 18px;
   }
 }
 </style>
 