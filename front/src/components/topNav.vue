<template>
    <div class="bar">
      <div class="search">
        <input type="search" placeholder="search..." />
        <button class="fa fa-search butonStyle"></button>
      </div>
      <div class="space"></div>
      <!-- Friends -->
      <div class="icon">
        <a @click="togleDropDownFriend" href="#">
          <i class="fa fa-users butonStyle"></i>
          <span style="top:-34px; right: -21px" class="badge">3</span>
        </a>
        <div
          class="dropdown-menu"
          v-bind:class="{ show: togleFriend }"
          aria-labelledby="dropdownMenu2"
        >
          <button class="dropdown-item" type="button">Link 1</button>
          <button class="dropdown-item" type="button">Link 2</button>
        </div>
      </div>
      <!-- Message -->
      <div class="icon">
        <a @click="togleDropDownMess" href="#">
          <i class="fa fa-pencil butonStyle"></i>
          <span class="badge">3</span>
        </a>
        <div
          class="dropdown-menu"
          v-bind:class="{ show: togleMass }"
          aria-labelledby="dropdownMenu2"
        >
          <button class="dropdown-item" type="button">Link 1</button>
          <button class="dropdown-item" type="button">Link 2</button>
        </div>
      </div>
      <!-- Notification -->
      <div class="icon">
        <a @click="togleDropDownNotification" href="#">
          <i class="fa fa-flash butonStyle"></i>
          <span class="badge">3</span>
        </a>
        <div
          class="dropdown-menu"
          v-bind:class="{ show: togleNotification }"
          aria-labelledby="dropdownMenu2"
        >
          <button class="dropdown-item" type="button">Link 1</button>
          <button class="dropdown-item" type="button">Link 2</button>
        </div>
      </div>
  
      <!-- UserMeni -->
      <div class="username">
        <!-- <img src="./../../Slika.jpg" class="userImage" alt="Cinque Terre" /> -->
  
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle topbtn"
            type="button"
            id="dropdownMenu2"
            @click.prevent="togleDropDownUser()"
           
          >
            <h5 class="name" >{{ returnUser }}</h5>
          </button>
                  </div>
      </div>
      <div
        id="myModal"
        class="modal"
        :style="[modal ? { display: 'block' } : { display: 'none' }]"
      >
        <!-- Modal content -->
        <div class="modal-content">
          <h3>Are you sure?</h3>
          <div class="container" style="display : flex">
            <div class="item">
              <button class="btn btn-primary modalButon" @click="PrintMessege()">
                Yes
              </button>
            </div>
            <div class="item">
              <button class="btn btn-primary modalButon" @click="togleModal()">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import store from '@/store';

  export default {
    data() {
      return {
        togleUserMeni: false,
        togleNotification: false,
        togleMass: false,
        togleFriend: false,
        modal: false,
        curentUSer : ''
      };
    },
    computed : {
      returnUser(){
        return store.state.userLogIn
      }
    },
    methods: {
      PrintMessege() {
        console.log("Log Out");
        this.togleModal();
      },
      togleDropDownUser() {
        if (this.togleUserMeni == false) {
          this.togleUserMeni = true;
          this.togleMass = false;
          this.togleFriend = false;
          this.togleNotification = false;
        } else {
          this.togleUserMeni = false;
        }
      },
      togleDropDownNotification() {
        if (this.togleNotification == false) {
          this.togleNotification = true;
          this.togleMass = false;
          this.togleFriend = false;
          this.togleUserMeni = false;
        } else {
          this.togleNotification = false;
        }
      },
      togleDropDownMess() {
        if (this.togleMass == false) {
          this.togleMass = true;
          this.togleFriend = false;
          this.togleNotification = false;
          this.togleUserMeni = false;
        } else {
          this.togleMass = false;
        }
      },
      togleDropDownFriend() {
        if (this.togleFriend == false) {
          this.togleFriend = true;
          this.togleMass = false;
          this.togleNotification = false;
          this.togleUserMeni = false;
        } else {
          this.togleFriend = false;
        }
      },
      togleModal() {
        if (this.modal == false) {
          this.modal = true;
        } else {
          this.modal = false;
          this.togleDropDownUser();
        }
      },
    },
  
   
  };
  </script>
  
  <style scoped>

  .topbtn {
   background-color :  #81274e;
    border: 1px solid white;

    border-block-color: white;
  }
  .showModal {
    display: block;
  }
  .modalButon {
    width: 4rem;
    height: 4rem;
    margin-left: 10rem;
  }
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 20%;
  }
  
  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  .dropdown {
    float: left;
    overflow: hidden;
  }
  
  .dropdown .dropbtn {
    cursor: pointer;
    font-size: 16px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
  
  .dropdown-content a:hover {
    background-color: #ddd;
  }
  
  .show {
    display: block;
    position: relative;
  }
  .name {
    margin-left: 1rem;
    text-align: center;
    font-size: 20px;
    color: white;
  }
  .username {
    display: flex;
    align-items: center;
  }
  .userImage {
    width: 4rem;
    height: 4rem;
    margin-left: 1rem;
    margin-bottom: 2rem;
    border-radius: 50%;
  }
  .bar {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    background: #81274e;
  }
  .bar > * {
    margin: 0 10px;
  }
  .butonStyle {
    border: 0;
    font-size: 20px;
    color: white;
    background-color: transparent;
  }
  .icon {
    width: 30px;
    height: 30px;
    background: transparent;
    border-radius: 50%;
  }
  .icon .badge {
    position: relative;
    top: -15px;
    right: -2px;
    padding: 1px 1px;
    font-size: 15px;
    color: white;
    background-color: transparent;
  }
  .space {
    flex: 0.5;
  }
  .search {
    -webkit-box-flex: 0.4;
    flex: 0.4;
    background-color: rgba(255, 255, 255, 0.1);
    width: 100%;
    margin-left: 0;
    display: flex;
  }
  
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgb(255, 255, 255);
  }
  .search input {
    text-align: right;
    border: 0px;
    width: 100%;
    height: 10rem;
    color: white;
  
    background-color: transparent;
    font-size: 24px;
  }
  
  @media (max-width: 650px) {
    .bar {
      flex-wrap: wrap;
    }
  
    .icon {
      -webkit-box-ordinal-group: 1 !important;
      order: 0 !important;
    }
  
    .username {
      -webkit-box-ordinal-group: 2 !important;
      order: 1 !important;
      width: 100%;
      margin: 15px;
    }
  
    .search {
      -webkit-box-ordinal-group: 3 !important;
      order: 2 !important;
      width: 30%;
    }
  }
  </style>
  