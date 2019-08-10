const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
  practitionerId: String,
  commentId: String,
  text: String,
  isEmpathy: Boolean,
});

TagSchema.statics.createTag = async function ({
  practitionerId,
  commentId,
  text,
  isEmpathy,
}) {
  const newTag = new this({
    practitionerId,
    commentId,
    text,
    isEmpathy,
  });
  await newTag.save();
  return newTag;
};

TagSchema.statics.getTagsByCommentId = async function ({ commentId }) {
  return this.find({ commentId });
};

TagSchema.statics.getTagsByPractitionerId = async function ({ practitionerId }) {
  return this.find({ practitionerId });
};

const Tag = new mongoose.model('Tag', TagSchema);

module.exports = Tag;
