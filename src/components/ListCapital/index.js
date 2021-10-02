import React, { useState, useEffect } from "react";
import { apiCapital } from "../../constantes/api";
import styled from "styled-components";

const DivCapital = styled.div`
  text-align: left;
  width: 440px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-flow: row wrap;
  div {
    padding: 5px 0;
    font-weight: bold;
  }
  p {
    padding: 0 40px 0 0;
    margin-top: 0;
  }
  @media (max-width: 575px) {
    padding: 0 60px;
    width: auto;
    a {
      display: none;
    }
    p {
      margin-bottom: 0;
    }
  }
`;

export default function ListSearch() {
  const [resultsRj, setResultsRj] = useState({});
  const [resultsSp, setResultsSp] = useState({});
  const [resultsBh, setResultsBh] = useState({});
  const [resultsDf, setResultsDf] = useState({});
  const [resultsBe, setResultsBe] = useState({});
  const [resultsBa, setResultsBa] = useState({});
  const [resultsPr, setResultsPr] = useState({});
  const [resultsCe, setResultsCe] = useState({});
  const [resultsAm, setResultsAm] = useState({});
  const [resultsPb, setResultsPb] = useState({});

  useEffect(() => {
    fetch(
      `${apiCapital.base}?format=${apiCapital.format}&&key=${apiCapital.key}&city_name=rio de janeiro`
    )
      .then((res) => res.json())
      .then((result) => {
        setResultsRj(result.results);
      });
    fetch(
      `${apiCapital.base}?format=${apiCapital.format}&&key=${apiCapital.key}&city_name=sao paulo`
    )
      .then((res) => res.json())
      .then((resultSp) => {
        setResultsSp(resultSp.results);
      });
    fetch(
      `${apiCapital.base}?format=${apiCapital.format}&&key=${apiCapital.key}&city_name=belo horizonte`
    )
      .then((res) => res.json())
      .then((resultBh) => {
        setResultsBh(resultBh.results);
      });
    fetch(
      `${apiCapital.base}?format=${apiCapital.format}&&key=${apiCapital.key}&city_name=brasilia`
    )
      .then((res) => res.json())
      .then((resultDf) => {
        setResultsDf(resultDf.results);
      });
    fetch(
      `${apiCapital.base}?format=${apiCapital.format}&&key=${apiCapital.key}&city_name=belem`
    )
      .then((res) => res.json())
      .then((resultBe) => {
        setResultsBe(resultBe.results);
      });
    fetch(
      `${apiCapital.base}?format=${apiCapital.format}&&key=${apiCapital.key}&city_name=salvador`
    )
      .then((res) => res.json())
      .then((resultBa) => {
        setResultsBa(resultBa.results);
      });
    fetch(
      `${apiCapital.base}?format=${apiCapital.format}&&key=${apiCapital.key}&city_name=curitiba`
    )
      .then((res) => res.json())
      .then((resultPr) => {
        setResultsPr(resultPr.results);
      });
    fetch(
      `${apiCapital.base}?format=${apiCapital.format}&&key=${apiCapital.key}&city_name=fortaleza`
    )
      .then((res) => res.json())
      .then((resultCe) => {
        setResultsCe(resultCe.results);
      });
    fetch(
      `${apiCapital.base}?format=${apiCapital.format}&&key=${apiCapital.key}&city_name=manaus`
    )
      .then((res) => res.json())
      .then((resultAm) => {
        setResultsAm(resultAm.results);
      });
    fetch(
      `${apiCapital.base}?format=${apiCapital.format}&&key=${apiCapital.key}&city_name=joão pessoa`
    )
      .then((res) => res.json())
      .then((resultPb) => {
        setResultsPb(resultPb.results);
      });
  }, []);

  let _content = (
    <DivCapital>
      <p>
        min&nbsp;&nbsp;max
        <div>
          &nbsp;{`${resultsRj.forecast && resultsRj.forecast["0"].max}º`}
          &nbsp;&nbsp;&nbsp;
          {`${resultsRj.forecast && resultsRj.forecast["0"]?.min}º`}
          &nbsp;&nbsp;
          {resultsRj?.city_name}
        </div>
        <div>
          &nbsp;{`${resultsSp.forecast && resultsSp.forecast["0"].max}º`}
          &nbsp;&nbsp;&nbsp;
          {`${resultsSp.forecast && resultsSp.forecast["0"].min}º`}
          &nbsp;&nbsp;
          {resultsSp.city_name}
        </div>
        <div>
          &nbsp;{`${resultsBh.forecast && resultsBh.forecast["0"].max}º`}
          &nbsp;&nbsp;&nbsp;
          {`${resultsBh.forecast && resultsBh.forecast["0"].min}º`}
          &nbsp;&nbsp;
          {resultsBh.city_name}
        </div>
        <div>
          &nbsp;{`${resultsDf.forecast && resultsDf.forecast["0"].max}º`}
          &nbsp;&nbsp;&nbsp;
          {`${resultsDf.forecast && resultsDf.forecast["0"].min}º`}
          &nbsp;&nbsp;
          {resultsDf.city_name}
        </div>
        <div>
          &nbsp;{`${resultsBe.forecast && resultsBe.forecast["0"].max}º`}
          &nbsp;&nbsp;&nbsp;
          {`${resultsBe.forecast && resultsBe.forecast["0"].min}º`}
          &nbsp;&nbsp;
          {resultsBe.city_name}
        </div>
      </p>

      <p>
        <a>min&nbsp;&nbsp;max</a> 
        <div>
          &nbsp;{`${resultsBa.forecast && resultsBa.forecast["0"].max}º`}
          &nbsp;&nbsp;&nbsp;
          {`${resultsBa.forecast && resultsBa.forecast["0"].min}º`}
          &nbsp;&nbsp;
          {resultsBa.city_name}
        </div>
        <div>
          &nbsp;{`${resultsPr.forecast && resultsPr.forecast["0"].max}º`}
          &nbsp;&nbsp;&nbsp;
          {`${resultsPr.forecast && resultsPr.forecast["0"].min}º`}
          &nbsp;&nbsp;
          {resultsPr.city_name}
        </div>
        <div>
          &nbsp;{`${resultsCe.forecast && resultsCe.forecast["0"].max}º`}
          &nbsp;&nbsp;&nbsp;
          {`${resultsCe.forecast && resultsCe.forecast["0"].min}º`}
          &nbsp;&nbsp;
          {resultsCe.city_name}
        </div>
        <div>
          &nbsp;{`${resultsAm.forecast && resultsAm.forecast["0"].max}º`}
          &nbsp;&nbsp;&nbsp;
          {`${resultsAm.forecast && resultsAm.forecast["0"].min}º`}
          &nbsp;&nbsp;
          {resultsAm.city_name}
        </div>
        <div>
          &nbsp;{`${resultsPb.forecast && resultsPb.forecast["0"].max}º`}
          &nbsp;&nbsp;&nbsp;
          {`${resultsPb.forecast && resultsPb.forecast["0"].min}º`}
          &nbsp;&nbsp;
          {resultsPb.city_name}
        </div>
      </p>
    </DivCapital>
  );

  return <>{_content}</>;
}
