import {
  StyledLi,
  BtnWrap,
  OpenModalText,
  ModalContextrapper,
  ModalTitle,
  ModalTextInside,
} from './ApartmentForRender.styled';
import Button from 'components/Button/Button';
import { useState, useEffect } from 'react';
import Modal from 'components/Modal/Modal';

const ApartmentForRender = ({
  id,
  title,
  rooms,
  price,
  description,
  onDeleteApartment,
  onRentApartment,
  onCancelRent,
  isAvailable,
}) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [showModal]);

  function isRoomSingular(num) {
    if (num === 1) {
      return 'room';
    }
    return 'rooms';
  }
  const available = isAvailable === true;

  const toggleModal = () => {
    setShowModal(prevModal => !prevModal);
  };
  return (
    <StyledLi key={id}>
      {title} /{rooms} {isRoomSingular(rooms)} /${price}{' '}
      {description.trim() !== '' && (
        <OpenModalText onClick={toggleModal}> more details...</OpenModalText>
      )}
      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalContextrapper>
            <ModalTitle>Apartment "{title}" description:</ModalTitle>
            <ModalTextInside>{description}</ModalTextInside>
          </ModalContextrapper>
        </Modal>
      )}
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
