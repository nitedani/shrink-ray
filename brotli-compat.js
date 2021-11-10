const zlib = require("zlib");

module.exports = function brotliCompat() {
  return {
    compressStream: (opts) => zlib.createBrotliCompress(opts),
    decompressStream: (opts) => zlib.createBrotliDecompress(opts),
  };
};
