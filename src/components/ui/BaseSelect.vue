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
        @click="switchSelect(0)"
      >
        {{ this.default }}
        <arrow-icon class="BaseSelect__arrow" />
      </div>
      <div
        @click="switchSelect(1)"
        :class="{
          'BaseSelect__element': true,
          'BaseSelect__element_active': true,
          'BaseSelect__element_choosen': isSelect === 'highFirst' && isOpen !== true
        }"
      >
        Номер накладной
        <arrow-down class="BaseSelect__arrow-active" />
      </div>
      <div
        @click="switchSelect(2)"
        :class="{
          'BaseSelect__element': true,
          'BaseSelect__element_active': true,
          'BaseSelect__element_choosen': isSelect === 'lowFirst' && isOpen !== true
        }"
      >
        Номер накладной
        <arrow-up class="BaseSelect__arrow-active" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
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
  },
  setup() {
    const isOpen = ref(false);
    const isSelect = ref(false);

    function switchOpen() {
      isOpen.value = !isOpen.value;
    }
    function switchSelect(index) {
      if (isOpen.value) {
        if (index === 1) {
          isSelect.value = 'highFirst';
          this.$store.commit('SET_SORTBY', isSelect.value);
        } else if (index === 2) {
          isSelect.value = 'lowFirst';
          this.$store.commit('SET_SORTBY', isSelect.value);
        } else {
          isSelect.value = 'default';
          this.$store.commit('SET_SORTBY', isSelect.value);
        }
      }
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
      color: #2B2839;
      font-weight: 700;
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
