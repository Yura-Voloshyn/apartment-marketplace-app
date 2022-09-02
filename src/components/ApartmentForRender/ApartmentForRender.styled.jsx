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

export const ModalContextrapper = styled.div`
  padding: 20px;
  max-width: 70vw;
`;
export const ModalTitle = styled.h3`
  text-align: center;

  margin-bottom: 20px;
  color: #777777;
  font-weight: 500;
`;
export const ModalTextInside = styled.p`
  color: #888888;
`;
export const OpenModalText = styled.span`
  margin-left: 10px;
  cursor: pointer;
  text-decoration: underline;
  @media (max-width: 767px) {
    margin-right: 10px;
    width: 50px;
  }

  &:hover {
    color: #414141;
  }
`;
