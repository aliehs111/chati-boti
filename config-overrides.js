const path = require("path");

module.exports = function override(config, env) {
  // Add the polyfill for 'stream'
  config.resolve.fallback = {
    ...config.resolve.fallback,
    stream: require.resolve("stream-browserify"),
  };

  return config;
};
