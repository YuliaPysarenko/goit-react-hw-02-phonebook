import React, { Component } from "react";
import shortid from "shortid";

class Form extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  }
  

  render() {
    // return <Form/>
    return (
    <div>
        <h1>Phonebook</h1>
        < form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input 
  ref={this.myRef}
  id={this.nameInputId}
  value={this.state.name}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={this.handleInputContacts}/>
          </label>
          <label htmlFor={this.numberInputId}>
           Number
            <input
  ref={this.myRefNumber}            
  id={this.numberInputId}
  value= {this.state.number}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  onChange={this.handleInputContacts}           
/> </label>
     
          <button type="Submit">Add contact</button>
          </form>
        <h2>Contacts</h2>
        <div>
          Find contacts by name
          <input 
            ref={this.myRefFind}
            id={this.findContactsId}
            value={this.state.filter}
            type="text"
            name="filter"
            onChange={this.handleInputContacts}/>
          
          <ul>{this.state.contacts.map(item =>
            <li key={this.nameInputId}>{item}
            </li>)}
        </ul>
        </div>
      
     {/* </form>  */}
     </div> 

    )
  }
 
}
export default Form;