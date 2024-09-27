import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0002;
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: black;

  &:nth-child(even) {
    background-color: pink;
  }
`;

export const Footer = styled.footer`
  height: 30%;
  background-color: azure;
`;
