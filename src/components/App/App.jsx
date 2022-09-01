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
  // const [filter, setFilter] = useState('');
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

  const handleRentClick = apartmentId => {
    // console.log(apartmentId);
    const findApartmentForRent = apartments.find(
      apartment => apartment.id === apartmentId
    );
    console.log(findApartmentForRent);
    const changeAvailableStatus = (findApartmentForRent.isAvailable = false);
    // const changeAvailableStatus = {
    //   ...findApartmentForRent,
    //   isAvailable: false,
    // };

    setApartments(prevState => [...prevState, changeAvailableStatus]);
    // setApartments(prevState =>
    //   prevState.filter(apartment => apartment.id !== apartmentId)
    // );
  };

  const handleCancelRentClick = apartmentId => {
    // console.log(apartmentId);
    const findApartmentForRent = apartments.find(
      apartment => apartment.id === apartmentId
    );

    const changeAvailableStatus = (findApartmentForRent.isAvailable = false);
    // const changeAvailableStatus = {
    //   ...findApartmentForRent,
    //   isAvailable: true,
    // };

    setApartments(prevState => [...prevState, changeAvailableStatus]);
    // setApartments(prevState =>
    //   prevState.filter(apartment => apartment.id !== apartmentId)
    // );
  };

  const handleFormSubmit = data => {
    const alreadyExist = apartments.find(
      el => el.title === data.apartmentTitle
    );
    console.log(alreadyExist);
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
          <p style={{ textAlign: 'center' }}>There are no rented apartments</p>
        )}
        {availableApartments.length ? (
          <AvailableApartments
            onRentApartment={handleRentClick}
            isAvailable={true}
            apartments={availableApartments}
            onDeleteApartment={deleteApartment}
          />
        ) : (
          <p>No available apartments right now</p>
        )}
      </Container>
    </AppStyled>
  );
};

export default App;
