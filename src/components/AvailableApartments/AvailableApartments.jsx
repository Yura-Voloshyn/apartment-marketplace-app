import {
  StyledH2,
  StyledSection,
  SelectWrap,
  ListHeadWrapper,
  StyledSelect,
  StyledInputFilter,
} from './AvailableApartments.styled';
import ApartmentForRender from 'components/ApartmentForRender/ApartmentForRender';

const AvailableApartments = ({
  apartments,
  onDeleteApartment,
  onRentApartment,
  onChange,
}) => {
  return (
    <StyledSection>
      <ListHeadWrapper>
        <StyledH2>Available Apartments</StyledH2>
        <SelectWrap>
          {' '}
          <p style={{ fontSize: '12px' }}>Sort by:</p>
          <StyledSelect onChange={onChange} name="select" id="select">
            <option value="fromlowest">Price: Lowest first</option>
            <option value="fromhighest">Price: Highest first</option>
          </StyledSelect>
          <StyledInputFilter type="text" placeholder="number of rooms" />
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
