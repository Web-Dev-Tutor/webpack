const path = require('path');
let dist = "out";
let packedfile = "bundle.js";
let entry = './src/index.js';


module.exports = {
  entry,
  output: {
    filename: packedfile,
    path: path.resolve(__dirname, 'out')
  }
};