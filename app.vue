<template>
  <div>
    <HeaderPage/>
    <Qualities/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #111213;
  color: #f1f2f3;
}
</style>

<script setup lang="ts">
useHead({
  title: 'Game Dev',
  meta: [
    { name: 'description', content: 'Course of Game Dev' }
  ],
})
</script>