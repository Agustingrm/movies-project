import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavStyles = styled.nav`
  display: flex;
  background-color: var(--black);
  font-size: 1.5rem;
  h1 a {
    font-family: "Monoton", cursive;
    font-weight: lighter;
    font-size: 2rem;
    text-align: center;
    margin-left: 20px;
    color: var(--gold);
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style-type: none;
    margin-left: auto;
    li {
      padding: 5px 30px;
      display: flex;
      align-items: center;
    }
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
  }
  a:hover {
    color: var(--gold);
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <h1>
        <Link to="/">GATSBY &nbsp; MOVIES</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Screening</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/cast-and-crew">Cast & Crew</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
