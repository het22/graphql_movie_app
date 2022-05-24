const { ApolloServer, gql } = require('apollo-server');
const tmdb = require('./tmdb.js');

const typeDefs = gql`
  type Movie {
    id: ID
    title: String
    overview: String
    release_date: String
    popularity: Float
    poster_path: String
    backdrop_path: String
  }

  type Query {
    movie(id: ID): Movie
    top_rated_movies: [Movie]
  }
`;

const resolvers = {
  Query: {
    movie: (_, { id }) => tmdb.get(`/movie/${id}`),
    top_rated_movies: () =>
      tmdb.get(`/movie/top_rated`).then(data => data.results)
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
