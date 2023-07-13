import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Item, Text, DeleteBtn } from './Contact.styled';
import { deleteContact } from 'Redux/operations';

export const Contact = ({ values: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <Item key={id}>
      <Text>
        {name} : {number}
      </Text>
      <DeleteBtn onClick={() => dispatch(deleteContact(id))}>Delete</DeleteBtn>
    </Item>
  );
};

Contact.propTypes = {
   values: PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
   }).isRequired,
};
