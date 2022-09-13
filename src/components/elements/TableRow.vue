<template>
  <tr
    class="table__row"
  >
    <td class="table__row-cell">{{id}}</td>
    <td class="table__row-cell">{{number}}</td>
    <td class="table__row-cell">{{type}}</td>
    <td class="table__row-cell">{{transformDate(creationDate)}}</td>
    <td class="table__row-cell">
      <div
        :class="{
          'table__burger': true,
          'table__burger-active': isDeleteWindowOpened,
        }"
        @click="openDeleteWindow"
      >
        <div class="table__burger-dot" />
        <div class="table__burger-dot" />
        <div class="table__burger-dot" />
        <div
          :class="{
            'table__delete-modal': true,
            'table__delete-modal-active': isDeleteWindowOpened
          }"
          @click="deleteProduct()"
        >
          <delete-icon class="table__delete-icon" />Удалить
        </div>
      </div>
    </td>
  </tr>
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
  .table {
    &__row {
      height: 40px;
      margin: 0 2px;
      border: 1px solid #E6E6E6;
    }
    &__row-cell {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #000;
      &:nth-child(1) {
        padding: 0 0 0 15px;
      }
    }
    &__row-burger {
      display: flex;
    }
    &__burger {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      &:hover {
        .table__burger-dot {
          background-color: #045DA7;
        }
      }
      &-active {
        .table__burger-dot {
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
        .table__delete-icon {
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
  }
</style>
