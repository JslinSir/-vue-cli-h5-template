 
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')

module.exports = {
  chainWebpack: config => {
    config.plugins.delete("pwa");
    config.plugins.delete("workbox");
  },
  publicPath: '/',
  devServer: {
    port:'8088',
    proxy: {
      "/ds-seller-api": {
        target: process.env.VUE_APP_BASE_URL,
        toProxy: true,
        ingorePath: true,
        changeOrigin: true
      },
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/_index.scss";',
      },
    }
  },
  configureWebpack: {
    devtool: "source-map",
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  }

}
