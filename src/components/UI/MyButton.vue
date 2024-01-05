<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
};
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  color: #d2d2d2;
  background-color: #ff4c2b;
  border: 1px solid transparent;
  cursor: pointer;

  transition: 0.3s ease;
}

.btn:hover {
  background-color: #d2d2d2;
  border: 1px solid #d2d2d2;
  box-shadow: 0 0 5px 2px #ff4c2b;
  color: #ff4c2b;

  transition: 0.3s ease;
}
</style>
