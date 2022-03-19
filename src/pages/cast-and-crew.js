import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import silhouette from "../assets/silhouette.jpg";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const DivStyles = styled.div`
  margin: 1rem;
  h2 {
    text-align: center;
    color: white;
    margin: 1rem 0;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 2px;
  }
`;

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 0.5rem;
  div {
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 2px;
    display: grid;
    grid-template-rows: 80% 1fr;
    text-align: center;
  }
  .gatsby-image-wrapper {
    width: 100%;
  }
  p {
    margin-top: 5px;
    color: white;
    font-size: 0.8rem;
    align-self: center;
  }
`;

export default function CastAndCrewPage({ data }) {
  const people = data.people.nodes.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return (
    <DivStyles>
      <h2>Cast & Crew in this Database</h2>
      <GridStyles>
        {people.map((person) => {
          const image = person.image?.asset ? getImage(person.image.asset) : undefined;
          return (
            <div key={person.id}>
              {image && <GatsbyImage image={image} alt={person.name} />}
              {image === undefined && <StaticImage src="../assets/silhouette.jpg" alt={silhouette} />}
              <p>{person.name}</p>
            </div>
          );
        })}
      </GridStyles>
    </DivStyles>
  );
}

export const query = graphql`
  query MyQuery {
    people: allSanityPerson {
      nodes {
        id
        name
        image {
          asset {
            gatsbyImageData(width: 200, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
