<template>
  <div class="home">
    <h1 v-if="!$store.state.user.loggedIn">Hello user, you can check out login auth.</h1>
    <h1 v-if="$store.state.user.loggedIn">Hi, {{$store.state.user.data.displayName}}</h1>
  </div>
</template>

<script>
components: {
  import { Layout, Menu } from 'antd';
},
export default {
  name: 'Home',
};
</script>
