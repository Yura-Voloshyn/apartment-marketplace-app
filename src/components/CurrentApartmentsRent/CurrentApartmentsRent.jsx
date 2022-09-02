import { StyledH2, StyledSection } from './CurrentApartmentsRent.styled';

import ApartmentForRender from 'components/ApartmentForRender/ApartmentForRender';

const CurrentApartmentsRent = ({ currentApartments, onCancelRent }) => {
  return (
    <StyledSection>
      <StyledH2>Your current rent</StyledH2>
      <ul>
        {currentApartments.map(
          ({ id, title, rooms, price, description, isAvailable }) =>
            (
              <ApartmentForRender
                isAvailable={isAvailable}
                key={id}
                title={title}
                rooms={rooms}
                price={price}
                description={description}
                onCancelRent={() => onCancelRent(id)}
              />
            ) || []
        )}
      </ul>
    </StyledSection>
  );
};

export default CurrentApartmentsRent;
