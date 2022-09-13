<template>
  <div class="grid">
    <grid-card
      v-for="(item, index) in filterProducts"
      :key="index"
      :id="item.id"
      :number="item.number"
      :type="item.type"
      :creationDate="item.creationDate"
    />
  </div>
</template>

<script>
import GridCard from '@/components/elements/GridCard.vue';

export default {
  components: {
    GridCard,
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
  .grid {
    margin: 16px 0 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
  }
</style>
