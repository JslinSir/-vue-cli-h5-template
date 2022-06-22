<template>
  <div class="app-wrapper">
    <router-view class="router-view" v-slot="{ Component }">
      <transition :name="transitionName">
        <keep-alive :include="keepAliveRoutes">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: "App",

  setup() {
    const keepAliveRoutes = []
    const router = useRouter()
    const state = reactive({
      transitionName: 'slide-left'
    })
    router.beforeEach((to, from) => {
      if (to.meta.index > from.meta.index) {
        state.transitionName = 'slide-left' // 向左滑动
      } else if (to.meta.index < from.meta.index) {
        // 由次级到主级
        state.transitionName = 'slide-right'
      } else {
        state.transitionName = '' // 同级无过渡效果
      }
    })



    return {
      keepAliveRoutes,
      ...toRefs(state),
    }
  }

};
</script>


<style lang="scss">
#app {
  height: 100%;
}

.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}

.router-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
}
</style>
