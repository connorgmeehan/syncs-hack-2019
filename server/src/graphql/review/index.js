const typeDefs = `
type Review {
    _id: ID!
    userId: String!
    userName: String!
    practitionerId: String!
    createdAt: Date!
    text: String!
    tags: [String]
}

type Query {
    getReviewsByPractitionerId(practitionerId: String!): [Review]
    getReviewsByUserId(userId: String!): [Review]
}

type Mutation {
    createReview(
        userId: String!
        userName: String!
        practitionerId: String!
        text: String!
    ): Review
}
`;

const Review = require('../../models/Review');

const getReviewsByPractitionerId = (root, args) => {
  const { practitionerId } = args;
  console.log('graphql::getReviewsByPractitionerId', practitionerId);

  if (!practitionerId) {
    return null;
  }

  return Review.getReviewsByPractitionerId({ practitionerId });
};

const getReviewsByUserId = (root, args) => {
  const { userId } = args;

  
  if (!userId) {
    return null;
  }
  
  return Review.getReviewsByUserId({ userId });
};

const createReview = (root, args) => {
  const {
    userId, userName, practitionerId, text, tags,
  } = args;
  if (!userId || !practitionerId || !text) {
    return null;
  }
  console.log('Review::createReview', practitionerId, text, tags);

  return Review.createReview({
    userId, userName, practitionerId, text, tags,
  });
};

const Query = {
  getReviewsByPractitionerId,
  getReviewsByUserId,
};

const Mutation = {
  createReview,
};

const resolvers = {
  Mutation,
  Query,
};

module.exports = {
  typeDefs,
  resolvers,
};
