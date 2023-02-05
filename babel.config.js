module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@dtos': './src/dtos',
            '@components': './src/components',
            '@screens': './src/screens',
            '@routes': './src/routes',
            '@global': './src/global'
          }
        },
      ],
    ],
  };
};
