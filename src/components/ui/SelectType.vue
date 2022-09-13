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
        @click="switchSelect('')"
      >
        {{ this.default }}
        <arrow-icon class="BaseSelect__arrow" />
      </div>
      <div
        v-for="(item, index) in array"
        :key="index"
        @click="switchSelect(item)"
        :class="{
          'BaseSelect__element': true,
          'BaseSelect__element_active': true,
          'BaseSelect__element_choosen': isSelect === item && isOpen !== true
        }"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import ArrowIcon from '@/assets/svg/ArrowIcon.vue';

export default {
  components: {
    ArrowIcon,
  },
  props: {
    default: {
      type: String,
      default: 'default',
    },
    array: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const isOpen = ref(false);
    const isSelect = ref('');

    function switchOpen() {
      isOpen.value = !isOpen.value;
    }
    function switchSelect(value) {
      isSelect.value = value;
      this.$store.commit('SET_TYPE', value);
    }
    return {
      isOpen,
      isSelect,
      switchOpen,
      switchSelect,
    };
  },
};
</script>

<style lang="scss" scoped>
  .BaseSelect {
    position: relative;
    width: 248px;
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
        .BaseSelect__arrow {
          transform: rotate(180deg);
        }
      }
    }
    &__arrow {
      position: absolute;
      right: 14px;
      top: 13px;
      transition: transform .3s;
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
      color: #A5A5A5;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      &_active {
        border-top: 1px solid #E0E5E6;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
      }
      &_choosen {
        border-top: none;
        order: -1;
      }
    }
  }
</style>
