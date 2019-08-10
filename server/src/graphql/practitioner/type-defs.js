const typeDefs = `
    type Practitioner {
        _id: ID!
        createdAt: Date!
        name: String!
        address: String!
        lat: Float!
        lon: Float!
        description: String!
        imageurl: String!
    }

    type Query {
        practitioner: Practitioner
        allPractitioners: [Practitioner]
    }

    type Mutation {
        createPractitioner(
            name: String!,
            address: String!
            lat: Float!,
            lon: Float!,
            description: String!,
            imageurl: String
        ): Practitioner
    }
`;

module.exports = typeDefs;
