import React from "react";
import "./styles.css";
import styled from "styled-components";
import NavBar from "./Components/Navbar";

const Wrapper = styled.div`
  padding: 2rem;
  border: 1px solid;
  border-color: red;

  h1 {
    color: blue;
  }
  h2 {
    color: red;

    @media all and (max-width: 600px) {
      color: green;
    }
  }
`;

const A = styled.a`
  text-decoration: none;
  font-size: 24px;
  color: ${(props) => (props.color === "yellow" ? "yellow" : "aqua")};
`;

export default function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}
