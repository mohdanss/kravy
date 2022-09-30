// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["nativewind/babel"],
  };
};

// {
//   "presets": [
//     [
//       "@babel/preset-env",
//       {
//         "targets": {
//           "node": "current"
//         }
//       }
//     ]
//   ],
//   "plugins": ["nativewind/babel"]
// }
