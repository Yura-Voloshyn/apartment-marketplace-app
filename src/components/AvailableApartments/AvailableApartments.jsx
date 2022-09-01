import {
  StyledH2,
  StyledSection,
  SelectWrap,
  ListHeadWrapper,
  StyledSelect,
} from './AvailableApartments.styled';
import ApartmentForRender from 'components/ApartmentForRender/ApartmentForRender';

const AvailableApartments = ({
  apartments,
  onDeleteApartment,
  onRentApartment,
}) => {
  console.log(apartments);
  return (
    <StyledSection>
      <ListHeadWrapper>
        <StyledH2>Available Apartments</StyledH2>
        <SelectWrap>
          {' '}
          <p style={{ fontSize: '12px' }}>Sort by:</p>
          <StyledSelect name="select" id="select">
            <option value="fromlowest">Price: Lowest first</option>
            <option value="fromhighes">Price: Highest first</option>
          </StyledSelect>
        </SelectWrap>
      </ListHeadWrapper>
      <ul>
        {apartments.map(
          ({ id, title, rooms, price, isAvailable }) =>
            (
              <ApartmentForRender
                isAvailable={isAvailable}
                key={id}
                title={title}
                rooms={rooms}
                price={price}
                onRentApartment={() => onRentApartment(id)}
                onDeleteApartment={() => onDeleteApartment(id)}
              />
            ) || []
        )}
      </ul>
    </StyledSection>
  );
};

export default AvailableApartments;
