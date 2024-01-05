<template>
  <NavBar></NavBar>
  <SideBar></SideBar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

export default {
  components: {
    NavBar,
    SideBar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
}

body {
  background-color: #344756;
  font-family: Arial, Helvetica, sans-serif;
}

.app {
  max-width: 1720px;
  margin: 0 auto;
}
</style>
