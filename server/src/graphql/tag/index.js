const Tag = require('../../models/Tag');

const typeDefs = `
type Tag {
  _id: ID!
  commentId: String!
  practitionerId: String!
  text: String!
  isEmpathy: String!
}

type Query {
  getTagsByCommentId(commentId: Int!): [Tag]
  getTagsByPractitionerId(practitionerId: Int!): [Tag]
}

type Mutation {
  createTag(
    text: String!
  ): Tag
}
`;

const createTag = (root, args) => {
  const { text } = args;
  return Tag.createTag({ text });
};

const getTagsByCommentId = ({commentId}) => {
  return Tag.getTagsByCommentId({commentId});
}

const getTagsByPractitionerId = ({practitionerId}) => {
  return Tag.getTagsByPractitionerId({practitionerId});
}

const Mutation = {
  createTag,
};

const Query = {
  getTagsByCommentId,
  getTagsByPractitionerId,
};

const resolvers = {
  Mutation,
  Query,
};

module.exports = {
  typeDefs,
  resolvers,
};
