import { Component } from "react";
import PropTypes from 'prop-types';
import { Form, Label, Input, ButtonAddDeleteContact } from "./ContactForm.styled"; 

export class ContactForm extends Component {
    static propTypes = {
      onSubmit: PropTypes.func.isRequired,
    };
    state = {
      name: '',
      number: '',
    };
    reset = () => {
      this.setState({ name: '', number: '' });
    };
    handleInputChange = evt => {
      const { name, value } = evt.currentTarget;
      this.setState({ [name]: value });
    };
    handleSubmit = evt => {
      evt.preventDefault();
      this.props.onSubmit(this.state);
      this.reset();
    };
    render() {
      return (
        <Form onSubmit={this.handleSubmit}>
          <Label>
            <span>Name</span>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            <span>Number</span>
            <Input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <ButtonAddDeleteContact type="submit">
            Add contact
          </ButtonAddDeleteContact>
        </Form>
      );
    }
  }