<template>
  <div id="app">
    <div id="nav">
      <router-link to="/writes">Writes</router-link>
    </div>
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
