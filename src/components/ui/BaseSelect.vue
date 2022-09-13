<template>
  <div
    class="BaseSelect"
    @click="switchOpen"
  >
    <div
      :class="{
        'BaseSelect__block': true,
        'BaseSelect__block_active': isOpen
      }"
    >
      <div
        class="BaseSelect__element"
        @click="switchSelect()"
      >
        {{ this.default }}
        <arrow-icon class="BaseSelect__arrow" />
      </div>
      <div
        @click="switchSelect(index, el)"
        :class="{'BaseSelect__element': true, 'BaseSelect__element-active': true}"
      >
        Номер накладной
        <arrow-down class="BaseSelect__arrow-active" />
      </div>
      <div
        @click="switchSelect(index, el)"
        :class="{'BaseSelect__element': true, 'BaseSelect__element-active': true}"
      >
        Номер накладной
        <arrow-up class="BaseSelect__arrow-active" />
      </div>
    </div>
  </div>
</template>

<script>
import ArrowIcon from '@/assets/svg/ArrowIcon.vue';
import ArrowDown from '@/assets/svg/ArrowDown.vue';
import ArrowUp from '@/assets/svg/ArrowUp.vue';

export default {
  components: {
    ArrowIcon,
    ArrowDown,
    ArrowUp,
  },
  props: {
    default: {
      type: String,
      default: 'default',
    },
    array: Array,
  },
  data() {
    return {
      isOpen: false,
      isSelect: false,
    };
  },
  methods: {
    switchOpen() {
      this.isOpen = !this.isOpen;
    },
    switchSelect(index, value) {
      if (this.isOpen) {
        if (index) {
          this.isSelect = index;
          this.$emit('select', value);
        } else {
          this.isSelect = 'default';
          this.$emit('select', 'default');
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .BaseSelect {
    position: relative;
    width: 232px;
    height: 32px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    &__block {
      position: absolute;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid #E0E5E6;
      border-radius: 2px;
      &_active {
        z-index: 3;
        height: auto;
        background-color: #FFF;
      }
    }
    &__arrow {
      position: absolute;
      right: 14px;
      top: 13px;
      &-active {
        position: absolute;
        right: 14px;
        top: 8px;
      }
    }
    &__element {
      width: 100%;
      height: 32px;
      min-height: 32px;
      display: inline-block;
      padding: 8px 12px;
      align-items: center;
      position: relative;
      z-index: 4;
      color: #2B2839;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      &-active {
        border-top: 1px solid #E0E5E6;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
</style>
