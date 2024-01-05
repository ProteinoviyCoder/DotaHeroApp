<template>
  <div
    class="side-bar-none"
    :class="{
      'side-bar-active': flagMouse,
    }"
    @mouseover="openSideBar"
    @mouseleave="closeSideBar"
    ref="side"
  >
    <div
      class="arrow"
      :class="{
        none: flagMouse,
      }"
    >
      >
    </div>

    <ul
      class="side-nav-list"
      :class="{
        none: !flagMouse,
      }"
    >
      <li class="side-nav-item" @click="$router.push('/DotaHeroApp')">
        Все герои
      </li>
      <hr class="hr" />
    </ul>
    <div
      class="back-panel"
      @mouseover.stop="closeSideBar"
      @click.stop="closeSideBar"
      v-if="flagMouse"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flagMouse: false,
    };
  },
  methods: {
    openSideBar() {
      this.flagMouse = true;
    },
    closeSideBar() {
      this.flagMouse = false;
    },
  },
};
</script>

<style scoped>
.side-bar-none {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;

  width: 30px;
  font-size: 24px;
  color: #d2d2d2;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  transition: 0.7s ease;
  background-color: transparent;
  box-shadow: 0 0 5px 5px transparent;

  z-index: 10;
}

.side-bar-active {
  z-index: 100;
  width: 200px;
  background-color: #2d384a;

  transition: 0.7s ease;

  z-index: 10;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0 0 5px 5px #0a1f32;
}

.arrow {
  width: 30px;
  height: 150px;

  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: #2d384a;
  box-shadow: 0 0 5px 5px #0a1f32;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}

.side-nav-list {
  margin: 30px 10px;
  font-size: 18px;
  width: 100%;
}

.side-nav-item {
  cursor: pointer;
  border-bottom: 1px solid transparent;

  transition: 0.3s ease;
  padding: 5px;
  border-radius: 5px;
}
.side-nav-item:hover {
  text-shadow: 5px 5px 5px #0a1f32;
  border-bottom: 1px solid #d2d2d2;
  background-color: #0a1f32;

  transition: 0.3s ease;
}

.hr {
  border: 1px solid #d2d2d2;
  margin: 0;
  padding: 0;
  width: 100%;
}

.back-panel {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 200px;
  background-color: transparent;
  z-index: -1;
}

.none {
  display: none;
}
</style>
