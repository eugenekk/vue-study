<script setup>
import CardList from './components/CardList.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <!-- <CardList/> -->
  <!-- <div>
    <router-link to="/">HOME</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/user">Users</router-link>
  </div> -->
  <NavBar />
  <div>
    <router-view></router-view>
  </div>
</template>

<style>
* {
  padding : 0px;
  margin : 0px;
}
</style>
