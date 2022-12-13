<template>
  <div class="">
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll mx-auto" style="--bs-scroll-height: 100px;">
        <router-link
                tag="li"
                :to="{name: 'Home', params: { pageTitle: 'Akaga Smartphone Store' } }"
                class="nav-item"
                exact>
                <a class="nav-link active text-dark" aria-current="page">Home</a>
                </router-link>
                <router-link
                tag="li"
                :to="{name: 'Categories', params: { pageTitle: 'Smartphone Categories' } }"
                class="nav-item"
                exact>
                <a class="nav-link text-dark" aria-current="page">Categories</a>
                </router-link>
                <router-link
                tag="li"
                :to="{name: 'About', params: { pageTitle: 'About Us' }}"
                class="nav-item"
                exact>
                <a class="nav-link text-dark" aria-current="page">About</a>
                </router-link>
                <router-link
                tag="li"
                :to="{name: 'Contact' , params: { pageTitle: 'Contact Us' }}"
                class="nav-item"
                exact>
                <a class="nav-link text-dark" aria-current="page">Contact</a>
                </router-link>
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>

export default {
    name: 'NavbarMenu'
}
</script>
<style>
  .navbar-nav > li {
    display: inline-block;
    margin: 0 5px;

  }
  .navbar-nav > li > a{
    font-weight: bold;
  }
  .navbar-nav > li:hover {
    border-bottom: 3px solid #3f51b5;
  }
  .navbar-nav > li.router-link-exact-active {
    border-bottom: 3px solid #3f51b5;
  }
  .navbar-nav > li.router-link-exact-active > a {
    color: #3f51b5;
  }


</style>
