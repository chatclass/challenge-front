import styled from 'styled-components';

export const CapitalsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: auto;

  @media screen and (max-width: 500px) {
    margin-left: 40px;
  }
`;

export const CapitalsListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 16px;

  @media screen and (max-width: 495px) {
    table:nth-child(2) > thead > tr > th {
      display: none;
    }
  }
`;

export const CapitalsList = styled.table`
  margin-right: 32px;
`;

export const CapitalsListLine = styled.tr``;

export const CapitalsListHeaderText = styled.th`
  font-size: 0.8rem;
  font-weight: 300;
  color: #222222;
  text-align: right;
  padding-bottom: 16px;
  padding-right: 8px;
`;

export const CapitalsListItemText = styled.td`
  font-size: 1rem;
  font-weight: 700;
  color: #222222;
  padding-bottom: 16px;
  padding-right: 8px;
`;