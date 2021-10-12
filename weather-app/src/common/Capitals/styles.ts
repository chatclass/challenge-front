import styled from 'styled-components';

export const CapitalsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: auto;
  transition: 500ms;
`;

export const CapitalsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 16px;
`;

export const CapitalsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 32px;
`;

export const CapitalsListHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 16px;
`;

export const CapitalsListHeaderText = styled.span`
  font-size: 0.8rem;
  font-weight: 200;
  color: #000;
  margin-right: 8px;
`;

export const CapitalsListItem = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 16px;
`;

export const CapitalsListItemText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #212121;
  margin-right: 8px;
`;
