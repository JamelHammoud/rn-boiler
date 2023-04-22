module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      require.resolve('expo-router/babel')
      // [
      //   'module-resolver',
      //   {
      //     root: path.resolve(__dirname, '../../'),
      //     alias: {
      //       '@components': './components/*',
      //       '@scripts': './utils/scripts/index',
      //       '@types': './types/index'
      //     }
      //   }
      // ]
    ]
  }
}
