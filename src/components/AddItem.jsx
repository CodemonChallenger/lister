import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoAdd } from "react-icons/io5";

const AddItem = ({ items, setItems }) => {
  const [text, setText] = useState("");

  const addNewItem = (e) => {
    e.preventDefault();

    if (text !== "") {
      const newItem = {
        id: uuidv4(),
        text,
        isComplete: false,
      };

      setItems([newItem, ...items]);
      setText("");
    }
  };

  return (
    <form
      onClick={addNewItem}
      className="w-full h-[100px] bg-black z-10 overflow-hidden border-t-2 border-light-brown"
    >
      <div className="w-full h-full flex items-center justify-center space-x-2">
        <input
          className="py-2 px-4 rounded-l-full outline-0 w-[245px] md:w-auto"
          type="text"
          placeholder="New item..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="w-[50px] h-[40px] py-1 pr-1 flex items-center justify-center rounded-r-full text-black text-3xl outline-0 bg-green-600 hover:brightness-110"
        >
          <IoAdd />
        </button>
      </div>
    </form>
  );
};

export default AddItem;
