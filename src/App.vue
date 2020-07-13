<template>
  <div id="app">
    <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :selectable="false">
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
    <a-layout>
      <a-layout-content>
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
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

.ant-layout {
  height: 100vh;
}
</style>
