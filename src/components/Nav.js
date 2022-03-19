import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";
import MenuLinesStyles from "../styles/menuLines";
import menuLine from "../assets/menuLine.svg";

const NavStyles = styled.nav`
  display: flex;
  background-color: var(--black);
  font-size: 1.5rem;
  max-width: none;
  padding-right: 20px;
  h1 {
    position: relative;
    background-color: var(--black);
    z-index: 3;
    a {
      position: relative;
      z-index: 3;
      font-family: "Monoton", cursive;
      font-weight: lighter;
      font-size: 2rem;
      text-align: center;
      margin-left: 20px;
      color: var(--gold);
    }
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
  hr {
    display: none;
    position: relative;
    z-index: 2;
  }
  @media all and (max-width: 800px) {
    flex-direction: column;
    padding-right: 0;
    ul {
      position: relative;
      top: -168px;
      flex-direction: column;
      margin-left: 0;
      z-index: 2;
      height: 0;
      li {
        background-color: var(--black);
        width: 100%;
        text-align: center;
        position: relative;
        z-index: 2;
        a {
          margin: 5px auto;
        }
      }
    }
    hr {
      display: block;
      width: 100%;
    }
  }
  @media all and (max-width: 500px) {
    h1 {
      height: 50px;
      a {
        font-size: 1.5rem;
        margin-left: 5px;
      }
    }
  }
`;

export default function Nav() {
  const [menu, setMenu] = useState(true);
  const [rotationTop, setRotationTop] = useState({});
  const [rotationMiddle, setRotationMiddle] = useState({});
  const [rotationBottom, setRotationBottom] = useState({});
  const [menuMovement, setMenuMovement] = useState({});

  const resetAnimations = () => {
    setRotationTop({});
    setRotationBottom({});
    setRotationMiddle({});
    setMenuMovement({});
    setTimeout(() => setMenu(false), 300);
  };

  const handleMenuClick = () => {
    if (menu) {
      resetAnimations();
    } else {
      setRotationTop({ rotate: 45, x: 0, y: 11 });
      setRotationBottom({ rotate: 45, x: 0, y: -11 });
      setRotationMiddle({ rotate: -45 });
      setMenuMovement({ y: 230 });
      setMenu(true);
    }
  };
  return (
    <NavStyles>
      <h1>
        <Link to="/">GATSBY &nbsp; MOVIES</Link>
      </h1>
      <MenuLinesStyles onClick={handleMenuClick}>
        <motion.img
          src={menuLine}
          alt=""
          className="topLine"
          animate={rotationTop}
          transition={{ type: "tween" }}
        />
        <motion.img
          src={menuLine}
          alt=""
          className="middleLine"
          animate={rotationMiddle}
          transition={{ type: "tween" }}
        />
        <motion.img
          src={menuLine}
          alt=""
          className="bottomLine"
          animate={rotationBottom}
          transition={{ type: "tween" }}
        />
      </MenuLinesStyles>
      <motion.ul animate={menu ? menuMovement : ""} transition={{ type: "tween", duration: 0.3 }}>
        <hr />
        <li>
          <Link to="/" onClick={resetAnimations}>
            Screening
          </Link>
        </li>
        <hr />
        <li>
          <Link to="/movies" onClick={resetAnimations}>
            Movies
          </Link>
        </li>
        <hr />
        <li>
          <Link to="/cast-and-crew" onClick={resetAnimations}>
            Cast & Crew
          </Link>
        </li>
      </motion.ul>
    </NavStyles>
  );
}
