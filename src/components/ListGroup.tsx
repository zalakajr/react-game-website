import { useState } from "react";

const ListGroup = () => {
  let items = ["New York", "Tokyo", "Sans Francisco", "London", "Paris"];

  
  //hook
 const [selectedIndex, setSelectedIndex] = useState(-1)
 


  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => {setSelectedIndex(index)}}
          >
            {item}
          </li>
          
        ))}
      </ul>
      
    </>
  );
};

export default ListGroup;
