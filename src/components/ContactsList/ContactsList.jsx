import React from "react";
import shortid from "shortid";
import PropTypes from 'prop-types';
import css from './ContactList.module.css'

 const idList = shortid.generate();

const ContactsList = ({ contacts,buttonDelete }) => {
    return (
        <div>
           <ul className={css.list} key={idList}>{contacts.map(({id,name,number}) =>
            <li className={css.item} key= {shortid.generate()}>
               <p>
                 <span>{name}:</span>
                 <span>{number}</span>
               </p>
               <button type="button" onClick={() => buttonDelete(id)} className={css.deleteButton}>Delete</button>
              
             </li>)}
       
          </ul> 
        </div> )
      
}

ContactsList.protoType = {
  contacts: PropTypes.func.isRequired,
  buttonDelete: PropTypes.func.isRequired
}

export default ContactsList