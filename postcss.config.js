module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8', 'last 10 versions'],
      grid: true
    },
    'postcss-px-to-viewport': {
      viewportWidth: 750,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: [
        'van',
        '.ignore',
        '.border',
        '.border-top',
        '.border-bottom',
        '.border-left',
        '.border-right'
      ],
      minPixelValue: 1,
      exclude: [/vant/]
    }
  }
}
