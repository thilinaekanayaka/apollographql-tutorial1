import gql from "graphql-tag";

const typeDefs = gql`

  """
  Sample query
  """
  type Query {
    tracksForHome: [Track!]!
  }

  """
  These are the tracks
  """
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  """
  These are the authors
  """
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

export = typeDefs;
