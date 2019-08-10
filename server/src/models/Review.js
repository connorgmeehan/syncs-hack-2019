const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    fullName: String,
  },
  createdAt: { type: Date, default: Date.now },
  text: String,
});

const Review = new mongoose.model('Review', ReviewSchema);

module.exports = Review;
