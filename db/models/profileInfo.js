const db = require('../');

const profileInfo = db.Model.extend({
  tableName: 'profileInfo'
});

module.exports = db.model('profileInfo', profileInfo);