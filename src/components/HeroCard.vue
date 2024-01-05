<template>
  <div class="card">
    <div class="content-card">
      <img
        @click="$router.push(`/DotaHeroApp/hero/${hero.id}`)"
        class="img-hero"
        :src="hero.img"
        alt="Герой в гримёрке -:)"
      />
      <h3 class="name-hero">{{ hero.heroName }}</h3>
      <p class="text">Win rate</p>

      <p
        :class="{
          'good-percent-win': hero.percentWin >= 50,
          'bad-percent-win': hero.percentWin < 50,
        }"
      >
        {{ hero.percentWin.toFixed(2) }} %
      </p>
      <progress class="prog" :value="hero.percentWin" max="100"></progress>
      <div class="buttons">
        <MyButton @click="$router.push(`/DotaHeroApp/hero/${hero.id}`)"
          >Подробнее</MyButton
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hero: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      widthBar: "20px",
    };
  },
};
</script>

<style scoped>
.card {
  width: 260px;

  background-color: #2d384a;
  box-shadow: 0 0 5px 5px #0a1f32;

  color: #d2d2d2;
}

.content-card {
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.img-hero {
  display: block;

  width: 90%;
  border: 1px solid #d2d2d2;
  border-radius: 5px;

  margin-bottom: 15px;
}
.img-hero:hover {
  border: 1px solid #ff4c2b;
  cursor: pointer;
}

.name-hero {
  font-size: 20px;
  font-weight: 700;

  margin-bottom: 15px;
}

.text {
  font-size: 18px;
  margin-bottom: 5px;
}

.good-percent-win {
  color: rgb(61, 246, 15);
  margin-bottom: 5px;
}
.bad-percent-win {
  color: rgb(235, 84, 84);
  margin-bottom: 5px;
}

.prog {
  width: 90%;
  background-color: rgb(227, 29, 29);
  height: 5px;

  margin-bottom: 20px;
}
.prog::-webkit-progress-bar {
  background-color: rgb(227, 29, 29);
}
.prog::-webkit-progress-value {
  background-color: rgb(64, 182, 35);
}

.buttons {
  width: 90%;
  display: flex;
  justify-content: flex-end;
}
</style>
