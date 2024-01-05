<template>
  <div class="input-block">
    <input
      ref="input"
      :value="valueInput"
      class="input"
      :type="inputType"
      @input.stop="updateValue"
      :placeholder="placeholder"
      @blur="checkFocus"
    />
    <div class="icon-input">
      <img
        class="search-btn"
        v-show="valueInput === ''"
        src="@/assets/search.png"
        alt="#"
      />
      <div v-show="valueInput !== ''" class="delete-btn" @click="clearInput">
        x
      </div>
    </div>

    <ul v-show="falgFocus" class="search-list" ref="searchList">
      <li
        @click.stop="chooseHero"
        class="search-item"
        :class="{
          none: !item.flagSearch,
        }"
        v-for="item in arrayForSearch"
      >
        {{ item.heroName }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyInputSearch",
  data() {
    return {
      falgFocus: false,
    };
  },
  props: {
    inputType: {
      type: String,
      default: "text",
    },
    valueInput: [Number, String],
    placeholder: String,
    arrayForSearch: Array,
  },
  methods: {
    updateValue(event) {
      this.$emit("updateValue", event.target.value);

      const value = event.target.value.toLowerCase().trim();

      if (value.length !== 0) {
        this.falgFocus = true;
        this.$refs.searchList.classList.remove("none");
      }

      for (let i of this.arrayForSearch) {
        if (i.heroName.toLowerCase().trim().includes(value)) {
          i.flagSearch = true;
        } else {
          i.flagSearch = false;
        }
      }
    },
    clearInput() {
      this.$refs.input.value = "";
      this.$emit("updateValue", "");
      this.$emit("chooseHero", "");
    },

    chooseHero(event) {
      this.$emit("updateValue", event.target.textContent);
      this.$emit("chooseHero", event.target.textContent);
    },
    checkFocus() {
      setTimeout(() => {
        this.falgFocus = false;
      }, 500);
    },
  },
};
</script>

<style scoped>
.input-block {
  position: relative;
}
.input {
  padding: 10px 45px 10px 15px;

  background-color: #2d384a;

  border: 2px solid #d2d2d2;
  border-radius: 5px;
  color: #d2d2d2;
  font-size: 18px;

  outline: none;
}
.input:focus {
  box-shadow: 0 0 5px 5px #0a1f32;
  background-color: #344756;
}

.icon-input {
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px 10px 0px 0px;
}
.search-btn {
  width: 27px;
}
.delete-btn {
  cursor: pointer;
  color: #000000;
  font-weight: 700;
  font-size: 18px;
  background-color: #d2d2d2;
  border-radius: 100px;
  padding: 2px 7px;
}

.search-list {
  z-index: 10;
  position: absolute;
  background-color: #344756;
  margin-top: 1px;
  width: 100%;
  max-height: 250px;
  overflow-y: auto;
  border-radius: 5px;
  box-shadow: -1px 2px 5px 5px #0a1f32;
}

.search-list::-webkit-scrollbar {
  background-color: #0a1f32;
  width: 7px;
  border-radius: 5px;
}
.search-list::-webkit-scrollbar-thumb {
  background-color: #d2d2d2;
  border-radius: 5px;

  height: 15px;
}

.search-item {
  padding: 5px 10px;
  color: #d2d2d2;
  cursor: pointer;
  border-radius: 5px;
}
.search-item:hover {
  background-color: #0a1f32;
}

.none {
  display: none;
}

@media (max-width: 650px) {
  .input {
    padding: 10px 45px 10px 5px;
    font-size: 16px;
  }
  @media (max-width: 300px) {
    .input {
      font-size: 14px;
    }
  }
}
</style>
