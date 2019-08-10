const Tag = require('../../models/Tag');

const typeDefs = `
type Tag {
  _id: ID!
  commentId: String!
  practitionerId: String!
  text: String!
  isEmpathy: Boolean!
}

type Query {
  getTagsByCommentId(commentId: String!): [Tag]
  getTagsByPractitionerId(practitionerId: String!): [Tag]
}

type Mutation {
  createTag(
    commentId: String!,
    practitionerId: String!,
    text: String!,
    isEmpathy: Boolean!
  ): Tag
}
`;

const createTag = (root, args) => {
  console.log('tags::createTag', args);
  const { commentId, practitionerId, text, isEmpathy } = args;
  return Tag.createTag({ commentId, practitionerId, text, isEmpathy });
};``

const getTagsByCommentId = (root, args) => {
  const {commentId} = args;
  return Tag.getTagsByCommentId({ commentId })
};

const getTagsByPractitionerId = (root, args) => {
  console.log('Tags::getTagsByPractitionerId', root, args);
  const {practitionerId} = args;
  return Tag.getTagsByPractitionerId({ practitionerId })
};

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
