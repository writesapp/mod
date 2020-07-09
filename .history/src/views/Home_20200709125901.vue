<template>
  <div class="home">
    <h1 v-if="!$store.state.user.loggedIn">Hello user, you can check out login auth.</h1>
    <h1 v-if="$store.state.user.loggedIn">Hi, {{$store.state.user.data.displayName}}</h1>
    <Layout></Layout>
  </div>
</template>

<script>
import { default as Layout } from 'ant-design-vue';

export default {
  name: 'Home',
  components: {
    Layout,
  },
};
</script>
