import React from "react";
import shortid from "shortid";

 const idList = shortid.generate();

const ContactsList = ({ contacts }) => {
    return (
        <div>
           <ul key={idList}>{contacts.map(item =>
            <li key= {shortid.generate()}>
              <p>{item.name}:{item.number}</p>
             </li>)}
          </ul> 
        </div> )
      
}

export default ContactsList