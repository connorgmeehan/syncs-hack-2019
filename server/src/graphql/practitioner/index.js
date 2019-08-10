const typeDefs = `
type Practitioner {
  _id: ID!
  createdAt: Date!
  name: String!
  suburb: String!
  lat: Float
  lon: Float
  description: String!
  imageurl: String
}

type Query {
  practitioner(practitionerId: String!): Practitioner
  getPractitionerFromSuburb(suburb: String!): [Practitioner]
}

type Mutation {
  createPractitioner(
      name: String!,
      suburb: String!
      lat: Float!,
      lon: Float!,
      description: String!,
      imageurl: String
  ): Practitioner
}
`;

const Practitioner = require('../../models/Practitioner');

// Queries
const practitioner = (root, args) => {
  const { practitionerId } = args;

  if (!practitionerId) {
    return null;
  }

  return Practitioner.findById({ _id: practitionerId });
};

const getPractitionerFromSuburb = (root, args) => {
  const { suburb } = args;
  return Practitioner.getAllInSuburb({ suburb });
};

// Mutations
const createPractitioner = (root, args) => {
  const {
    name, suburb, lat, lon, description, imageurl,
  } = args;

  return Practitioner.createPractitioner({
    name, suburb, lat, lon, description, imageurl,
  });
};

const Mutation = {
  createPractitioner,
};

const Query = {
  practitioner,
  getAll,
  getPractitionerFromSuburb,
};

const resolvers = {
  Mutation,
  Query,
};

module.exports = {
  typeDefs,
  resolvers,
};
