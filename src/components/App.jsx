import { useSelector, useDispatch } from 'react-redux';
import {
 selectVisibleCotacts,
  selectIsLoading,
  selectError,
} from 'Redux/selectors';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Container } from './App.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/operations';


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectVisibleCotacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm title={'phonebook'} />
      {isLoading && !error && (
        <p style={{ marginBottom: 12, marginTop: 0, fontWeight: 700 }}>
          Request in progress...
        </p>
      )}
      {filteredContacts && 
        <ContactsList title={'contacts'} contacts={filteredContacts} />
}
    </Container>
  );
}; 

