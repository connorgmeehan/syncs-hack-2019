const Base = require('./base');
const User = require('./user');
const Subscription = require('./subscription');
const Practitioner = require('./practitioner');
const Review = require('./review');
const Tag = require('./tag');

// Add all your schemas here!
const allSchemas = {
  Base,
  User,
  Subscription,
  Practitioner,
  Review,
  Tag,
};

module.exports = allSchemas;
