<template>
  <div class="home">
    <div class="login">
      <h1>Login</h1>
      <a-button type="primary" @click.native="login()">
      login
      </a-button>
    </div>
  </div>
</template>

<script>
import { auth, googleProvider } from '@/initFirebase';
import store from '@/store';

export default {
  name: 'Login',
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

<style scoped>
  h1 {
    font-size: 4em;
  }

  .login {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
