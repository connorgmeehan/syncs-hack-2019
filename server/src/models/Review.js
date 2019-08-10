const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  practitionerId: String,
  createdAt: { type: Date, default: Date.now },
  text: String,
});

ReviewSchema.statics.createReview = async function ({
  userId, userName, practitionerId, text, tags,
}) {
  const newReview = new this({
    userId, userName, practitionerId, text, tags,
  });
  await newReview.save();
  return newReview;
}

ReviewSchema.statics.getReviewsByPractitionerId = async function ({ practitionerId }) {
  console.log('Review::getReviewsByPractitionerId', practitionerId);
  return this.find({ practitionerId });
};


ReviewSchema.statics.getReviewsByUserId = async function ({ userId }) {
  console.log('Review::getReviewsByUserId', userId);

  return this.find({ userId });
};

const Review = new mongoose.model('Review', ReviewSchema);

module.exports = Review;
