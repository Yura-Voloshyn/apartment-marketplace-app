import {
  StyledH2,
  StyledSection,
  StyledLi,
} from './CurrentApartmentsRent.styled';

import Button from 'components/Button/Button';

const CurrentApartmentsRent = ({ btnText, bgc }) => {
  return (
    <StyledSection>
      <StyledH2>Your current rent</StyledH2>
      <ul>
        <StyledLi>
          Sun Hotel/ 2 beds/ 1 day / $120
          <Button
            bgc={'#db3434'}
            btnText={'Cancel rent'}
            style={{ marginLeft: 'auto' }}
          />
        </StyledLi>
      </ul>
    </StyledSection>
  );
};

export default CurrentApartmentsRent;
