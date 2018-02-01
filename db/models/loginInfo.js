const db = require('../');

const loginInfo = db.Model.extend({
  tableName: 'loginInfo',
  username: () => {
    return this.belongsTo('loginInfo');
  }
});

module.exports = db.model('loginInfo', loginInfo);