import mongoose from 'mongoose';

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

const Review = new mongoose.Model("Review", reviewSchema);

export default Review;