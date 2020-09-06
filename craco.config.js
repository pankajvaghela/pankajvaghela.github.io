const CracoLessPlugin = require("craco-less");
const { antDCustomVars } = require("./src/common/style/antdCustomVars");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: antDCustomVars,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
// rules: [
//   // Whatever other rules you have here...
//   {
//     test: /\.less$/,
//     use: [
//       {
//         loader: "style-loader"
//       },
//       {
//         loader: "css-loader",
//         options: {
//           sourceMap: true,
//           modules: true,
//           localIdentName: "[local]___[hash:base64:5]"
//         }
//       },
//       {
//         loader: "less-loader"
//       }
//     ]
//   }
// ]
