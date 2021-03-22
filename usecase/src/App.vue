<template>
  <div id="app">
    <h1>Hello World! {{ counter }}</h1>
    <input type="button" @click="counter = counter + 1" value="Click me" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
};
</script>
<style>
h1 {
  background: green;
}
</style>
