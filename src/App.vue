<template>
  <div class="container text-center">
    <NavbarMenu/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarMenu from './components/navbar/Navbar.vue'
export default {
  components: {
    NavbarMenu,
  }
}
</script>

<style>

</style>
