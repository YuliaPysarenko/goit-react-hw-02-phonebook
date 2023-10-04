import React, { Component } from "react";
import shortid from "shortid";

import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  
  filter: '',
  }

     idList = shortid.generate();
     findContactsId = shortid.generate();

  filterValue = (e) => {
    this.setState({
      filter: e.currentTarget.value
    })
    
  }
 
 objectFormInput = ({name, number}) => {
   const newContacts = {
         id: shortid.generate(),
         name,
         number
   }
   this.setState(prevState => ({
    contacts: [newContacts, ...prevState.contacts]
  }
  ))
  }

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalazedFilter = filter.toLowerCase();

      return filter ? contacts.filter(
      contact => contact.text.toLowerCase().includes(normalazedFilter)) : this.state.contacts
    
  }
 
  render() {
     const filterContactsFind = this.filterContacts();

    return (
      <section>
        <h1>Phonebook</h1>
        <Form objectForm={this.objectFormInput} />

        <h2>Contacts</h2>

        <Filter value={this.state.filter } filter={ this.filterValue} />
        <ContactsList contacts={filterContactsFind}/>
        {/* <ContactsList contacts={this.state.contacts}/> */}
     </section> 
    )
  }
}
// export const App = () => {
//   return (
   
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
//   );
// };

export default App