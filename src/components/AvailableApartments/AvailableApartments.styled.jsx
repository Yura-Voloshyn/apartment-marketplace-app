import styled from 'styled-components';

export const StyledSection = styled.section`
  color: #777777;
  width: 100%;

  @media (min-width: 768px) {
    text-align: start;
    flex-direction: row;
  }
`;

export const StyledH2 = styled.h2`
  /* margin-bottom: 10px; */
  font-weight: 400;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px;
`;
export const ListHeadWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: auto;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
`;

export const StyledSelect = styled.select`
  font-size: 12px;
  color: #303030;
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: auto;
  @media (min-width: 768px) {
    gap: 10px;
    flex-direction: row;
  }
`;
