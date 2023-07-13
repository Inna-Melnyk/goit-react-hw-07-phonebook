import { useDispatch } from 'react-redux';
import { filteredContacts } from 'Redux/filterSlice';
import { Filter, FilterInput } from './ContactsFilter.styled';

export const ContactsFilter = () => {
  const dispatch = useDispatch();

  return (
    <Filter>
      Find contacts by name
      <FilterInput
        type="text"
        onChange={(e) => {
          const value = e.currentTarget.value;
          dispatch(filteredContacts(value))
        } }
      />
    </Filter>
  );
};

