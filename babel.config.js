module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      [
        "module-resolver", 
        {
          "alias": {
            '@styles': './assets/styles/',
						'@images': './assets/images/',
            '@components': './components/',
            '@pages': './pages/',
          }
        }
      ]
    ]
  };
};
