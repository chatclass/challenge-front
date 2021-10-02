import React from "react";
import styled from "styled-components";
import ListCap from "../components/ListCapital";
import ListSearch from "../components/ListSearch";

const GlobalStyle = styled.div`
  background: linear-gradient(orange, yellow);
  background-size: 600% 600%;
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const TitleCap = styled.h2`
  text-align: left;
  font-size: 30px;
  width: 440px;
  margin: 33px auto 0 auto;
  padding: 0 60px;
  border-top: 1px solid orange;
  border-color: white;
  color: white;
  @media (max-width: 575px) {
    width: auto;
  }
`;

export default function WeatherList() {
  let _content = (
    <>
      <ListSearch />
      <div>
        <TitleCap>Capitais</TitleCap>
      </div>
      <ListCap />
    </>
  );

  return (
    <>
      <GlobalStyle>{_content}</GlobalStyle>
    </>
  );
}
