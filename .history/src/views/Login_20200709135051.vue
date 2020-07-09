<template>
  <div class="home">
    
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
