/* eslint-disable no-use-before-define */
const mongoose = require('mongoose');

const PractitionerSchema = new mongoose.Schema({
  practiceId: String,
  name: String,
  description: String,
  imageUrl: String,
  createdAt: { type: Date, default: Date.now },

  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
});

PractitionerSchema.statics.createPractitioner = async function ({
  name, practiceId, description, imageurl,
}) {
  const newPractitioner = new this({
    name, practiceId, description, imageurl,
  });
  await newPractitioner.save();
  return newPractitioner;
};

PractitionerSchema.statics.getPractitionerFromId = async function ({ _id }) {
  console.log(_id);
  return this.findOne({ _id });
};

PractitionerSchema.statics.getPractitionersFromPracticeId = async function ({ practiceId }) {
  console.log(practiceId);
  // eslint-disable-next-line react/no-this-in-sfc
  return this.find({ practiceId });
};

const Practitioner = mongoose.model('Practitioner', PractitionerSchema);
module.exports = Practitioner;
