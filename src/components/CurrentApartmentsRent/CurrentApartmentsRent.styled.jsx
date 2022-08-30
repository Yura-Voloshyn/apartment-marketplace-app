import styled from 'styled-components';

export const StyledSection = styled.section`
  color: #777777;
  width: 100%;

  margin-bottom: 30px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledH2 = styled.h2`
  margin-bottom: 10px;
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
