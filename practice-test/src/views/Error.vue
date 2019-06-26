<template>
  <div>
    <h4>Error</h4>
    <div>{{message}}</div>
    <div>{{details}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: this.$route.params.message,
      details: this.$route.params.details
    };
  }
};
</script>

<style>
</style>
