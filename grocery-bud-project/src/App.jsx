import { useEffect, useState } from "react";
import Form from "./Form";
import { ToastContainer, toast } from "react-toastify";
import Items from "./Items";

// multi liner
// useState(() => {
//   const savedItems = localStorage.getItem("items");
//   return savedItems ? JSON.parse(savedItems) : [];
// });
// ? same functionality
// one liner
const defaultList = JSON.parse(localStorage.getItem("items") || []);
const App = () => {
  const [items, setItems] = useState(defaultList);

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    toast.success("item removed");
  };

  const toggleItem = (id) => {
    const updatedItem = items.map((item) => {
      return item.id === id ? { ...item, completed: !item.completed } : item;
    });
    setItems(updatedItem);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <section className="section-center">
      <Form items={items} setItems={setItems} />
      <Items items={items} removeItem={removeItem} toggleItem={toggleItem} />
      <ToastContainer position="top-center" />
    </section>
  );
};

export default App;
