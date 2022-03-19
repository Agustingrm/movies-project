import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const DivStyles = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 20px;
  padding: 20px;
  margin: 20px;
  justify-self: center;
  .gatsby-image-wrapper {
    object-fit: contain;
    margin: auto;
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
  i {
    font-weight: bold;
  }
  .plot {
    margin-bottom: 0.5rem;
  }
  .cast {
    margin: 0.5rem 0;
  }
  @media all and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export default function SingleMoviePage({ data: { movie } }) {
  const image = getImage(movie.poster.asset);
  console.log(movie.castMembers);
  return (
    <DivStyles>
      <GatsbyImage image={image} alt={movie.title} />
      <div>
        <h2>{movie.title}</h2>
        <h3>Release Year: ({new Date(movie.releaseDate).getFullYear()})</h3>
        <p className="plot">Plot </p>
        <p>{movie.overview[0].children[0].text}</p>
        <p className="cast">Cast </p>
        {movie.castMembers.map((character) => {
          return (
            <p key={character.person.id}>
              {character.person.name} as <i>{character.characterName}</i>
            </p>
          );
        })}
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
        person {
          id
          name
        }
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
