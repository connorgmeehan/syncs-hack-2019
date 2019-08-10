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
  getPractitionersFromPracticeId(practiceId: String!): [Practitioner]
}

type Mutation {
  createPractitioner(
      practiceId: String!
      name: String!
      description: String!
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

const getPractitionersFromPracticeId = (root, args) => {
  console.log('Practitioner::getPractitionersFromPracticeId', args);
  const { practiceId } = args;
  return Practitioner.getPractitionersFromPracticeId({ practiceId });
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
  getPractitionersFromPracticeId,
};

const resolvers = {
  Mutation,
  Query,
};

module.exports = {
  typeDefs,
  resolvers,
};
