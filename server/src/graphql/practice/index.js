// createPractice, getPracticeBySuburb, getPracticeBySpeciality
const typeDefs = `
type Practice {
  _id: ID!
  name: String!
  lat: Float!
  lon: Float!
  speciality: String!
  suburb: String!
}

type Query {
  getPracticeById(_id: String!): Practice
  getPracticeBy(suburb: String, speciality: String): [Practice]
  getPracticeBySuburb(suburb: String!): [Practice]
  getPracticeBySpeciality(speciality: String!): [Practice]
}

type Mutation {
  createPractice(
    name: String!
    lat: Float!
    lon: Float!
    suburb: String!
    speciality: String!
  ): Practice
}
`;

const Practice = require('../../models/Practice');

const getPracticeBySuburb = (root, args) => {
  console.log('Practice::getPracticeBySuburb');
  const { suburb } = args;
  return Practice.getPracticeBySuburb({ suburb });
};

const getPracticeBySpeciality = (root, args) => {
  console.log('Practice::getPracticeBySpeciality');
  const { speciality } = args;
  return Practice.getPracticeBySpeciality({ speciality });
};

const getPracticeBy = (root, args) => {
  const { suburb, speciality } = args;
  if (suburb && speciality) {
    return Practice.getPracticeBy({ suburb, speciality });
  } if (suburb) {
    return Practice.getPracticeBySuburb({ suburb });
  } if (speciality) {
    return Practice.getPracticeBySpeciality({ speciality });
  }

  return null;
};

const getPracticeById = (root, args) => {
  const { _id } = args;
  console.log('Practice::getPracticeById', _id);
  return Practice.getPracticeById({ _id });
};

const createPractice = (root, args) => {
  Object.keys(args).forEach((el) => { console.log(el); });
  const {
    name, lat, lon, suburb, speciality,
  } = args;
  console.log('Practice::createPractice', name, lat, lon, suburb, speciality);
  return Practice.newPractice({
    name, lat, lon, suburb, speciality,
  });
};

const Query = {
  getPracticeBy,
  getPracticeBySpeciality,
  getPracticeBySuburb,
  getPracticeById,
};

const Mutation = {
  createPractice,
};

const resolvers = {
  Mutation,
  Query,
};

module.exports = {
  typeDefs,
  resolvers,
};
