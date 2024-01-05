<template>
  <div class="core-title">
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped>
.core-title {
  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 60%;

  background-color: #2d384a;
  color: #d2d2d2;

  padding: 10px 25px;
  border-radius: 10px;

  font-weight: 700;
}

@media (max-width: 650px) {
  .title {
    max-width: 100%;
  }
}
</style>
