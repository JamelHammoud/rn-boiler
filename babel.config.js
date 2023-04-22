module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [require.resolve('expo-router/babel')],
      [
        'module-resolver',
        {
          alias: {
            '@views': './src/views/index.ts',
            '@components': './src/components/index.ts',
            '@scripts': './src/utils/scripts/index.ts',
            '@utils': './src/utils/index.ts',
            '@types': './src/types/index.ts',
            '@redux': './src/redux/index.ts'
          },
          extensions: ['.ts', '.tsx']
        }
      ]
    ]
  }
}
