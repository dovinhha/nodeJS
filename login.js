const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('login.json') 

acc = low(adapter);
acc.defaults({ accounts: []})
  .write()

module.exports = acc;