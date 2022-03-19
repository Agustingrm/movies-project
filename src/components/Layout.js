import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import GlobalStyles from "../styles/GlobalStyles";
import styled from "styled-components";

const LayoutStyles = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <LayoutStyles>
        <Nav />
        {children}
        <Footer />
      </LayoutStyles>
    </>
  );
}
