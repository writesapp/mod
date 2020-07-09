<template>
    <div>
        <div class="wrapper">
            <h1>Writes</h1>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Writes',
  mounted() {
    if (!this.$store.state.user.loggedIn) this.$router.push('/login');
  },
};
</script>

<style scoped>

</style>
