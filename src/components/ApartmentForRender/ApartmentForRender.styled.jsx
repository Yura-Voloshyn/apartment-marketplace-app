import styled from 'styled-components';

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    font-size: 14px;
  }
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
