import {
  StyledH2,
  StyledSection,
  StyledLi,
  SelectWrap,
  ListHeadWrapper,
  StyledSelect,
  BtnWrap,
} from './/AvailableApartments.styled';

import Button from 'components/Button/Button';
const AvailableApartments = ({ btnText, bgc }) => {
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
        <StyledLi>
          Sun Hotel/ 2 beds/ 1 day / $120
          <BtnWrap>
            <Button bgc={'#422ef1'} btnText={'Rent'} />
            <Button bgc={'#db3434'} btnText={'Delete'} />
          </BtnWrap>
        </StyledLi>
      </ul>
    </StyledSection>
  );
};

export default AvailableApartments;
