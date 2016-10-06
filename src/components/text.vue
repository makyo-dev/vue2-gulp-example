<template>
  <p>{{ text }}</p>
</template>

<script>
  export default {
    props: ['text']
  }
</script>

<style scoped>
  p {
    color: #42b983;
    font-weight: 600;
  }
</style>
