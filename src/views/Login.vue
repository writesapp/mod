<template>
  <div class="home">
    <div class="login">
      <h1>login.</h1>
      <a-button type="primary" @click.native="login()">
      Login
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

  button {
    height: 40px;
    font-size: 1.5em;
  }

  .login {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
