<template>
    <div class="card">
      <h1 class="title">{{ title }}</h1>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .card {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center; //
    text-align: center;
    background-color: #f1f2f3;
    color: #111213;
    width: 15em;
    height: 18em;
    border-radius: 0.2em;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    font-family: "Ubuntu", sans-serif;
    font-size: 1.5em;
    margin: 0;
  }
  </style>
  
  <script>
  export default {
    name: "CardComponent",
    props: {
      title: {
        type: String,
        required: true
      }
    }
  };
  </script>