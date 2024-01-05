<template>
  <div class="list">
    <transition-group name="transition__some-list">
      <HeroCard :key="item.id" :hero="item" v-for="item in items"></HeroCard>
    </transition-group>
  </div>
</template>

<script>
import HeroCard from "./HeroCard";

export default {
  components: {
    HeroCard,
  },
  data() {
    return {};
  },
  props: {
    items: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  margin-bottom: 20px;
}

.transition__some-list-enter-active,
.transition__some-list-leave-active {
  transition: all 0.7s ease;
}
.transition__some-list-enter-from,
.transition__some-list-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(70%);
}
</style>
