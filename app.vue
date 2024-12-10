<template>
  <div>
    <HeaderPage/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #f1f2f3;
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