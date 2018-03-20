<template>
  <div>
    <h1>Dynamic Comp Two</h1>
    <p>Hello {{title}} {{firstName}} {{lastName}}</p>
    <button @click="$emit('lowerCase')">Lower case</button>
  </div>
</template>

<script>
  export default {
    name: "dynamic-two",
    props: ['firstName', 'lastName', 'title']
  }
</script>

<style scoped>

</style>