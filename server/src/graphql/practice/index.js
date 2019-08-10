// createPractice, getPracticeBySuburb, getPracticeBySpeciality
const typeDefs = `
type Practice {
  _id: ID!
  name: String!
  lat: Float!
  lon: float!
  suburb: String!
  speciality: String!
}

type Query {
  getPracticeBySuburb(suburb: String!): [Practice]
  getPracticeBySpeciality(speciality: String!): [Practice]
}

type Mutation {
  createPractice(
    name: String!,
    lat: Float!,
    lon: Float!,
    suburb: String!,
    speciality: String!
  ): Practice
}
`;

const Practice = require('../../models/Practice');

const getPracticeBySuburb = (root, args) => {
  const { suburb } = args;
  return Practice.getPracticeBySuburb({ suburb });
};

const getPracticeBySpeciality = (root, args) => {
  const { speciality } = args;
  return Practice.getPracticeBySpeciality({ speciality });
};

const createPractice = (root, args) => {
  const {
    name, lat, lon, suburb, speciality,
  } = args;
  return Practice.createPractice({
    name, lat, lon, suburb, speciality,
  });
};

const Query = {
  getPracticeBySpeciality,
  getPracticeBySuburb,
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
