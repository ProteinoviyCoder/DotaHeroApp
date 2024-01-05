<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item" @click="$router.push('/')">
          <img
            @mouseover="animScale"
            class="img-dota"
            src="@/assets/dota2.png"
            alt="#"
          />Dota 2
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      flagAnim: false,
    };
  },
  methods: {
    animScale(event) {
      if (this.flagAnim === false) {
        this.flagAnim = true;
        event.target.classList.add("img-dota-anim-start");
        setTimeout(() => {
          event.target.classList.add("img-dota-anim-finish");
        }, 300);
        setTimeout(() => {
          event.target.classList.remove("img-dota-anim-start");

          event.target.classList.remove("img-dota-anim-finish");
        }, 600);
        setTimeout(() => {
          this.flagAnim = false;
        }, 700);
      }
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  background-color: #2d384a;

  box-shadow: 0 0 5px 5px #0a1f32;
  user-select: none;
}

.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 40px;
  font-size: 24px;
  color: #d2d2d2;
}

.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
}
.nav-item:hover {
  text-shadow: 5px 2px 5px rgba(255, 255, 255, 0.3);
}

.img-dota {
  width: 55px;
}
.img-dota-anim-start {
  transform: scale(70%);
  transition: 0.3s ease;
}
.img-dota-anim-finish {
  transform: scale(130%);
  transition: 0.3s ease;
}
</style>
