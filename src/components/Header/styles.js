import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem 10rem;
`;

export const Logo = styled.h1`
  font-size: 1.5em;
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavLink = styled.a`
  font-size: 1em;
  margin-left: 24px;

  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
