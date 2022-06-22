<!-- 
  - 资产查询首页
 -->
<template>
  <div>
    <router-view class="router-view" v-slot="{ Component }">
      <keep-alive :include="keepAliveRoutes">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <div class="app-wrapper__footer animate-fade-in-from-bottom  safe-area-bottom">
      <NavTabBar />
    </div>
  </div>
</template>
<script>

import NavTabBar from './components/navTabBar'
export default {
  name: 'home',
  components: {
    NavTabBar
  },
  setup() {
    const keepAliveRoutes = [
      'Mine',
      'TaskHome',
      'Manage',
    ]


    return {
      keepAliveRoutes,
    }
  }
}
</script>

<style lang="scss">
.app-wrapper__footer {
  position: fixed;
  bottom: 24px;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

}
</style>
