import styled from 'styled-components';

export const Btn = styled.button`
  @media (max-width: 767px) {
    /* margin-top: 10px; */
  }

  width: 80px;
  height: 30px;
  padding: 4px 8px;
  cursor: pointer;
  outline: none;
  border: 1px solid #cacaca;
  border-radius: 4px;
  align-self: center;
  color: white;
  font-size: 10px;
  background-color: ${bgc => bgc.bgc};
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 767px) {
    align-self: flex-end;
  }
  @media (min-width: 768px) {
    margin-left: auto;
  }
`;
