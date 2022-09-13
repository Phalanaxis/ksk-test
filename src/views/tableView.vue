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
      <tr
        class="table__row"
        v-for="(item, index) in this.$store.state.products"
        :key="index"
      >
        <td class="table__row-cell">{{item.id}}</td>
        <td class="table__row-cell">{{item.number}}</td>
        <td class="table__row-cell">{{item.type}}</td>
        <td class="table__row-cell">{{transformDate(item.creationDate)}}</td>
        <td class="table__row-cell"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import { Store } from 'vuex';

export default {
  setup() {
    function transformDate(date) {
      const tempDate = new Date(date);
      const tempDay = (tempDate.getDay() >= 10) ? tempDate.getDay() : `0${tempDate.getDay()}`;
      const tempMonth = (tempDate.getMonth() >= 10) ? tempDate.getMonth() : `0${tempDate.getMonth()}`;
      const tempHours = (tempDate.getHours() >= 10) ? tempDate.getHours() : `0${tempDate.getHours()}`;
      const tempMinutes = (tempDate.getMinutes() >= 10) ? tempDate.getMinutes() : `0${tempDate.getMinutes()}`;
      const tempSeconds = (tempDate.getSeconds() >= 10) ? tempDate.getSeconds() : `0${tempDate.getSeconds()}`;
      return `${tempDay}.${tempMonth}.${tempDate.getFullYear()} ${tempHours}:${tempMinutes}:${tempSeconds}`;
    }
    return {
      transformDate,
    };
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
      // border: 1px solid #FFF;
    }
    &__head-cell {
      background-color: #E6E6E6;
      padding: 0 1px;
      text-align: center;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
    }
    &__body {
      background-color: #FFF;
      border: 1px solid #E6E6E6;
    }
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
  }
</style>
