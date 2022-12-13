<template>
    <div class="error-page">
      <error-page-details></error-page-details>
    </div>
  </template>
  
  <script>
  import ErrorPageDetails from '../components/errorPage/ErrorPage.vue'
  export default {
    name: 'ErrorPage',
    components: {
        ErrorPageDetails
    }
  }
  </script>
    
  <style>
  
  </style>