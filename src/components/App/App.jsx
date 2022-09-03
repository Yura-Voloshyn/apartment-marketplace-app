import { AppStyled, Container } from './App.styled';
import CreateApartmentForm from '../CreateApartmentForm/CreateApartmentForm';
import CurrentApartmentsRent from 'components/CurrentApartmentsRent/CurrentApartmentsRent';
import AvailableApartments from 'components/AvailableApartments/AvailableApartments';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import testApartments from '../../jsonData/jsonData.json';
import { getStorageItem, saveApartments } from '../../services/localStorage';

const apartmentsExample = testApartments;

const App = () => {
  const [apartments, setApartments] = useState(() => {
    return getStorageItem('apartments') ?? apartmentsExample;
  });

  const [currentApartments, setCurrentApartments] = useState([]);
  const [availableApartments, setAvailableApartments] = useState([]);
  const [roomsFilter, setRoomsFilter] = useState('');

  useEffect(() => {
    const curentFiltered = apartments.filter(
      apartment => apartment.isAvailable === false
    );
    const availableFiltered = apartments.filter(
      apartment => apartment.isAvailable === true
    );

    if (curentFiltered) {
      setCurrentApartments(curentFiltered);
    }
    setAvailableApartments(availableFiltered);
  }, [apartments]);

  useEffect(() => {
    saveApartments(apartments);
  }, [apartments]);

  const deleteApartment = apartmentId => {
    setApartments(prevState =>
      prevState.filter(apartment => apartment.id !== apartmentId)
    );
  };

  const updateApartmentIsAvailable = (item, id, value) => {
    if (item.id === id) {
      return { ...item, isAvailable: value };
    }
    return item;
  };

  const handleRentClick = apartmentId => {
    const changedApartments = apartments.map(apartment =>
      updateApartmentIsAvailable(apartment, apartmentId, false)
    );
    setApartments(changedApartments);
  };

  const handleCancelRentClick = apartmentId => {
    const changedApartments = apartments.map(apartment =>
      updateApartmentIsAvailable(apartment, apartmentId, true)
    );
    setApartments(changedApartments);
  };

  const handleFormSubmit = data => {
    const alreadyExist = apartments.find(
      el => el.title === data.apartmentTitle
    );

    const apartment = {
      id: nanoid(),
      title: data.apartmentTitle,
      rooms: +data.roomsCount,
      price: +data.apartmentPrice,
      description: data.apartmentDescription,
      isAvailable: true,
    };
    alreadyExist
      ? alert(`${data.apartmentTitle} is already in available apartments`)
      : setApartments(prevApartments => [...prevApartments, apartment]);
  };
  const changeFilter = e => {
    setRoomsFilter(e.currentTarget.value);
  };

  const getVisibleApartments = () => {
    if (!!roomsFilter && roomsFilter.trim() !== '') {
      return availableApartments.filter(
        apartment => +apartment.rooms === +roomsFilter
      );
    }
    return availableApartments;
  };

  return (
    <AppStyled>
      <Container>
        <CreateApartmentForm onSubmit={handleFormSubmit} />
        {currentApartments.length ? (
          <CurrentApartmentsRent
            onCancelRent={handleCancelRentClick}
            isAvailable={false}
            currentApartments={currentApartments}
          />
        ) : (
          <p style={{ textAlign: 'center', marginBottom: '20px' }}>
            There are no rented apartments yet
          </p>
        )}
        {!availableApartments.length ? (
          <p style={{ textAlign: 'center' }}>
            No available apartments right now
          </p>
        ) : (
          <AvailableApartments
            value={roomsFilter}
            onChange={changeFilter}
            // length={availableApartments.length}
            onRentApartment={handleRentClick}
            isAvailable={true}
            apartments={getVisibleApartments()}
            onDeleteApartment={deleteApartment}
          />
        )}
      </Container>
    </AppStyled>
  );
};

export default App;
