<template>
  <div class="grid-card">
    <div class="grid-card__header">
      {{ id }}
      <div
        :class="{
          'grid-card__burger': true,
          'grid-card__burger-active': isDeleteWindowOpened,
        }"
        @click="openDeleteWindow"
      >
        <div class="grid-card__burger-dot" />
        <div class="grid-card__burger-dot" />
        <div class="grid-card__burger-dot" />
        <div
          :class="{
            'grid-card__delete-modal': true,
            'grid-card__delete-modal-active': isDeleteWindowOpened
          }"
          @click="deleteProduct()"
        >
          <delete-icon class="grid-card__delete-icon" />Удалить
        </div>
      </div>
    </div>
    <div class="grid-card__body">
      <div class="grid-card__body-column">
        <div class="grid-card__info-title">
          Номер накладной:
        </div>
        <div class="grid-card__info-title">
          Тип заказа:
        </div>
        <div class="grid-card__info-title">
          Дата создания:
        </div>
      </div>
      <div class="grid-card__body-column">
        <div class="grid-card__info-text">{{ number }}</div>
        <div class="grid-card__info-text">{{ type }}</div>
        <div class="grid-card__info-text">{{ transformDate(creationDate) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import DeleteIcon from '@/assets/svg/DeleteIcon.vue';

export default {
  components: {
    DeleteIcon,
  },
  props: {
    id: {
      type: String,
      default: '',
    },
    number: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    creationDate: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const isDeleteWindowOpened = ref(false);
    function openDeleteWindow() {
      isDeleteWindowOpened.value = !isDeleteWindowOpened.value;
    }
    function transformDate(date) {
      const tempDate = new Date(date);
      const tempDay = (tempDate.getDay() >= 10) ? tempDate.getDay() : `0${tempDate.getDay()}`;
      const tempMonth = (tempDate.getMonth() >= 10) ? tempDate.getMonth() : `0${tempDate.getMonth()}`;
      const tempHours = (tempDate.getHours() >= 10) ? tempDate.getHours() : `0${tempDate.getHours()}`;
      const tempMinutes = (tempDate.getMinutes() >= 10) ? tempDate.getMinutes() : `0${tempDate.getMinutes()}`;
      const tempSeconds = (tempDate.getSeconds() >= 10) ? tempDate.getSeconds() : `0${tempDate.getSeconds()}`;
      return `${tempDay}.${tempMonth}.${tempDate.getFullYear()} ${tempHours}:${tempMinutes}:${tempSeconds}`;
    }
    function deleteProduct() {
      this.$store.commit('SET_PRODUCTS', this.$store.getters.GET_PRODUCTS.filter((item) => item.id !== props.id));
    }
    return {
      isDeleteWindowOpened,
      openDeleteWindow,
      transformDate,
      deleteProduct,
    };
  },
};
</script>

<style lang="scss" scoped>
  .grid-card {
    &__header {
      padding: 0 20px 0 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      background-color: #EDE8F580;
      font-size: 14px;
      line-height: 16px;
      color: #000;
    }
    &__burger {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      &:hover {
        .grid-card__burger-dot {
          background-color: #045DA7;
        }
      }
      &-active {
        .grid-card__burger-dot {
          background-color: #045DA7;
        }
      }
    }
    &__burger-dot {
      width: 4px;
      height: 4px;
      background-color: #647A8C;
      border-radius: 50%;
      transition: background-color .3s;
      &:not(:last-child) {
        margin: 0 0 3px 0px;
      }
    }
    &__delete-modal {
      z-index: 2;
      display: none;
      position: absolute;
      bottom: -40px;
      right: 18px;
      width: 150px;
      height: 40px;
      background-color: #FFF;
      box-shadow: 0px 4px 4px rgba(182, 182, 182, 0.25);
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #2B2839;
      padding: 8px;
      transition: color .3s;
      border-radius: 2px;
      &:hover {
        color: #045DA7;
        .grid-card__delete-icon {
          fill: #045DA7;
        }
      }
      &-active {
        display: flex;
        align-items: center;
      }
    }
    &__delete-icon {
      fill: #647A8C;
      transition: fill .3s;
    }
    &__body {
      display: flex;
      padding: 0 0 8px 16px;
      background-color: #F6FAFB;
      box-shadow: 0px 4px 12px #EBEBEB;
    }
    &__body-column {
      &:not(:last-child) {
        margin: 0 8px 0 0;
      }
    }
    &__info-title {
      margin: 8px 0 0 0;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      color: #647A8C;
    }
    &__info-text {
      margin: 8px 0 0 0;
      font-size: 14px;
      line-height: 16px;
      color: #000;
    }
  }
</style>
