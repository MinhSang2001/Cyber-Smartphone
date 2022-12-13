<template>
  <div>
    <p>Error, Pls go back</p>
    <div>
        <button @click="goBack()" class="btn btn-dark">Go Back</button>
    </div>
  </div>
  
</template>

<script>
export default {
    name: 'ErrorPageDetails',
    components: {},
    methods: {
        goBack() {
            this.$router.push({ name: "Home"})
        }
    }
}
</script>

<style>

</style>