import styled from 'styled-components';
// 320, 768, 1024
export const AppStyled = styled.main`
  padding: 10px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Container = styled.div`
  max-width: 300px;
  margin: 20px auto 20px auto;

  @media (min-width: 768px) {
    max-width: 700px;
  }
  @media (min-width: 1024px) {
    max-width: 1000px;
  }
`;
