<template>
  <div class="hero-page">
    <div class="header-page" ref="top">
      <div class="image">
        <img class="img" :src="hero.img" alt="#" />
      </div>
      <div class="text">
        <h2 class="name-hero">
          <img
            class="img-atr"
            v-if="hero.state === 'Ловкость'"
            src="@/assets/icon-agi.png"
            alt="#"
          />
          <img
            class="img-atr"
            v-else-if="hero.state === 'Сила'"
            src="@/assets/icon-str.png"
            alt="#"
          />
          <img
            class="img-atr"
            v-else-if="hero.state === 'Интелект'"
            src="@/assets/icon-int.png"
            alt="#"
          />
          <img class="img-atr" v-else src="@/assets/icon-all-atr.png" alt="#" />
          {{ hero.heroName }}
        </h2>
        <p class="status-hero">{{ status }}</p>
        <br />
        <div class="roles">
          <p class="role" v-for="role in hero.roles">{{ role }} *</p>
        </div>
      </div>
    </div>

    <div class="hero-information">
      <div class="block-information">
        <h3 class="semi-title">Базовые характеристики</h3>
        <div class="block-states">
          <div class="states">
            <div class="base-state">
              <img class="img-atr" src="@/assets/icon-agi.png" alt="#" />
              <p>{{ hero.baseAgi }} + {{ hero.agiGain }}</p>
            </div>
            <div class="base-state">
              <img class="img-atr" src="@/assets/icon-str.png" alt="#" />
              <p>{{ hero.baseStr }} + {{ hero.strGain }}</p>
            </div>
            <div class="base-state">
              <img class="img-atr" src="@/assets/icon-int.png" alt="#" />
              <p>{{ hero.baseInt }} + {{ hero.intGain }}</p>
            </div>
          </div>
          <div class="states">
            <div class="base-state">
              <img
                class="img-atr"
                src="@/assets/heart.png"
                style="height: 28px"
                alt="#"
              />
              <p>{{ hero.baseHealth }}</p>
            </div>
            <div class="base-state">
              <img
                class="img-atr"
                src="@/assets/manna.png"
                style="width: 50px; height: 35px"
                alt="#"
              />
              <p>{{ hero.baseMana }}</p>
            </div>
            <div class="base-state">
              <img
                class="img-atr"
                src="@/assets/boots.png"
                style="width: 60px; height: 50px"
                alt="#"
              />
              <p>{{ hero.moveSpeed }}</p>
            </div>
          </div>
          <div class="states">
            <div class="base-state">
              <img class="img-atr" src="@/assets/armor.png" alt="#" />
              <p>{{ hero.baseArmor }}</p>
            </div>
            <div class="base-state">
              <img
                class="img-atr"
                src="@/assets/sword.png"
                style="height: 30px"
                alt="#"
              />
              <p>{{ hero.baseAttackMax }} - {{ hero.baseAttackMin }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="best-items">
      <h3 class="semi-title">Лучшие предметы</h3>
      <MySelectList
        class="hero-page__select-list"
        :items="stagesGame"
        :startValue="startValueSelectList"
        @selectState="changeItems"
      ></MySelectList>
      <div class="items-block">
        <img
          class="img-item"
          :src="item.img"
          alt="#"
          v-for="item in heroItems"
        />
      </div>
    </div>

    <div class="block-winrate">
      <h3 class="semi-title">Win rate на всех рангах</h3>

      <div class="winrate-string">
        <div class="help-block__winrate-block-rang">
          <img class="img-rang" src="@/assets/herald.png" alt="#" />
          <p class="name-rang">Рекрут</p>
        </div>
        <div class="help-block__winrate-block-percent">
          <progress
            class="prog"
            :value="hero.heraldPercentWin"
            max="100"
          ></progress>
          <p
            :class="{
              'good-percent-win': hero.heraldPercentWin >= 50,
              'bad-percent-win': hero.heraldPercentWin < 50,
            }"
          >
            {{ Number(hero.heraldPercentWin).toFixed(2) }} %
          </p>
        </div>
      </div>
      <div class="winrate-string">
        <div class="help-block__winrate-block-rang">
          <img class="img-rang" src="@/assets/guardian.png" alt="#" />
          <p class="name-rang">Страж</p>
        </div>
        <div class="help-block__winrate-block-percent">
          <progress
            class="prog"
            :value="hero.guardianPercentWin"
            max="100"
          ></progress>
          <p
            :class="{
              'good-percent-win': hero.guardianPercentWin >= 50,
              'bad-percent-win': hero.guardianPercentWin < 50,
            }"
          >
            {{ Number(hero.guardianPercentWin).toFixed(2) }} %
          </p>
        </div>
      </div>
      <div class="winrate-string">
        <div class="help-block__winrate-block-rang">
          <img class="img-rang" src="@/assets/crusader.png" alt="#" />
          <p class="name-rang">Рыцарь</p>
        </div>
        <div class="help-block__winrate-block-percent">
          <progress
            class="prog"
            :value="hero.crusaderPercentWin"
            max="100"
          ></progress>
          <p
            :class="{
              'good-percent-win': hero.crusaderPercentWin >= 50,
              'bad-percent-win': hero.crusaderPercentWin < 50,
            }"
          >
            {{ Number(hero.crusaderPercentWin).toFixed(2) }} %
          </p>
        </div>
      </div>
      <div class="winrate-string">
        <div class="help-block__winrate-block-rang">
          <img class="img-rang" src="@/assets/archon.png" alt="#" />
          <p class="name-rang">Герой</p>
        </div>
        <div class="help-block__winrate-block-percent">
          <progress
            class="prog"
            :value="hero.archonPercentWin"
            max="100"
          ></progress>
          <p
            :class="{
              'good-percent-win': hero.archonPercentWin >= 50,
              'bad-percent-win': hero.archonPercentWin < 50,
            }"
          >
            {{ Number(hero.archonPercentWin).toFixed(2) }} %
          </p>
        </div>
      </div>
      <div class="winrate-string">
        <div class="help-block__winrate-block-rang">
          <img class="img-rang" src="@/assets/legend.png" alt="#" />
          <p class="name-rang">Легенда</p>
        </div>
        <div class="help-block__winrate-block-percent">
          <progress
            class="prog"
            :value="hero.legendPercentWin"
            max="100"
          ></progress>
          <p
            :class="{
              'good-percent-win': hero.legendPercentWin >= 50,
              'bad-percent-win': hero.legendPercentWin < 50,
            }"
          >
            {{ Number(hero.legendPercentWin).toFixed(2) }} %
          </p>
        </div>
      </div>
      <div class="winrate-string">
        <div class="help-block__winrate-block-rang">
          <img class="img-rang" src="@/assets/ancient.png" alt="#" />
          <p class="name-rang">Властелин</p>
        </div>
        <div class="help-block__winrate-block-percent">
          <progress
            class="prog"
            :value="hero.ancientPercentWin"
            max="100"
          ></progress>
          <p
            :class="{
              'good-percent-win': hero.ancientPercentWin >= 50,
              'bad-percent-win': hero.ancientPercentWin < 50,
            }"
          >
            {{ Number(hero.ancientPercentWin).toFixed(2) }} %
          </p>
        </div>
      </div>
      <div class="winrate-string">
        <div class="help-block__winrate-block-rang">
          <img class="img-rang" src="@/assets/divine.png" alt="#" />
          <p class="name-rang">Божество</p>
        </div>
        <div class="help-block__winrate-block-percent">
          <progress
            class="prog"
            :value="hero.divinePercentWin"
            max="100"
          ></progress>
          <p
            :class="{
              'good-percent-win': hero.divinePercentWin >= 50,
              'bad-percent-win': hero.divinePercentWin < 50,
            }"
          >
            {{ Number(hero.divinePercentWin).toFixed(2) }} %
          </p>
        </div>
      </div>
      <div class="winrate-string">
        <div class="help-block__winrate-block-rang">
          <img class="img-rang" src="@/assets/immortal.png" alt="#" />
          <p class="name-rang">Титан</p>
        </div>
        <div class="help-block__winrate-block-percent">
          <progress
            class="prog"
            :value="hero.immortalPercentWin"
            max="100"
          ></progress>
          <p
            :class="{
              'good-percent-win': hero.immortalPercentWin >= 50,
              'bad-percent-win': hero.immortalPercentWin < 50,
            }"
          >
            {{ Number(hero.immortalPercentWin).toFixed(2) }} %
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hero: "",
      statuses: [
        "Всё сложно, а когда было легко?",
        "В активном поиске (нормальной команды)",
        "На защите центральной линии",
      ],
      status: "",
      flagPage: true,
      startValueSelectList: "Начальные предметы",
      topItems: {},
      heroItems: [],
      stagesGame: [
        "Стартовые предметы",
        "Средние предметы",
        "Поздние предметы",
      ],
    };
  },
  methods: {
    async getAllHeroes() {
      try {
        const date = new Date();

        if (
          localStorage.getItem("allHeroes") === null ||
          date.getDate() != localStorage.getItem("nowDate")
        ) {
          const response = await fetch(
            "https://api.opendota.com/api/heroStats"
          );
          const allHeroes = await response.json();

          const allHeroSave = [];

          for (let hero of allHeroes) {
            const heroSave = {};

            heroSave.id = hero.id;
            heroSave.falgSearch = false;
            heroSave.img = "https://cdn.cloudflare.steamstatic.com" + hero.img;
            heroSave.heroName = hero.localized_name;
            heroSave.roles = hero.roles;
            heroSave.baseAgi = hero.base_agi;
            heroSave.baseStr = hero.base_str;
            heroSave.baseInt = hero.base_int;
            heroSave.baseHealth =
              Number(hero.base_health) + Number(hero.base_str) * 22;
            heroSave.baseMana =
              Number(hero.base_mana) + Number(hero.base_int) * 12;
            heroSave.baseArmor =
              Number(hero.base_armor) +
              Number((Number(hero.base_agi) * 0.167).toFixed(0));
            heroSave.agiGain = hero.agi_gain;
            heroSave.strGain = hero.str_gain;
            heroSave.intGain = hero.int_gain;
            heroSave.moveSpeed = hero.move_speed;
            heroSave.dayVision = hero.day_vision;
            heroSave.nightVision = hero.hight_vision;

            if (hero.primary_attr === "agi") {
              heroSave.state = "Ловкость";
              heroSave.baseAttackMin =
                Number(hero.base_attack_min) + Number(hero.base_agi);
              heroSave.baseAttackMax =
                Number(hero.base_attack_max) + Number(hero.base_agi);
            } else if (hero.primary_attr === "str") {
              heroSave.state = "Сила";
              heroSave.baseAttackMin =
                Number(hero.base_attack_min) + Number(hero.base_str);
              heroSave.baseAttackMax =
                Number(hero.base_attack_max) + Number(hero.base_str);
            } else if (hero.primary_attr === "int") {
              heroSave.state = "Интеллект";
              heroSave.baseAttackMin =
                Number(hero.base_attack_min) + Number(hero.base_int);
              heroSave.baseAttackMax =
                Number(hero.base_attack_max) + Number(hero.base_int);
            } else if (hero.primary_attr === "all") {
              heroSave.state = "Универсал";
              heroSave.baseAttackMin =
                Number(hero.base_attack_min) +
                Number(
                  (
                    (Number(hero.base_int) +
                      Number(hero.base_agi) +
                      Number(hero.base_str)) *
                    0.7
                  ).toFixed(0)
                );
              heroSave.baseAttackMax =
                Number(hero.base_attack_max) +
                Number(
                  (
                    (Number(hero.base_int) +
                      Number(hero.base_agi) +
                      Number(hero.base_str)) *
                    0.7
                  ).toFixed(0)
                );
            }

            const pick1 = "1_pick";
            const win1 = "1_win";
            heroSave.heraldPick = hero[pick1];
            heroSave.heraldWin = hero[win1];
            heroSave.heraldPercentWin =
              Number(heroSave.heraldWin) / (Number(heroSave.heraldPick) / 100);

            const pick2 = "2_pick";
            const win2 = "2_win";
            heroSave.guardianPick = hero[pick2];
            heroSave.guardianWin = hero[win2];
            heroSave.guardianPercentWin =
              Number(heroSave.guardianWin) /
              (Number(heroSave.guardianPick) / 100);

            const pick3 = "3_pick";
            const win3 = "3_win";
            heroSave.crusaderPick = hero[pick3];
            heroSave.crusaderWin = hero[win3];
            heroSave.crusaderPercentWin =
              Number(heroSave.crusaderWin) /
              (Number(heroSave.crusaderPick) / 100);

            const pick4 = "4_pick";
            const win4 = "4_win";
            heroSave.archonPick = hero[pick4];
            heroSave.archonWin = hero[win4];
            heroSave.archonPercentWin =
              Number(heroSave.archonWin) / (Number(heroSave.archonPick) / 100);

            const pick5 = "5_pick";
            const win5 = "5_win";
            heroSave.legendPick = hero[pick5];
            heroSave.legendWin = hero[win5];
            heroSave.legendPercentWin =
              Number(heroSave.legendWin) / (Number(heroSave.legendPick) / 100);

            const pick6 = "6_pick";
            const win6 = "6_win";
            heroSave.ancientPick = hero[pick6];
            heroSave.ancientWin = hero[win6];
            heroSave.ancientPercentWin =
              Number(heroSave.ancientWin) /
              (Number(heroSave.ancientPick) / 100);

            const pick7 = "7_pick";
            const win7 = "7_win";
            heroSave.divinePick = hero[pick7];
            heroSave.divineWin = hero[win7];
            heroSave.divinePercentWin =
              Number(heroSave.divineWin) / (Number(heroSave.divinePick) / 100);

            const pick8 = "8_pick";
            const win8 = "8_win";
            heroSave.immortalPick = hero[pick8];
            heroSave.immortalWin = hero[win8];
            heroSave.immortalPercentWin =
              Number(heroSave.immortalWin) /
              (Number(heroSave.immortalPick) / 100);

            const proPick = "pro_pick";
            const proWin = "pro_win";
            heroSave.proPick = hero[proPick];
            heroSave.proWin = hero[proWin];
            heroSave.proPercentWin =
              Number(heroSave.proWin) / (Number(heroSave.proPick) / 100);

            const pubPick = "pub_pick";
            const pubWin = "pub_win";
            heroSave.pubPick = hero[pubPick];
            heroSave.pubWin = hero[pubWin];
            heroSave.pubPercentWin =
              Number(heroSave.pubWin) / (Number(heroSave.pubPick) / 100);

            const turboPick = "turbo_picks";
            const turboWin = "turbo_wins";
            heroSave.turboPick = hero[turboPick];
            heroSave.turboWin = hero[turboWin];
            heroSave.turboPercentWin =
              Number(heroSave.turboWin) / (Number(heroSave.turboPick) / 100);

            heroSave.totalGame =
              Number(heroSave.heraldPick) +
              Number(heroSave.guardianPick) +
              Number(heroSave.crusaderPick) +
              Number(heroSave.archonPick) +
              Number(heroSave.legendPick) +
              Number(heroSave.ancientPick) +
              Number(heroSave.divinePick) +
              Number(heroSave.immortalPick) +
              Number(heroSave.proPick) +
              Number(heroSave.pubPick) +
              Number(heroSave.turboPick);

            heroSave.totalWin =
              Number(heroSave.heraldWin) +
              Number(heroSave.guardianWin) +
              Number(heroSave.crusaderWin) +
              Number(heroSave.archonWin) +
              Number(heroSave.legendWin) +
              Number(heroSave.ancientWin) +
              Number(heroSave.divineWin) +
              Number(heroSave.immortalWin) +
              Number(heroSave.proWin) +
              Number(heroSave.pubWin) +
              Number(heroSave.turboWin);

            heroSave.percentWin =
              Number(heroSave.totalWin) / (Number(heroSave.totalGame) / 100);

            allHeroSave.push(heroSave);
          }

          localStorage.setItem("allHeroes", JSON.stringify(allHeroSave));
          localStorage.setItem("nowDate", JSON.stringify(date.getDate()));
        }
        this.allHeroes = JSON.parse(localStorage.getItem("allHeroes"));
      } catch (err) {
        console.log(err);
      }
    },
    async getHeroPerId() {
      if (localStorage.getItem("allHeroes") === null) {
        await this.getAllHeroes();
      }
      const allHeroes = JSON.parse(localStorage.getItem("allHeroes"));
      const id = this.$route.params.id;

      for (let hero of allHeroes) {
        if (hero.id.toString() === id.toString()) {
          this.hero = hero;
        }
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    random() {
      const number = Math.floor(Math.random() * (3 - 1 + 1));
      this.status = this.statuses[number];
    },
    async getItems() {
      if (localStorage.getItem("allItems") === null) {
        const responseStatus = await fetch(
          `https://api.opendota.com/api/constants/items`
        );
        const responseItems = await responseStatus.json();

        localStorage.setItem("allItems", JSON.stringify(responseItems));
      }
      const allItems = JSON.parse(localStorage.getItem("allItems"));

      const responseStatus = await fetch(
        `https://api.opendota.com/api/heroes/${this.hero.id}/itemPopularity`
      );
      const responseItemsHero = await responseStatus.json();

      this.topItems.startGame = [];
      for (let i in responseItemsHero.start_game_items) {
        for (let y in allItems) {
          if (Number(allItems[y].id) === Number(i)) {
            this.topItems.startGame.push({
              id: allItems[y].id,
              img: "https://cdn.cloudflare.steamstatic.com" + allItems[y].img,
              name: allItems[y].dname,
            });
          }
        }
      }

      this.topItems.earlyGame = [];
      for (let i in responseItemsHero.early_game_items) {
        for (let y in allItems) {
          if (Number(allItems[y].id) === Number(i)) {
            this.topItems.earlyGame.push({
              id: allItems[y].id,
              img: "https://cdn.cloudflare.steamstatic.com" + allItems[y].img,
              name: allItems[y].dname,
            });
          }
        }
      }

      this.topItems.midGame = [];
      for (let i in responseItemsHero.mid_game_items) {
        for (let y in allItems) {
          if (Number(allItems[y].id) === Number(i)) {
            this.topItems.midGame.push({
              id: allItems[y].id,
              img: "https://cdn.cloudflare.steamstatic.com" + allItems[y].img,
              name: allItems[y].dname,
            });
          }
        }
      }

      this.topItems.lateGame = [];
      for (let i in responseItemsHero.late_game_items) {
        for (let y in allItems) {
          if (Number(allItems[y].id) === Number(i)) {
            this.topItems.lateGame.push({
              id: allItems[y].id,
              img: "https://cdn.cloudflare.steamstatic.com" + allItems[y].img,
              name: allItems[y].dname,
            });
          }
        }
      }

      this.heroItems = this.topItems.startGame;
    },
    changeItems(data) {
      console.log(data);
      if (data === "Начальные предметы") {
        this.heroItems = this.topItems.startGame;
      } else if (data === "Стартовые предметы") {
        this.heroItems = this.topItems.earlyGame;
      } else if (data === "Средние предметы") {
        this.heroItems = this.topItems.midGame;
      } else if (data === "Поздние предметы") {
        this.heroItems = this.topItems.lateGame;
      }
    },
  },
  mounted() {
    this.getHeroPerId();
    this.random();
    this.getItems();
  },
};
</script>

<style scoped>
.tara-enter-active,
.tara-leave-active {
  transition: all 0.7s ease;
}
.tara-enter-from,
.tara-leave-to {
  transform: translateX(-300px);
}

.hero-page {
  padding: 0 20px;
}

.header-page {
  display: flex;

  margin-top: 40px;
  margin-bottom: 30px;
}

.img {
  width: 250px;
  height: 150px;
  border-radius: 10px;
  box-shadow: 0 0 5px 5px #0a1f32;
}

.img-atr {
  width: 35px;
  height: 35px;
}

.text {
  margin-left: 100px;
  color: #d2d2d2;
}
.name-hero {
  font-size: 44px;
}
.status-hero {
  font-size: 24px;
}

.roles {
  display: flex;
  gap: 10px;
}

.hero-information {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #d2d2d2;
  font-size: 22px;
}
.block-information {
  background-color: #2d384a;
  box-shadow: 0 0 5px 5px #0a1f32;
  width: 100%;

  padding: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.semi-title {
  color: #d2d2d2;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 5px;
}

.block-states {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  margin-top: 15px;
  background-color: #0a1f32;
  border-radius: 15px;
  user-select: none;
}

.base-state {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
}

.best-items {
  background-color: #2d384a;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 5px 5px #0a1f32;
  margin-top: 10px;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.hero-page__select-list {
  width: 100% !important;
  box-shadow: 0 0 1px 3px #0a1f32;
  border-radius: 15px;
}

.items-block {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  background-color: #0a1f32;
  padding: 10px;
  border-radius: 15px;
  width: 100%;
}

.img-item {
  width: 75px;
  border-radius: 5px;
}

.block-winrate {
  background-color: #2d384a;
  box-shadow: 0 0 5px 5px #0a1f32;
  border-radius: 15px;

  padding: 20px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.winrate-string {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 5px 10px;
  background-color: #0a1f32;
  border-radius: 15px;

  margin: 10px 0;
  user-select: none;
}

.help-block__winrate-block-rang {
  display: flex;
  align-items: center;
}

.help-block__winrate-block-percent {
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 300px;
}

.img-rang {
  width: 70px;
  margin-right: 10px;
}

.name-rang {
  color: #d2d2d2;
  font-size: 24px;
}

.prog {
  width: 90%;
  background-color: rgb(227, 29, 29);
  height: 5px;
}
.prog::-webkit-progress-bar {
  background-color: rgb(227, 29, 29);
}
.prog::-webkit-progress-value {
  background-color: rgb(64, 182, 35);
}

.good-percent-win {
  color: rgb(61, 246, 15);
  font-size: 16px;
  min-width: 60px;
}
.bad-percent-win {
  color: rgb(235, 84, 84);
  font-size: 16px;
  min-width: 60px;
}

@media (max-width: 650px) {
  .header-page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .text {
    margin-top: 30px;
    margin-left: 20px;
  }
  .name-rang {
    font-size: 18px;
  }
  .help-block__winrate-block-percent {
    min-width: 200px;
  }
  .winrate-string {
    display: flex;
    flex-direction: column;
  }
  .block-states {
    display: flex;
    flex-wrap: wrap;
  }
  .base-state {
    margin: 10px 0;
    padding: 10px;
  }
}

@media (max-width: 485px) {
  .block-states {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
