import styled from 'styled-components';

export const StyledSection = styled.section`
  color: #777777;
  width: 100%;

  margin-bottom: 30px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledH1 = styled.h1`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 28px;
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
export const StyledForm = styled.form`
  position: relative;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #dddddd;
  border: 1px solid #cacaca;
  border-radius: 2px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  .inputText {
  }
  .inputNumbers {
    flex-basis: auto;
    width: calc(100% - 10px);
    gap: 10px;
  }
  .textarea {
    @media (min-width: 768px) {
      width: 200px;
      margin-left: 20px;
      margin-right: 10px;
    }
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    max-width: 360px;
  }
`;
export const WrapperNumbers = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledLabel = styled.label`
  width: 100%;
  font-size: 14px;
  color: #474747;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const StyledInput = styled.input`
  margin-bottom: 10px;
  color: #474747;
  height: 20px;
  padding: 4px;
  outline: none;
  border: 1px solid #cacaca;
  border-radius: 2px;
`;

export const StyledTextarea = styled.textarea`
  padding: 4px;
  color: #474747;
  outline: none;
  border: 1px solid #cacaca;
  resize: none;
  height: 80px;
  border-radius: 2px;

  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
  @media (min-width: 768px) {
    width: 190px;
  }
`;

export const InfoText = styled.p`
  position: absolute;
  bottom: 4px;
  left: 4px;
  font-size: 12px;
`;
