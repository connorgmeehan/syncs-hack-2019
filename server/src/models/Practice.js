const mongoose = require('mongoose');

const PracticeSchema = mongoose.Schema({
  name: String,
  specialty: String,
  lat: String,
  lon: String,
  createdAt: { type: Date, default: Date.now },
  suburb: String,
});

PracticeSchema.static.createPractice = async function ({
  name, lat, lon, suburb,
}) {
  const newPractice = new this({
    name, lat, lon, suburb,
  });
  await newPractice.save();
  return newPractice;
};

PracticeSchema.static.getPracticeBySuburb = async function ({ suburb }) {
  return this.find({ suburb });
};


PracticeSchema.static.getPracticeBySpeciality = async function ({ speciality }) {
  return this.find({ speciality });
};

const Practice = mongoose.model('Practice', PracticeSchema);
module.exports = Practice;
