import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const MainStyles = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  div {
    background-color: rgba(0, 0, 0, 0.8);
    margin: 3rem;
    padding: 1rem;
    border-radius: 5px;
    color: white;
  }
  h1 {
    margin: 1rem 0;
  }
  a {
    color: var(--gold);
    text-decoration: none;
  }
`;

// markup
const NotFoundPage = () => {
  return (
    <MainStyles>
      <title>Not found</title>
      <div>
        <h1>Page not found</h1>
        <p>
          Sorry
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>
          we couldn’t find what you were looking for.
          <br />
          <br />
          <Link to="/">Go home</Link>
        </p>
      </div>
    </MainStyles>
  );
};

export default NotFoundPage;
