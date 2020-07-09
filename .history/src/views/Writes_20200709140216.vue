<template>
    <div>
        <div class="wrapper" v-if="this.$store.state.user.loggedIn">
            <h1>Writes</h1>
        </div>
        <div class="wrapper" v-if="!this.$store.state.user.loggedIn">
            <h1>Go to logging page!</h1>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Writes',
};
</script>

<style scoped>

</style>
