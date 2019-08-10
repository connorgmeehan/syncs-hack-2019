const Base = require('./base');
const User = require('./user');
const Subscription = require('./subscription');
const Practitioner = require('./practitioner');

// Add all your schemas here!
const allSchemas = {
  Base,
  User,
  Subscription,
  Practitioner,
};

module.exports = allSchemas;
