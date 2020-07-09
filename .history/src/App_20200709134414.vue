<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { auth } from '@/initFirebase';
import store from '@/store';

export default {
  name: "App",
  mounted() {
    auth.onAuthStateChanged((user) => store.dispatch("fetchUser", user));
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
