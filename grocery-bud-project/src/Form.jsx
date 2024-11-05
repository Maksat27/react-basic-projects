import { nanoid } from "nanoid";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ items, setItems }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("Please enter item name");
      return;
    }
    const newItem = {
      id: nanoid(),
      name: newItemName,
      completed: false,
    };
    setItems([...items, newItem]);
    setNewItemName("");
    toast.success("item added to the list");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button className="btn" type="submit">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
