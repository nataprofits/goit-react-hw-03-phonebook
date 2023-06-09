import { Component } from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import { Title, Container, Div, DivContacts } from "./App.styled";
 

export class App extends Component {
    state = {
      contacts: [],
      filter: '',
    };
    addContact = ({ name, number }) => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      this.state.contacts.some(contact => contact.name === newContact.name)
        ? alert(`${newContact.name} is already contact`)
        : this.setState(({ contacts }) => ({
            contacts: [newContact, ...contacts],
          }));
    };
    deleteContact = contactId => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      }));
    };
    handleInputChange = evt => {
      const { name, value } = evt.currentTarget;
      this.setState({ [name]: value });
    };
    handleSubmit = evt => {
      const { name, number } = this.state;
      evt.preventDefault();
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      // if (newContact.name !== this.state.contact.name) {
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
      // } else{alert(`${newContact.name} is already contact`);}
      this.reset();
    };
    handleFilter = evt => {
      this.setState({ filter: evt.currentTarget.value });
    };
    componentDidMount() {
      const contacts = localStorage.getItem('contacts');
      const parsContacts = JSON.parse(contacts);
      if (parsContacts) { this.setState({contacts: parsContacts})}
    }
    componentDidUpdate(prevProps, prevState) {
if (prevState.contacts !== this.state.contacts) {
  localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
}
    }
  
    render() {
      const normFilter = this.state.filter.toLocaleLowerCase();
      const findContacts = this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(normFilter)
      );
      return (
        <Container>
         <Div> <Title>
            Phone<span>book</span>
          </Title>
          <ContactForm onSubmit={this.addContact} />
          </Div>;
  <DivContacts>
<Title>Contacts</Title>
          <Filter onFilter={this.handleFilter} state={this.state.filter} />
          <ContactList
            findContacts={findContacts}
            onDeleteContact={this.deleteContact}
          /></DivContacts>
        </Container>
      );
    }
  }