const db = require('../');

const loginInfo = db.Model.extend({
  tableName: 'loginInfo'
});

module.exports = db.model('loginInfo', loginInfo);