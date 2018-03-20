<template>
  <div>
    <h1>Dynamic Component One</h1>
    <p>Hello {{firstName}} {{lastName}}</p>
    <button @click="$emit('upperCase')">Upper case</button>
  </div>
</template>

<script>
  export default {
    name: "dynamic-one",
    props: ['firstName', 'lastName']
  }
</script>

<style scoped>

</style>