module.exports = function override(config) {
  // Prevents conflicts when multiples bundles generated by different versions of Webpack
  // are loaded on the same page
  config.output.jsonpFunction = "SAFE_jsonpFunction";


  

  // ⬇ Uncomment to output a single file
  // delete config.output.chunkFilename;
  // delete config.optimization.runtimeChunk;
  // delete config.optimization.splitChunks;

  // ⬇ Uncomment to remove hashes from filenames
  // config.output.filename = "static/js/[name].js";

  return config;
};
