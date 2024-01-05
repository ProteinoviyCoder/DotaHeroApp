<template>
  <div class="selected" @click="changeFlagTrue">
    {{ selected }}
    <div class="arrow-down"></div>
    <div
      class="blur"
      @click.stop="changeFlagFalse"
      v-if="selectedFlag === true"
    ></div>

    <transition name="transition__select-list">
      <ul
        class="select-list"
        v-if="selectedFlag"
        @mouseleave.stop="changeFlagFalse"
      >
        <li class="select-item" @click.stop="selectState">
          {{ startValue }}
        </li>
        <li class="select-item" @click.stop="selectState" v-for="item in items">
          {{ item }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "MySelectList",
  data() {
    return {
      selected: this.startValue,
      selectedFlag: false,
    };
  },
  props: {
    items: {
      type: [Array, String],
      require: true,
    },
    startValue: {
      type: String,
      require: true,
    },
  },
  methods: {
    selectState(event) {
      this.selected = event.target.textContent;
      this.$emit("selectState", this.selected);
      this.selectedFlag = false;
    },
    changeFlagTrue() {
      this.selectedFlag = true;
    },
    changeFlagFalse() {
      this.selectedFlag = false;
    },
  },
};
</script>

<style scoped>
.selected {
  position: relative;
  padding: 10px;
  border: 2px solid #d2d2d2;
  color: #d2d2d2;
  background-color: #2d384a;

  display: flex;
  justify-content: center;

  cursor: pointer;
}
.selected:hover {
  background-color: #344756;
}
.selected:active {
  box-shadow: 0 0 5px 5px #0a1f32;
}

.arrow-down {
  margin-left: 10px;
  width: 12px;
  height: 12px;
  border-top: 3px solid #d2d2d2;
  border-right: 3px solid #d2d2d2;

  transform: rotate(135deg);
}
.select-list {
  position: absolute;
  margin-top: 35px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: #344756;
  border: 1px solid #d2d2d2;
  left: 0;
  right: 0;
  width: 100%;
  padding: 10px;
}

.select-item {
  padding: 5px;
  border-radius: 5px;
}
.select-item:hover {
  background-color: #2d384a;
}

.transition__select-list-enter-active,
.transition__select-list-leave-active {
  transition: all 0.3s ease;
}

.transition__select-list-enter-from,
.transition__select-list-leave-to {
  transform: scale(50%);
  opacity: 0;
}

.blur {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
}
</style>
