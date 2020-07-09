<template>
  <div class="home">
    <div class="login">
      <h1>Login</h1>
      <button @click.native="login()"></button>
    </div>
  </div>
</template>

<script>
import { auth, googleProvider } from '@/initFirebase';
import store from '@/store';

export default {
  name: 'Login',
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
