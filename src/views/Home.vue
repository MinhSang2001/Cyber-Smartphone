<template>
  <div class="home row mt-5">
    <div class="col-2">
      <Sidebar />
    </div>
    <div class="col-10">
      <Smartphone :smartphoneData="myPhones"/>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/sidebar/Sidebar.vue'
import Smartphone from '../components/smartphone/Smartphone.vue'
import getSmartphoneJson from "../json/smartphones.json"
export default {
  name: 'Home',
  data(){
    return {
      myPhones: getSmartphoneJson
    }
  },
  components: {
    Sidebar,
    Smartphone
  }
}
</script>
  
<style>

</style>