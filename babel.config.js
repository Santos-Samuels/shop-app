module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      ["module-resolver", {
        "root": ["./"],
        "alias": {
          "@src": "./src",
          "@pages": "./src/pages",
          "@components": "./src/components",
        }
      }]
    ]
  };
};