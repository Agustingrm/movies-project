import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const SectionStyles = styled.section`
  padding: 1rem;
  h2 {
    text-align: center;
    color: white;
    padding: 0.5rem;
    margin: 1rem 0;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 2px;
  }
  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    border-radius: 5px;
    a {
      text-decoration: none;
      color: white;
      background-color: rgba(0, 0, 0, 0.8);
      padding: 10px;
      border-radius: 5px;
      p {
        text-align: center;
        margin: 5px 0 0;
      }
    }
    .gatsby-image-wrapper {
      width: 100%;
    }
  }
`;

export default function MoviesPage({ data }) {
  const movies = data.movies.nodes.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return (
    <SectionStyles>
      <h2>Movies in this Database</h2>
      <div>
        {movies.map((movie) => {
          const image = getImage(movie.poster.asset);
          return (
            <Link to={`/movie/${movie.slug.current}`} key={movie.id}>
              <GatsbyImage image={image} alt={movie.title} />
              <p>{movie.title}</p>
            </Link>
          );
        })}
      </div>
    </SectionStyles>
  );
}

export const query = graphql`
  query MovieQuery {
    movies: allSanityMovie {
      nodes {
        id
        title
        slug {
          current
        }
        poster {
          asset {
            gatsbyImageData(width: 800, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
