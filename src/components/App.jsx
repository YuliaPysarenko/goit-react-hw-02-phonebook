import React, { Component } from "react";
import Form from './Form';
import shortid from "shortid";

class App extends Component {
  state = {
  //   contacts: [
  //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  // ],
  contacts: [],
  
  filter: '',
  // name: '',
  // number: ''
  }
  
  // addContact - це має бути метод, що приходить в компонент форми як пропс.
  //  В компоненті Арр цей метод має додавати об'єкт контакта в стейт

  // myRef = React.createRef();
  // myRefNumber = React.createRef();
  // myRefFind = React.createRef();

    nameInputId = shortid.generate();
  // numberInputId = shortid.generate();
  // findContactsId = shortid.generate();

  // objectFormInput = ({name, number}) => {
  //   this.setState({
  //   name: name,
  //   number: number})
  // }


 objectFormInput = ({id, name,number}) => {
   this.setState({
     contacts: [{
       id: id,
       name: name,
       number: number} ]
   })
  }

  //  addContact = () => {
  //     this.render(
  //        <ul>
  //          <li key={this.state.name}>{this.state.name} {this.state.number}
  //        </li>
  //         </ul> 
  //     )
  // }

  // handleInput = (e) => {
  //   this.setState({
  //     name: e.currentTarget.value
  //   })
  // }

  // handleInputNumber = (e) => {
  //   this.setState({
  //     number:e.currentTarget.value
  //   })
  // }

  // handleInputContacts = (e) => {
  //   const {name,value} = e.currentTarget
  //   this.setState({
  //     [name]:value
  //  })
  // }

  //   handleContacts = () => {
  //     let inputValue = this.myRef.current.value;
  //     let inputValueNumber = this.myRefNumber.current.value;
  //     let contacts = this.state.contacts;
  //     contacts.push(inputValue, inputValueNumber);
      
  
  //     this.setState({
  //       'contacts': contacts 
  //     })
  //     // this.state.contacts.value = '';
  // }

  // handleSubmit = e => {
  //   e.preventDefault()
  //  this.handleContacts()
  
  //   this.reset()
  // }

  // reset = () => {
  //   this.setState({ name: '', number: '', filter: ''})
  // }
  


  render() {
    return (
      <section>
        <Form objectForm={this.objectFormInput} />

        <h2>Contacts</h2>
        <div>
          {/* Find contacts by name
          <input 
            ref={this.myRefFind}
            id={this.findContactsId}
            value={this.state.filter}
            type="text"
            name="filter"
            onChange={this.handleInputContacts}/> */}
         
          <ul>{this.state.contacts.map(item =>
            <li key={this.nameInputId}>{item}
            </li>)}
          </ul> 
       </div>
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