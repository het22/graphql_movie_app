const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Movie {
    id: ID
    title: String
  }

  type Query {
    movie(id: ID): Movie
    movies: [Movie]
  }
`;

const movies = [
  {
    id: 1,
    title: 'Kingdom of Heaven'
  },
  {
    id: 2,
    title: 'District 9'
  }
];

const resolvers = {
  Query: {
    movie: (_, { id }) => movies.find(movie => movie.id == id),
    movies: () => movies
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
