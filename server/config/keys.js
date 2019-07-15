//keys.js - determine which environment keys to use
if(process.env.NODE_ENV === 'production') {
  //use production keys
  module.exports = require('./prodKeys');
}else {
  module.exports = require('./devKeys');
}