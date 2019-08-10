const mongoose = require('mongoose');

const PracticeSchema = mongoose.Schema({
  name: String,
  lat: String,
  lon: String,
  createdAt: { type: Date, default: Date.now },
  speciality: String,
  suburb: String,
});

PracticeSchema.statics.newPractice = async function ({
  name, lat, lon, suburb, speciality,
}) {
  console.log('Schema::newPractice', name, lat, lon, suburb, speciality);
  const newPractice = new this({
    name, lat, lon, suburb, speciality,
  });
  await newPractice.save();
  return newPractice;
};

PracticeSchema.statics.getPracticeBy = async function ({ suburb, speciality }) {
  console.log('Schema::getPraciceBy', suburb, speciality);
  return this.find({ suburb, speciality });
};

PracticeSchema.statics.getPracticeById = async function ({ _id }) {
  return this.findOne({ _id });
};

PracticeSchema.statics.getPracticeBySuburb = async function ({ suburb }) {
  return this.find({ suburb });
};


PracticeSchema.statics.getPracticeBySpeciality = async function ({ speciality }) {
  return this.find({ speciality });
};

const Practice = mongoose.model('Practice', PracticeSchema);
module.exports = Practice;
