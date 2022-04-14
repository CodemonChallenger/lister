import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("lister")) {
      const itemList = localStorage.getItem("lister");
      setItems(JSON.parse(itemList));
    } else {
      localStorage.setItem("lister", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lister", JSON.stringify(items));
  }, [items]);

  const toggleChecked = (id) => {
    const newList = items.map((item) => {
      if (id === item.id) {
        return { ...item, isComplete: !item.isComplete };
      }
      return item;
    });
    setItems(newList);
  };

  const deleteItem = (id) => {
    const newList = items.filter((item) => item.id !== id);
    setItems(newList);
  };

  const removeAll = () => {
    setItems([]);
  };

  const checkAll = () => {
    const newList = items.map((item) => {
      return { ...item, isComplete: true };
    });
    setItems(newList);
  };

  const uncheckAll = () => {
    const newList = items.map((item) => {
      return { ...item, isComplete: false };
    });
    setItems(newList);
  };

  return (
    <div className="w-screen min-h-screen bg-light-brown">
      <div className="mx-auto min-h-full">
        <Header
          isModalOpen={isModalOpen}
          toggleModal={() => setIsModalOpen(!isModalOpen)}
        />
        {isModalOpen && <AddItem items={items} setItems={setItems} />}
        <ItemList
          isModalOpen={isModalOpen}
          items={items}
          checkAll={checkAll}
          uncheckAll={uncheckAll}
          removeAll={removeAll}
          toggleChecked={toggleChecked}
          deleteItem={deleteItem}
        />
      </div>
    </div>
  );
};

export default App;
