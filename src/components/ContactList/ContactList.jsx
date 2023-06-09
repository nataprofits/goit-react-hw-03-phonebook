import PropTypes  from "prop-types";
import { List, Item, Name, Button } from "./ContactList.styled"

export function ContactList({ findContacts, onDeleteContact }) {
  return (
    <List>
      {findContacts
        .sort((firstContact, secondContact) =>
          firstContact.name.localeCompare(secondContact.name)
        )
        .map(findContact => (
          <Item key={findContact.id}>
            <Name>
              {findContact.name}: {findContact.number}
            </Name>
            <Button 
              onClick={() => onDeleteContact(findContact.id)}
              type="button"
            >
              Delete
            </Button>
          </Item>
        ))}
    </List>
  );
}

ContactList.propTypes = {
  findContacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};