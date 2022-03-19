import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const SectionStyles = styled.section`
  h2 {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    color: white;
    text-align: center;
    margin-bottom: 1rem;
    padding: 0.5rem;
  }
  margin: 1rem;
  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }
  a {
    display: grid;
    grid-template-rows: 1fr 60px auto;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    padding: 1rem;
    text-decoration: none;
    p {
      align-self: center;
      text-align: center;
      color: white;
      margin: 5px 0;
      font-size: 1rem;
    }
  }
  .gatsby-image-wrapper {
    object-fit: contain;
    margin: auto;
  }
  @media all and (max-width: 959px) {
    div {
      grid-template-columns: 1fr;
    }
  }
`;

const IndexPage = ({ data }) => {
  const screenings = data.screening.nodes;
  console.log(screenings);
  return (
    <SectionStyles>
      <h2>Now in our Theater!</h2>
      <div>
        {screenings.map((screen) => {
          const image = getImage(screen.movie.poster.asset);
          return (
            <Link to={`/movie/${screen.movie.slug.current}`} key={screen.id}>
              <GatsbyImage image={image} alt={screen.title} />
              <p>{screen.title}</p>
              <p>
                Release Date: &nbsp;
                {new Date(screen.movie.releaseDate).toLocaleString("en-US", {
                  year: "2-digit",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </p>
            </Link>
          );
        })}
      </div>
    </SectionStyles>
  );
};

export const query = graphql`
  {
    screening: allSanityScreening {
      nodes {
        id
        movie {
          poster {
            asset {
              gatsbyImageData(width: 600, placeholder: BLURRED)
            }
          }
          releaseDate
          slug {
            current
          }
        }
        title
      }
    }
  }
`;

export default IndexPage;
