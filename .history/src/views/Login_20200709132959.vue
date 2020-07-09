<template>
  <div class="home">
    <a-layout id="components-layout-demo-custom-trigger">
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
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <div class="login">
    <h1>Login</h1>
    <SigninButton @click.native="login()"></SigninButton>
  </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
  </div>
</template>

<script>
import { auth, googleProvider } from '@/initFirebase';
import SigninButton from '@/components/SigninButton.vue';
import store from '@/store';

export default {
  name: 'Login',
  components: {
    SigninButton,
  },
  mounted() {
    if (this.$store.state.user.loggedIn) this.$router.push('/');
  },
  methods: {
    login() {
      auth.signInWithPopup(googleProvider)
        .then((result) => {
          store.dispatch("fetchUser", result.user);
          this.$router.push('/');
        })
        .catch((err) => alert(`Something went wrong: ${err.message}`));
    },
  },
};
</script>
