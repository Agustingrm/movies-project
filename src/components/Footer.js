import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  background-color: var(--black);
  color: var(--gold);
  padding: 10px;
  width: 100%;
  text-align: center;
  /* margin-top: auto; */
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p>&copy; Gatsby Movies {new Date().getFullYear()}</p>
    </FooterStyles>
  );
}
