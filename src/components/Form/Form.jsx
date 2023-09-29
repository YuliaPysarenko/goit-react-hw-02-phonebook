import React, { Component } from "react";
import shortid from "shortid";

class Form extends Component {
  state = {
    name: '',
    number: ''
  }

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleInputContacts = (e) => {
    const { name, value } = e.currentTarget
    this.setState({
      [name]: value
    })
     
  }
  handleSubmit = e => {
    e.preventDefault()
    //  this.handleContacts()
    this.reset()
    //  this.props.objectForm(this.state)
    // this.addContact()
  }

  reset = () => {
    this.setState({ name: '', number: '' })
  }

  // addContact = () => {
  //   if (this.state !== '') {
  //     this.render(
  //        <ul>
  //          <li key={this.state.name}>{this.state.value}
  //        </li>
  //         </ul> 
  //     )
  //   }
  // }

  render() {
    return (
      <section>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              id={this.nameInputId}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputContacts} />
          </label>
        
          <label htmlFor={this.numberInputId}>
            Number
            <input
              id={this.numberInputId}
              value={this.state.number}
              type="tel"
              name="number"
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInputContacts}
            />
          </label>
     
          <button type="Submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
         <div>  
    
          {/* Find contacts by name
          // <input 
          //   // ref={this.myRefFind}
          //   id={this.findContactsId}
          //   value={this.state.filter}
          //   type="text"
          //   name="filter"
          //   onChange={this.handleInputContacts}/>  */}
           
           <ul>
           <li key={this.state.name}>{this.state.name} {this.state.number}
         </li>
          </ul> 
{/* 
             <ul>
            <li key={this.state.name}>{this.props.objectForm(this.state) }
         </li>
          </ul>   */}
          
          </div>
      </section>

  )
  }
 
}
export default Form;