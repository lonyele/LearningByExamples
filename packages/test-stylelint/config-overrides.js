const rewireStyledComponents = require("react-app-rewire-styled-components");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config = rewireStyledComponents(config, env, {
    displayName: true,
    ssr: true
  });
  return config;
};
