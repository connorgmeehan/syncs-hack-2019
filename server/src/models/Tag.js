const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
  practitionerId: String,
  commentId: String,
  text: String,
});

const Tag = new mongoose.model('Tag', TagSchema);

TagSchema.static.createTag = async function ({
  text,
}) {
  // TODO check if allowed tag here
  const newTag = new this({
    text,
  });
  await newTag.save();
  return newTag;
};

TagSchema.static.getTagsByCommentId = async function ({ commentId }) {
  return this.find({ commentId });
};

TagSchema.static.getTagsByPractitionerId = async function ({ practitionerId }) {
  return this.find({ practitionerId });
};

module.exports = Tag;
