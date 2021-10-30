import React from "react";
import styled from "styled-components";

const NavBarWrapper = styled.header`
  position: relative;
  height: 110px;
  background-color: #231231;
`;

const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 30px;

  @media all and (max-width: 400px) {
    display: none;
  }
`;

const ResourceLinks = styled.div`
  font-family: sans-serif;
  font-weight: 500;
  position: absolute;
  top: 24px;
  right: 40px;
  letter-spacing: 1px;
`;

const A = styled.a`
  text-decoration: none;
  color: orange;
  margin-left: 40px;
  cursor: pointer;

  @media all and (max-width: 600px) {
    margin-left: 15px;
  }
`;

function NavBar() {
  return (
    <NavBarWrapper>
      <Logo>
        <img
          width="100px"
          src="https://www.spiria.com/site/assets/files/2502/bandeau-react_0.1200x630.jpg"
          alt="logo.png"
        />
      </Logo>
      <ResourceLinks>
        <A href="https://www.masaischool.com" alt="masai">
          {" "}
          About us{" "}
        </A>
        <A> FAQ </A>
        <A> Login </A>
      </ResourceLinks>
    </NavBarWrapper>
  );
}

export default NavBar;
