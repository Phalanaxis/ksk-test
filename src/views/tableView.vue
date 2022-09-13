<template>
  <table class="table">
    <tr class="table__head">
      <td class="table__head-cell" width="15%">ID</td>
      <td class="table__head-cell" width="35%">Номер накладной</td>
      <td class="table__head-cell" width="20%">Тип заказа</td>
      <td class="table__head-cell" width="25%">Дата создания</td>
      <td class="table__head-cell" width="5%"></td>
    </tr>
    <tbody class="table__body">
      <table-row
        v-for="(item, index) in filterProducts"
        :key="index"
        :id="item.id"
        :number="item.number"
        :type="item.type"
        :creationDate="item.creationDate"
      />
    </tbody>
  </table>
</template>

<script>
import TableRow from '@/components/elements/TableRow.vue';

export default {
  components: {
    TableRow,
  },
  computed: {
    filterProducts() {
      let tempArray = this.$store.getters.GET_PRODUCTS.slice();
      if (this.$store.getters.GET_SORTBY === 'lowFirst') {
        tempArray.sort((a, b) => {
          if (a.number < b.number) {
            return -1;
          }
          if (a.number > b.number) {
            return 1;
          }
          return 0;
        });
      }
      if (this.$store.getters.GET_SORTBY === 'highFirst') {
        tempArray.sort((a, b) => {
          if (a.number < b.number) {
            return 1;
          }
          if (a.number > b.number) {
            return -1;
          }
          return 0;
        });
      }
      if (this.$store.getters.GET_SEARCHBYINDEX !== '') {
        tempArray = tempArray.filter((item) => item.number.includes(this.$store.getters.GET_SEARCHBYINDEX));
      }
      if (this.$store.getters.GET_TYPE !== '') {
        tempArray = tempArray.filter((item) => item.type === this.$store.getters.GET_TYPE);
      }
      return tempArray;
    },
  },
};
</script>

<style lang="scss" scoped>
  .table {
    border-spacing: 0px;
    border-collapse: collapse;
    width: 100%;
    margin: 16px 0 0 0;
    &__head {
      border-spacing: 3px;
      height: 40px;
    }
    &__head-cell {
      background-color: #E6E6E6;
      padding: 0 1px;
      text-align: center;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      color: #000;
    }
    &__body {
      background-color: #FFF;
      border: 1px solid #E6E6E6;
    }
    // &__row {
    //   height: 40px;
    //   margin: 0 2px;
    //   border: 1px solid #E6E6E6;
    // }
    // &__row-cell {
    //   font-weight: 400;
    //   font-size: 14px;
    //   line-height: 16px;
    //   color: #000;
    //   &:nth-child(1) {
    //     padding: 0 0 0 15px;
    //   }
    // }
    // &__row-burger {
    //   display: flex;
    // }
    // &__burger {
    //   position: relative;
    //   display: flex;
    //   flex-direction: column;
    //   align-items: center;
    //   cursor: pointer;
    // }
    // &__burger-dot {
    //   width: 4px;
    //   height: 4px;
    //   background-color: #045DA7;
    //   border-radius: 50%;
    //   &:not(:last-child) {
    //     margin: 0 0 3px 0px;
    //   }
    // }
    // &__delete-modal {
    //   display: none;
    //   position: absolute;
    //   bottom: -40px;
    //   right: 0;
    //   width: 150px;
    //   height: 40px;
    //   background-color: #FFF;
    //   &-active {
    //     display: flex;
    //   }
    // }
  }
</style>
