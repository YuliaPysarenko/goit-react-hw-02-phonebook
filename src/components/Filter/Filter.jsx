import React from "react";
import shortid from "shortid";

const findContactsId = shortid.generate();

const Filter = ({ value, filter }) => {
    return (
    <div>
          Find contacts by name
          <input 
            id={findContactsId}
            value={value}
            type="text"
            name="filter"
            onChange={filter} />
    </div>)
}

export default Filter;