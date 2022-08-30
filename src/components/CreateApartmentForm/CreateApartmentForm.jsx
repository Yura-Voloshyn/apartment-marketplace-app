import {
  StyledSection,
  StyledH1,
  StyledH2,
  StyledLabel,
  StyledInput,
  StyledForm,
  StyledTextarea,
  Wrapper,
  WrapperNumbers,
} from './CreateApartmentForm.styled';

import Button from 'components/Button/Button';

const CreateApartmentForm = ({ btnText, bgc }) => {
  return (
    <StyledSection>
      <StyledH1>Apartment Marketplace</StyledH1>
      <StyledH2>Create a new rent</StyledH2>

      <StyledForm>
        <Wrapper>
          <StyledLabel>
            Title*
            <StyledInput
              className="inputText"
              type="text"
              name="title"
              placeholder="Ex. Flat in the city center"
              // value={name}
              // onChange={handleChange}
              required
            />
          </StyledLabel>
          <WrapperNumbers>
            <StyledLabel>
              Rooms*
              <StyledInput
                className="inputNumbers"
                type="number"
                name="rooms"
                placeholder="Number of rooms"
                // value={name}
                // onChange={handleChange}
                required
              />
            </StyledLabel>
            <StyledLabel>
              Price*
              <StyledInput
                className="inputNumbers"
                type="number"
                name="price"
                placeholder="99.00"
                // value={name}
                // onChange={handleChange}
                required
              />
            </StyledLabel>
          </WrapperNumbers>
        </Wrapper>
        <StyledLabel className="textarea">
          Description
          <StyledTextarea
            type="text"
            name="description"
            placeholder="You can add a description"
            // value={name}
            // onChange={handleChange}
          />
        </StyledLabel>
        <Button bgc={'#1f7c2f'} btnText={'Submit rent'} />
      </StyledForm>
    </StyledSection>
  );
};

export default CreateApartmentForm;
