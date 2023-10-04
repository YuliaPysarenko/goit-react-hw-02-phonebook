import React from "react";
import shortid from "shortid";
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

 const idList = shortid.generate();

const ContactList = ({ contacts,buttonDelete }) => {
    return (
        <div>
           <ul className={css.listItem} key={idList}>{contacts.map(({id,name,number}) =>
            <li className={css.item} key= {shortid.generate()}>
               <p className={css.itemPage}>
                 <span>{name}:</span>
                 <span className={css.number}>{number}</span>
               </p>
               <button type="button" onClick={() => buttonDelete(id)} className={css.deleteButton}>Delete</button>
              
             </li>)}
       
          </ul> 
        </div> )
      
}

ContactList.protoType = {
  contacts: PropTypes.func.isRequired,
  buttonDelete: PropTypes.func.isRequired
}

export default ContactList