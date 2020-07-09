<template>
  <div class="home">
    <div class="login">
      <Title>Login</Title>
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
