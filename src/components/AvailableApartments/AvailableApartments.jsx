import {
  StyledH2,
  StyledSection,
  ListHeadWrapper,
} from './AvailableApartments.styled';
import ApartmentForRender from 'components/ApartmentForRender/ApartmentForRender';
import { useState, useEffect } from 'react';
import Filters from 'components/Filters/Filters';

const AvailableApartments = ({
  apartments,
  onDeleteApartment,
  onRentApartment,
}) => {
  const [roomsFilter, setRoomsFilter] = useState('');
  const [filteredApartments, setFilteredApartments] = useState(apartments);

  const [selectedFilter, setSelectedFilter] = useState('none');

  const changeFilter = e => {
    setRoomsFilter(e.currentTarget.value);
  };

  const handleSelect = e => {
    setSelectedFilter(e.target.value);
  };

  useEffect(() => {
    let roomsCount = apartments;
    if (!!roomsFilter && roomsFilter.trim() !== '') {
      roomsCount = apartments.filter(
        apartment => +apartment.rooms === +roomsFilter
      );
    }
    // }
    const sorted = [
      ...roomsCount.sort((a, b) => {
        if (selectedFilter === 'fromlowest') {
          return a.price > b.price ? 1 : -1;
        }
        if (selectedFilter === 'fromhighest') {
          return a.price > b.price ? -1 : 1;
        } else {
          return 0;
        }
      }),
    ];
    setFilteredApartments(sorted);
  }, [roomsFilter, apartments, selectedFilter]);

  return (
    <StyledSection>
      <ListHeadWrapper>
        <StyledH2>Available Apartments({filteredApartments.length})</StyledH2>
        <Filters
          handleSelect={handleSelect}
          roomsFilter={roomsFilter}
          changeFilter={changeFilter}
        />
      </ListHeadWrapper>
      <ul>
        {filteredApartments.map(
          ({ id, title, rooms, price, description, isAvailable }) => (
            <ApartmentForRender
              isAvailable={isAvailable}
              key={id}
              title={title}
              rooms={rooms}
              price={price}
              description={description}
              onRentApartment={() => onRentApartment(id)}
              onDeleteApartment={() => onDeleteApartment(id)}
            />
          )
        )}
      </ul>
    </StyledSection>
  );
};

export default AvailableApartments;
