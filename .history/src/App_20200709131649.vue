<template>
  <div id="app">
    <div id="nav">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <router-link to="/">Home</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/login">Login</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/writes">Writes</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
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
