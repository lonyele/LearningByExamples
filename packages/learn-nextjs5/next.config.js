const withAwesomeTypescript = require("next-awesome-typescript");
const withCSS = require('@zeit/next-css')

// const withLess = require('@zeit/next-less')
const awesomeTypescriptOptions = {
  useCheckerPlugin: true,
  loaderOptions: {
    transpileOnly: false,
  },
};
const nextConfiguration = {
  webpack: (config, { dev }) => {

    return config
  }
};
module.exports = withAwesomeTypescript(withCSS({
  cssLoaderOptions: {
    importLoaders: 1,
  },
  awesomeTypescriptOptions: {
    useCheckerPlugin: true,
    loaderOptions: {
      transpileOnly: false,
    },
  }
}));

// 기본 next-typescript 사용법
// const withTypescript = require('@zeit/next-typescript')
// {
//   useCheckerPlugin: true,
//   typescriptLoaderOptions: {
//     transpileOnly: false,
// },