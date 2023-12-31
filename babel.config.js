module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module-resolver", {
      "alias": {
        "src": "./src",
        "@components": "./src/components",
        "@constants": "./src/constants",
        "@navigation": "./src/navigation",
        "@assets": "./src/assets",
        "@pages": "./src/pages"

      }
    }]
  ]
};


// const plugins = [
//   [
//     require.resolve('babel-plugin-module-resolver'),
//     {
//       root: ["./src/"],
//       alias: {
//         "src": "./src",
//         "@components": "./src/components",
//         "@constants": "./src/constants",
//         "@navigation": "./src/navigation",
//         "@assets": "./src/assets",
//         "@pages": "./src/pages"

//       }
//     }

//   ]

// ];
