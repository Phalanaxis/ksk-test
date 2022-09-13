<template>
  <div>
    <the-header />
    <main class="main">
    <section class="products-page">
      <div class="products-page__filters-box">
        <h4 class="products-page__filters-title">Фильтр</h4>
        <label class="products-page__label" for="fliterById">
          <div class="products-page__label-text">Номер накладной:</div>
          <input
            class="products-page__filter-input"
            placeholder="Введите фрагмент"
            aria-labelledby="#fliterById"
            type="text"
          />
        </label>
        <label class="products-page__label" for="fliterByType">
          <div class="products-page__label-text">Тип заказа:</div>
          <input
            class="products-page__filter-input"
            placeholder="Введите фрагмент"
            aria-labelledby="#fliterByType"
            type="text"
          />
        </label>
      </div>
      <div class="products-page__products-container">
        <div class="products-page__view-control-panel">
          <div class="products-page__sorting-panel">
            <base-select default="Сортировка" />
          </div>
        </div>
        <router-view />
      </div>
    </section>
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import BaseSelect from '@/components/ui/BaseSelect.vue';

export default {
  components: {
    TheHeader,
    BaseSelect,
  },
  setup() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
  .main {
    background-color: #F8F8F8;
    padding: 32px 126px 0 116px;
    min-height: calc(100vh - 292px);
  }
  .products-page {
    display: flex;
    &__filters-box {
      margin: 0 16px 0 0;
      padding: 8px 16px 16px 16px;
      background-color: #FFF;
      width: 280px;
    }
    &__filters-title {
      margin: 0 0 24px 0;
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
      margin: 0 0 4px 0;
    }
    &__products-container {
      width: calc(100% - 296px);
    }
    &__view-control-panel {
      height: 64px;
      width: 100%;
    }
    &__sorting-panel {
      height: 100%;
      width: 75%;
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
  }
</style>
