/* eslint-disable no-use-before-define */
const mongoose = require('mongoose');

const PractitionerSchema = new mongoose.Schema({
  name: String,
  suburb: String,
  lat: Number,
  lon: Number,
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
  name, suburb, lat, lon, description, imageurl,
}) {
  const newPractitioner = new this({
    name, suburb, lat, lon, description, imageurl,
  });
  await newPractitioner.save();
  return newPractitioner;
};

PractitionerSchema.statics.findById = function ({ _id }) {
  console.log(_id);
  return this.findOne({ _id });
};

PractitionerSchema.statics.getAllInSuburb = function ({ suburb }) {
  console.log(suburb);
  // eslint-disable-next-line react/no-this-in-sfc
  return this.find({ suburb });
};

const Practitioner = mongoose.model('Practitioner', PractitionerSchema);
module.exports = Practitioner;
