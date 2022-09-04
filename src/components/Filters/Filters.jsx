import { SelectWrap, StyledSelect, StyledInputFilter } from './Filters.styled';

const Filters = ({ handleSelect, roomsFilter, changeFilter }) => {
  return (
    <SelectWrap>
      <p style={{ fontSize: '12px' }}>Sort by:</p>
      <StyledSelect onChange={handleSelect} name="select" id="select">
        <option value="none">None</option>
        <option value="fromlowest">Price: Lowest first</option>
        <option value="fromhighest">Price: Highest first</option>
      </StyledSelect>
      <StyledInputFilter
        min={1}
        value={roomsFilter}
        onChange={changeFilter}
        type="number"
        placeholder="Number of rooms"
      />
    </SelectWrap>
  );
};

export default Filters;
