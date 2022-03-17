import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const DivStyles = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 1000px;
  padding: 20px;
  margin: 20px;
  justify-self: center;
  .gatsby-image-wrapper {
    width: 100%;
  }
  h2 {
    margin-bottom: 1rem;
    color: white;
  }
  h3 {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: var(--softGray);
  }
  p {
    color: white;
  }
  .plot {
    margin-bottom: 0.5rem;
  }
`;

export default function SingleMoviePage({ data: { movie } }) {
  console.log(movie);
  console.log(movie.overview[0].children[0].text);
  const image = getImage(movie.poster.asset);
  return (
    <DivStyles>
      <GatsbyImage image={image} alt={movie.title} />
      <div>
        <h2>{movie.title}</h2>
        <h3>Release Year: ({new Date(movie.releaseDate).getFullYear()})</h3>
        <p className="plot">Plot </p>
        <p>{movie.overview[0].children[0].text}</p>
      </div>
    </DivStyles>
  );
}

// Query based on slug
export const query = graphql`
  query ($slug: String!) {
    movie: sanityMovie(slug: { current: { eq: $slug } }) {
      id
      title
      slug {
        current
      }
      releaseDate
      popularity
      castMembers {
        characterName
      }
      crewMembers {
        department
        job
      }
      overview {
        children {
          text
        }
      }
      poster {
        asset {
          gatsbyImageData(width: 500, placeholder: BLURRED)
        }
      }
    }
  }
`;
