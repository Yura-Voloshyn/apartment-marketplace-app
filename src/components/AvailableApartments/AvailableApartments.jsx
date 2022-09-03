import {
  StyledH2,
  StyledSection,
  SelectWrap,
  ListHeadWrapper,
  StyledSelect,
  StyledInputFilter,
} from './AvailableApartments.styled';
import ApartmentForRender from 'components/ApartmentForRender/ApartmentForRender';
import { useState, useEffect } from 'react';

const AvailableApartments = ({
  apartments,
  onDeleteApartment,
  onRentApartment,
  value,
  onChange,
}) => {
  // const [roomsFilter, setRoomsFilter] = useState('');
  const [filteredApartments, setFilteredApartments] = useState(apartments);

  const [selectedFilter, setSelectedFilter] = useState('none');

  // const changeFilter = e => {
  //   setRoomsFilter(e.currentTarget.value);
  // };

  // useEffect(() => {
  //   if (!!roomsFilter && roomsFilter.trim() !== '') {
  //     const roomsCount = apartments.filter(
  //       apartment => +apartment.rooms === +roomsFilter
  //     );

  //     setFilteredApartments(roomsCount);
  //   } else {
  //     setFilteredApartments(apartments);
  //   }
  //   // }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [roomsFilter, apartments]);

  const handleSelect = e => {
    setSelectedFilter(e.target.value);
  };

  useEffect(() => {
    const filtered = [
      ...apartments.sort((a, b) => {
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
    setFilteredApartments(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter, apartments]);

  return (
    <StyledSection>
      <ListHeadWrapper>
        <StyledH2>Available Apartments({filteredApartments.length})</StyledH2>
        <SelectWrap>
          {' '}
          <p style={{ fontSize: '12px' }}>Sort by:</p>
          <StyledSelect onChange={handleSelect} name="select" id="select">
            <option value="none">None</option>
            <option value="fromlowest">Price: Lowest first</option>
            <option value="fromhighest">Price: Highest first</option>
          </StyledSelect>
          <StyledInputFilter
            min={1}
            value={value}
            onChange={onChange}
            type="number"
            placeholder="Number of rooms"
          />
        </SelectWrap>
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
