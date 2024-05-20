import React from 'react';
import { useState } from 'react';


const Main = () => {
 const [items, setItems] = useState(['Random text 1', 'Random text 2', 'Random text 3']);
  const [newItemText, setNewItemText] = useState('');

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleAdd = () => {
    if (newItemText.trim() !== '') {
      setItems([...items, newItemText]);
      setNewItemText('');
    }
  };

  // Handle sending the input on pressing Enter key
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleAdd();
        }
    };
  

  return (
    <>
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h1>Name: Prashant Patil</h1>
        <h3>Email ID: <a href='mailto:Patilprashantanil@gmail.com'>Patilprashantanil@gmail.com</a></h3>
        <h3>Phone Number : 8806640665</h3>
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter New Text "
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="btn btn-primary mt-2" onClick={handleAdd}>
          Add Item
        </button>
      </div>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Main;