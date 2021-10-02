import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { apiSearch } from "../../constantes/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faLongArrowAltUp,
  faLongArrowAltDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Card = styled.div`
  color: black;
  padding: 10px 10px 10px 35px;
  margin: 0 auto 20px auto;
  width: 460px;
  background-color: #fff8e1;
  font-weight: bold;
  @media (max-width: 575px) {
    width: auto;
  }
`;
const CardTempToday = styled.div`
  font-size: 35px;
  margin: 5px 0;
  @media (max-width: 575px) {
    width: auto;
    padding: auto;
  }
`;
const CardWindHumi = styled.div`
  font-weight: normal;
  padding: 5px 0 0 0;
`;
const CardWeekDays = styled.div`
  display: flex;
  margin: 15px 20px 0 0;
  padding: 10px 0 0 0;
  border-top: 1px solid orange;
  div {
    margin: 0 20px 0 0;
  }
  p {
    margin: 0 20px 0 0;
  }
  @media (max-width: 575px) {
    div {
      width: 100%;
      margin: 0 15px 0 0;
    }
    p {
      display: none;
    }
  }
`;
const TitleSearch = styled.h1`
  text-align: center;
  font-size: 50px;
  margin: 0 0 20px 0;
  padding: 35px 0 35px 0;
  color: white;
`;
const TitleSearchOpen = styled.h1`
  text-align: center;
  font-size: 30px;
  margin: 0 0 10px 0;
  color: white;
`;
const Close = styled.div`
  position: relative;
  float: right;
  color: orange;
  cursor: pointer;
`;
const Icon = styled.div`
  color: orange;
  float: left;
`;
const IconSearch = styled.div`
  color: gray;
  float: right;
  padding: 8px 20px 0 0;
  font-size: 20px;
  @media (max-width: 575px) {
    width: auto;
    padding: auto;
  }
`;
const IconArrowDown = styled.div`
  float: left;
`;
const InputDiv = styled.div`
  background-color: white;
  width: 505px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 575px) {
    width: 330px;
  }
`;
const Input = styled.input`
  background-color: white;
  border: 0 none;
  outline: 0;
  padding: 10px 0 10px 15px;
  width: 450px;
  font-size: 20px;
  @media (max-width: 575px) {
    width: 270px;
  }
`;

export default function ListSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({});
  const [show, setShow] = useState(true);

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(
        `${apiSearch.base}?format=${apiSearch.format}&key=${apiSearch.key}&city_name=${query}`
      )
        .then((res) => res.json())
        .then((result) => {
          setResults(result.results);
          setQuery("");
          console.log(result.by);
        });
    }
  };

  useEffect(() => {
    return () => setShow(true);
  }, [results]);

  if (show && results.forecast) {
    return (
      <>
        <TitleSearchOpen>Previsão do tempo</TitleSearchOpen>
        <Card>
          <Close>
            <FontAwesomeIcon onClick={() => setShow(false)} icon={faTimes} />
          </Close>
          <div>
            <div>{results.city}</div>
            <CardTempToday>
              {`${results.temp}°C`}&nbsp; {results.description}
            </CardTempToday>
            <IconArrowDown>
              <Icon>
                <FontAwesomeIcon icon={faLongArrowAltDown} />
                &nbsp;
              </Icon>
              {`${results.forecast && results.forecast["0"].min}º`}
              &nbsp;&nbsp;&nbsp;&nbsp;
            </IconArrowDown>
            <div>
              <Icon>
                <FontAwesomeIcon icon={faLongArrowAltUp} />
              </Icon>
              {`${results.forecast && results.forecast["0"].max}°`}
            </div>
            <CardWindHumi>
              Vento <b>{results.wind_speedy}</b>&nbsp;&nbsp;&nbsp;&nbsp;
              Humidade <b>{results.humidity}%</b>
            </CardWindHumi>
          </div>
          <CardWeekDays>
            <div>
              {results.forecast && results.forecast["1"].weekday}
              <br></br>
              <Icon>
                {`${results.forecast && results.forecast["1"].min}º`}
                &nbsp;
                {`${results.forecast && results.forecast["1"].max}°`}
              </Icon>
            </div>
            <div>
              {results.forecast && results.forecast["2"].weekday}
              <br></br>
              <Icon>
                {`${results.forecast && results.forecast["2"].min}º`}
                &nbsp;
                {`${results.forecast && results.forecast["2"].max}°`}
              </Icon>
            </div>
            <div>
              {results.forecast && results.forecast["3"].weekday}
              <br></br>
              <Icon>
                {`${results.forecast && results.forecast["3"].min}º`}
                &nbsp;
                {`${results.forecast && results.forecast["3"].max}°`}
              </Icon>
            </div>
            <div>
              {results.forecast && results.forecast["4"].weekday}
              <br></br>
              <Icon>
                {`${results.forecast && results.forecast["4"].min}º`}
                &nbsp;
                {`${results.forecast && results.forecast["4"].max}°`}
              </Icon>
            </div>
            <p>
              {results.forecast && results.forecast["5"].weekday}
              <br></br>
              <Icon>
                {`${results.forecast && results.forecast["5"].min}º`}
                &nbsp;
                {`${results.forecast && results.forecast["5"].max}°`}
              </Icon>
            </p>
          </CardWeekDays>
        </Card>
        <InputDiv>
          <Input
            placeholder="Insira aqui o nome da cidade"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
          <IconSearch>
            <FontAwesomeIcon icon={faSearch} />
          </IconSearch>
        </InputDiv>
      </>
    );
  }

  let _content = (
    <>
      <TitleSearch>Previsão do tempo</TitleSearch>
      <InputDiv>
        <Input
          type="text"
          placeholder="Insira aqui o nome da cidade"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
        <IconSearch>
          <FontAwesomeIcon icon={faSearch} />
        </IconSearch>
      </InputDiv>
    </>
  );

  return (
    <>
      <div>{_content}</div>
    </>
  );
}
