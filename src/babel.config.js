module.exports = function (api) {
  api.cache(true);

  return {
    babelrcRoots: ['.', './packages/*'],
    presets: [
      [
        'babel-preset-expo',
        {
          jsxRuntime: 'automatic',
          runtime: 'automatic',
          development: !api.env('production')
        }
      ]
    ],
    plugins: [
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      'react-native-reanimated/plugin'
    ],
    // Applies the react-refresh Babel plugin on non-production modes only
    ...(!api.env('production') && { plugins: ['react-refresh/babel'] })
  };
};
