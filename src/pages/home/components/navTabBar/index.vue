<template>
  <div class="nav-tab-bar-box">
    <nav class="nav-tab-item" v-for="(item, index) in tabConfig" :key="index">
      <router-link :to="item.pathName" class="nav-tab-item-link" v-slot="{ isActive }" replace>
        <img src="@/assets/images/icons/icon_inventory_processing.png" class="nav-tab-icon" />
        <span class="nav-tab-text" :class="{ active: isActive }">{{ item.name }}</span>
      </router-link>
    </nav>
  </div>
</template>
<script>

import { TABCONFIG } from './config'

export default {
  name: 'NavTabBar',
  props: {},

  setup() {
    return {
      tabConfig: TABCONFIG,
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-tab-bar-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  width: 560px;
  height: 120px;
  border-radius: 60px;
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.16);

  .nav-tab-item {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .nav-tab-item-link {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .nav-tab-icon {
      width: 48px;
      height: 48px;
    }

    .nav-tab-text {
      margin-top: 8px;
      font-size: 20px;
      color: #666666;
    }

    .active {
      color: var(--theme-color);
      @extend .animate-scle-in;
    }
  }
}
</style>
