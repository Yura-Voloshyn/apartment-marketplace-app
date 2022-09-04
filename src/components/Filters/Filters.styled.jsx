import styled from 'styled-components';

export const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: auto;
  @media (max-width: 767px) {
    max-width: 125px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
`;

export const StyledSelect = styled.select`
  font-size: 12px;
  color: #777777;
  border: 1px solid #cacaca;
  border-radius: 4px;
  outline: none;

  @media (max-width: 767px) {
    margin-bottom: 5px;
  }
`;

export const StyledInputFilter = styled.input`
  box-sizing: border-box;
  font-size: 12px;
  height: 18px;
  outline: none;
  border: 1px solid #cacaca;
  border-radius: 4px;
  padding: 2px 4px;
  @media (min-width: 768px) {
    max-width: 122px;
  }
`;
