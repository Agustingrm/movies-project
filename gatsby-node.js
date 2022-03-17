const path = require("path");

async function makeMoviePage({ graphql, actions }) {
  // Template
  const movieTemplate = path.resolve("./src/templates/Movie.js");
  // Query Movies
  const { data } = await graphql(`
    query {
      movies: allSanityMovie {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);
  // Loop over movies
  data.movies.nodes.forEach((movie) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `movie/${movie.slug.current}`,
      component: movieTemplate,
      context: {
        slug: movie.slug.current,
      },
    });
  });
}

exports.createPages = async function (params) {
  await makeMoviePage(params);
};
