<template>
  <div class="home">
    <h1 v-if="!$store.state.user.loggedIn">Hello user, you can check out login auth.</h1>
    <h1 v-if="$store.state.user.loggedIn">Hi, {{$store.state.user.data.displayName}}</h1>
    <Layout></Layout>
    <Menu></Menu>
  </div>
</template>

<script>
import { Layout, Menu } from 'ant-design-vue';

export default {
  name: 'Home',
  components: {
    a-layout,
  },
};
</script>
