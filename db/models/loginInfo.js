const db = require('../');

const loginInfo = db.Model.extend({
  tableName: 'logininfo'
});

module.exports = db.model('loginInfo', loginInfo);