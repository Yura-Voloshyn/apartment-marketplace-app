import { StyledLi, BtnWrap } from './ApartmentForRender.styled';
import Button from 'components/Button/Button';

const ApartmentForRender = ({
  id,
  title,
  rooms,
  price,
  onDeleteApartment,
  onRentApartment,
  onCancelRent,
  isAvailable,
}) => {
  function isRoomSingular(num) {
    if (num === 1) {
      return 'room';
    }
    return 'rooms';
  }
  const available = isAvailable === true;
  return (
    <StyledLi key={id}>
      {title} / {rooms} {isRoomSingular(rooms)} / ${price}
      {available && (
        <BtnWrap>
          <Button
            onClick={() => onRentApartment(id)}
            bgc={'#422ef1'}
            btnText={'Rent'}
          />
          <Button
            onClick={() => onDeleteApartment(id)}
            bgc={'#db3434'}
            btnText={'Delete'}
          />
        </BtnWrap>
      )}
      {!available && (
        <Button
          onClick={() => onCancelRent(id)}
          bgc={'#db3434'}
          btnText={'Cancel rent'}
        />
      )}
    </StyledLi>
  );
};

export default ApartmentForRender;
