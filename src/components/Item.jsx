import { BsCheckSquareFill, BsSquare } from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";

const Item = ({
  item: { id, text, isComplete },
  toggleChecked,
  deleteItem,
}) => {
  return (
    <div
      className={`${
        isComplete ? "bg-red-200" : "bg-white"
      } w-full flex items-center py-3 px-4 rounded-2xl cursor-pointer border-none hover:brightness-110`}
    >
      {isComplete ? (
        <BsCheckSquareFill
          className="mr-4 text-orange"
          onClick={() => toggleChecked(id)}
        />
      ) : (
        <BsSquare className="mr-4" onClick={() => toggleChecked(id)} />
      )}

      <p
        className={`${isComplete && "italic opacity-50"} w-full mr-2`}
        onClick={() => toggleChecked(id)}
      >
        {text}
      </p>
      <FaMinusCircle
        className="text-orange text-xl hover:bg-blue-500 ml-auto"
        onClick={() => deleteItem(id)}
      />
    </div>
  );
};

export default Item;
