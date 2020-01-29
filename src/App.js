import React, { useState } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./Components/TodoList";
import TodoInput from "./Components/TodoInput";

const App = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [editItem, setEditItem] = useState(false);

  const handleChange = ({ target }) => {
    setItem(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      title: item
    };
    const updateItems = [...items, newItem];
    setItems(updateItems);
    setItem("");
    setEditItem(false);
  };

  const clearList = () => {
    console.log("Clear list");
  };
  const handleDelete = id => {
    const removeItem = items.filter(item => item.id !== id);
    setItems(removeItem);
  };
  const handleEdit = id => {
    const filteredItem = items.filter(item => item.id !== id);
    const selectedItem = items.find(item => item.id === id);

    setItems(filteredItem);
    setItem(selectedItem.title);
    setEditItem(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">
          <h3 className="text-capitalize text-center">todo input</h3>
          <TodoInput
            item={item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editItem={editItem}
          />
          <TodoList
            items={items}
            clearList={clearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
