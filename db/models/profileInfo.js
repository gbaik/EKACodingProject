const db = require('../');

const profileInfo = db.Model.extend({
  tableName: 'profileinfo',
});

module.exports = db.model('profileInfo', profileInfo);