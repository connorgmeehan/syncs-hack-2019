const typeDefs = `
type Practitioner {
  _id: ID!
  practiceId: String!
  createdAt: Date!
  name: String!
  description: String!
  imageurl: String
}

type Query {
  getPractitionerFromId(practitionerId: String!): Practitioner
  getPractitionerFromPracticeId(practiceId: String!): [Practitioner]
}

type Mutation {
  createPractitioner(
      name: String!,
      description: String!,
      imageurl: String
  ): Practitioner
}
`;

const Practitioner = require('../../models/Practitioner');

// Queries
const getPractitionerFromId = (root, args) => {
  const { practitionerId } = args;

  if (!practitionerId) {
    return null;
  }

  return Practitioner.findById({ _id: practitionerId });
};

const getPractitionerFromPracticeId = (root, args) => {
  const { practiceId } = args;
  return Practitioner.getPractitionerFromPracticeId({ practiceId });
};

// Mutations
const createPractitioner = (root, args) => {
  const {
    practiceId, name, description, imageurl,
  } = args;

  return Practitioner.createPractitioner({
    practiceId, name, description, imageurl,
  });
};

const Mutation = {
  createPractitioner,
};

const Query = {
  getPractitionerFromId,
  getPractitionerFromPracticeId,
};

const resolvers = {
  Mutation,
  Query,
};

module.exports = {
  typeDefs,
  resolvers,
};
