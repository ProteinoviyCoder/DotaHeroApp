<template>
  <div class="main-page">
    <div class="filter-panel">
      <CoreTitle class="title__main-page" :title="titlePage"></CoreTitle>
      <MyInputSearch
        :valueInput="searchHero"
        @updateValue="updateValue"
        :placeholder="placeholder"
        :arrayForSearch="heroesStorage"
        @chooseHero="chooseHero"
      ></MyInputSearch>
      <MySelectList
        @selectState="selectState"
        :items="stateHeroes"
        class="main__select-list"
        :startValue="startValueSelectList"
      ></MySelectList>
    </div>
    <SomeList :items="allHeroes"></SomeList>
  </div>
</template>

<script>
import CoreTitle from "@/components/CoreTitle";
import SomeList from "@/components/SomeList";

export default {
  name: "Main",
  components: {
    CoreTitle,
    SomeList,
  },
  data() {
    return {
      titlePage: "Все герои",
      allHeroes: [],
      stateHeroes: ["Ловкость", "Сила", "Интеллект", "Универсал"],
      searchHero: "",
      placeholder: "Найти кого-то конкретного",
      heroesStorage: JSON.parse(localStorage.getItem("allHeroes")),
      startValueSelectList: "Все атрибуты",
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
    selectState(state) {
      const heroes = JSON.parse(localStorage.getItem("allHeroes"));
      if (state === "Все атрибуты") {
        this.allHeroes = heroes;
        this.titlePage = "Все герои";
      } else {
        this.allHeroes = [];
        for (let hero of heroes) {
          if (hero.state.includes(state)) {
            this.allHeroes.push(hero);
          }
        }
        this.titlePage = "Все герои: " + state;
      }
    },
    updateValue(value) {
      this.searchHero = value;
    },
    chooseHero(hero) {
      if (hero !== "") {
        localStorage.setItem("local", JSON.stringify(this.allHeroes));
        this.allHeroes = [];
        const heroesStorage = JSON.parse(localStorage.getItem("allHeroes"));
        for (let i of heroesStorage) {
          if (i.heroName === hero) {
            this.allHeroes.push(i);
          }
        }
      } else {
        this.allHeroes = JSON.parse(localStorage.getItem("allHeroes"));
      }
    },
  },
  mounted() {
    this.getAllHeroes();
  },
};
</script>

<style scoped>
.main-page {
  padding: 0 10px;
}

.title__main-page {
  width: 60%;
}

.filter-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;

  background-color: #2d384a;
  box-shadow: 0 0 5px 5px #0a1f32;

  margin: 20px 0;
  padding: 20px;
  border-radius: 15px;
}

.main__select-list {
  min-width: 150px;
}

@media (max-width: 680px) {
  .filter-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title__main-page {
    width: 100%;
  }
}
</style>
