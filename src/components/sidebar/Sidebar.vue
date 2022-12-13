<template>
    <div class="mr-auto">
      <ul class="text-start sidebar-nav">
        <router-link
            tag="li"
            v-for="(eachSmartphone, i) in smartphoneTypes"
            :key="i"
            :to='{name: "EachSmartphone", params: {smartphoneType: eachSmartphone.smartphoneName}}'>
            <a>{{ eachSmartphone.smartphoneName}}</a>
        </router-link>
        
      </ul>
    </div>
  </template>
  
  <script>
  import smartphoneTypes from "../../json/smartphoneTypes.json"
  export default {
    name: 'Sidebar',
    data() {
      return {
        smartphoneTypes: smartphoneTypes
      }
    }
  }
  </script>
    
  <style>
    .sidebar-nav {
      padding: 0;
      margin: 0;
    }
    .sidebar-nav > li {
      list-style: none;
      padding: 5px;
      width: 100%;
      border-bottom: 2px solid #fff;
      background-color: black;
    }
    .sidebar-nav > li > a {
      text-decoration: none;
      color: white;
      font-weight: 700;
      display: block;
      padding: 10px;
    }
  </style>