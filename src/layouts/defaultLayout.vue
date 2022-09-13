<template>
  <div>
    <the-header />
    <main class="main">
      <section class="products-page">
        <div class="products-page__filters-box">
          <h4 class="products-page__filters-title">Фильтр</h4>
          <div class="products-page__filters-container">
            <label class="products-page__label" for="fliterById">
              <div class="products-page__label-text">Номер накладной:</div>
              <input
                class="products-page__filter-input"
                placeholder="Введите фрагмент"
                aria-labelledby="#fliterById"
                type="text"
                v-model="inputValue"
                @change="emitInput"
              />
            </label>
            <div class="products-page__label">
              <div class="products-page__label-text">Тип заказа:</div>
              <select-type default="Выберите из списка" :array="sortTypes()" />
            </div>
          </div>
        </div>
        <div class="products-page__products-container">
          <div class="products-page__view-control-panel">
            <div class="products-page__sorting-panel">
              <base-select default="Сортировка" />
            </div>
            <div class="products-page__view-change">
              <router-link to="/">
                <div :class="{'products-page__table-button': true, 'products-page__table-button-active': this.$route.path === '/'}">
                  <burger-table />
                </div>
              </router-link>
              <router-link to="/grid">
                <div :class="{'products-page__grid-button': true, 'products-page__grid-button-active': this.$route.path === '/grid'}">
                  <burger-grid />
                </div>
              </router-link>
            </div>
          </div>
          <router-view />
        </div>
      </section>
    </main>
    <the-footer />
  </div>
</template>

<script>
import json from '@/assets/json/cards.json';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import BaseSelect from '@/components/ui/BaseSelect.vue';
import BurgerTable from '@/assets/svg/BurgerTable.vue';
import BurgerGrid from '@/assets/svg/BurgerGrid.vue';
import SelectType from '@/components/ui/SelectType.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    BaseSelect,
    BurgerTable,
    BurgerGrid,
    SelectType,
  },
  data() {
    return {
      inputValue: '',
    };
  },
  mounted() {
    this.$store.commit('SET_PRODUCTS', json);
  },
  methods: {
    emitInput() {
      this.$store.commit('SET_SEARCHBYINDEX', this.inputValue);
    },
    sortTypes() {
      const tempSet = new Set();
      this.$store.getters.GET_PRODUCTS.map((item) => tempSet.add(item.type));
      return Array.from(tempSet);
    },
  },
};
</script>

<style lang="scss" scoped>
  .main {
    background-color: #F8F8F8;
    padding: 32px 126px 0 116px;
    min-height: calc(100vh - 300px);
  }
  .products-page {
    display: flex;
    &__filters-box {
      margin: 0 16px 0 0;
      background-color: #FFF;
      width: 280px;
      height: 100%;
    }
    &__filters-title {
      padding: 8px 16px 8px 16px;
      margin: 0 0 24px 0;
      border-bottom: 1px solid #F8F8F8;
    }
    &__filters-container {
      padding: 0 16px 16px 16px;
    }
    &__label {
      &:not(:first-child) {
        margin: 16px 0 0 0;
      }
    }
    &__label-text {
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      margin: 16px 0 4px 0;
    }
    &__products-container {
      width: calc(100% - 296px);
    }
    &__view-control-panel {
      display: flex;
      height: 64px;
      width: 100%;
    }
    &__sorting-panel {
      height: 100%;
      width: 85%;
      background-color: #FFF;
      border-radius: 3px;
      box-shadow: 0px 4px 12px #E7E7E7;
      display: flex;
      align-items: center;
      padding: 0 0 0 16px;
    }
    &__filter-input {
      width: 100%;
      height: 32px;
      padding: 8px 12px;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #A5A5A5;
      background: #FFFFFF;
      border: 1px solid #D9D9D9;
      border-radius: 2px;
    }
    &__view-change {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 15%;
    }
    &__table-button, &__grid-button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background-color: #FFFFFF;
      border: 1px solid #647A8C;
      cursor: pointer;
      &-active {
        background-color: transparent;
      }
    }
    &__table-button {
      border-radius: 10px 0 0 10px;
    }
    &__grid-button {
      border-radius: 0 10px 10px 0;
    }
  }
</style>
