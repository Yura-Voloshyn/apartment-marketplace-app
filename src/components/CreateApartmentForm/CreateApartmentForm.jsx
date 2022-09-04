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
  InfoText,
} from './CreateApartmentForm.styled';

import Button from 'components/Button/Button';
import { useState } from 'react';

const CreateApartmentForm = ({ onSubmit }) => {
  const [apartmentTitle, setApartmentTitle] = useState('');
  const [roomsCount, setRoomsCount] = useState('');
  const [apartmentPrice, setApartmentPrice] = useState('');
  const [apartmentDescription, setApartmentDescription] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'title':
        setApartmentTitle(value);
        break;
      case 'rooms':
        setRoomsCount(value);
        break;
      case 'price':
        setApartmentPrice(value);
        break;
      case 'description':
        setApartmentDescription(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      apartmentTitle,
      roomsCount,
      apartmentPrice,
      apartmentDescription,
    });
    reset();
  };
  const reset = () => {
    setApartmentTitle('');
    setRoomsCount('');
    setApartmentPrice('');
    setApartmentDescription('');
  };

  return (
    <StyledSection>
      <StyledH1>Apartment Marketplace</StyledH1>
      <StyledH2>Create a new rent</StyledH2>

      <StyledForm onSubmit={handleSubmit}>
        <Wrapper>
          <StyledLabel>
            Title*
            <StyledInput
              maxLength={99}
              className="inputText"
              type="text"
              name="title"
              placeholder="Ex. Flat in the city center"
              value={apartmentTitle}
              onChange={handleChange}
              title="Apartment name - can’t be empty. Max length is 99 characters"
              required
            />
          </StyledLabel>
          <WrapperNumbers>
            <StyledLabel>
              Rooms*
              <StyledInput
                min={1}
                className="inputNumbers"
                type="number"
                name="rooms"
                placeholder="Number of rooms"
                value={roomsCount}
                pattern="[0-9]"
                onChange={handleChange}
                title="Number of rooms - accepts only numbers. Can’t be 0 or less than 0"
                required
              />
            </StyledLabel>
            <StyledLabel>
              Price*
              <StyledInput
                min={1}
                className="inputNumbers"
                type="number"
                name="price"
                placeholder="99.00"
                value={apartmentPrice}
                pattern="[0-9]"
                onChange={handleChange}
                title="Price - accepts only numbers. Can’t be 0 or less than 0"
                required
              />
            </StyledLabel>
          </WrapperNumbers>
        </Wrapper>
        <StyledLabel className="textarea">
          Description
          <StyledTextarea
            maxLength={999}
            type="text"
            name="description"
            placeholder="You can add a description"
            value={apartmentDescription}
            onChange={handleChange}
            title="Description - Optional text. Max length is 999 characters"
          />
        </StyledLabel>
        <Button bgc={'#1f7c2f'} btnText={'Submit rent'} />
        <InfoText>* - required fields</InfoText>
      </StyledForm>
    </StyledSection>
  );
};

export default CreateApartmentForm;
