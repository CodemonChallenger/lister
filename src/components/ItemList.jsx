import { IoCheckboxOutline, IoSquareOutline, IoClose } from "react-icons/io5";

import Item from "./Item";

const ItemList = ({
  items,
  toggleChecked,
  deleteItem,
  checkAll,
  uncheckAll,
  removeAll,
}) => {
  return (
    <>
      <div className="h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y-2 gap-2 p-4">
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              toggleChecked={toggleChecked}
              deleteItem={deleteItem}
            />
          ))}
        </div>
      </div>
      {items.length !== 0 ? (
        <div className=" w-full max-w-[500px] h-[50px] flex mx-auto px-4 py-2 space-x-3">
          <div
            className="flex-1 bg-green-500 rounded-xl text-black flex items-center justify-center cursor-pointer hover:brightness-110 md:text-xl"
            onClick={checkAll}
          >
            <IoCheckboxOutline />
          </div>
          <div
            className="flex-1 bg-yellow-200 rounded-xl text-black flex items-center justify-center cursor-pointer hover:brightness-110 md:text-xl"
            onClick={uncheckAll}
          >
            <IoSquareOutline />
          </div>
          <div
            className="flex-1 bg-red-500 rounded-xl text-black flex items-center justify-center cursor-pointer hover:brightness-110 md:text-xl"
            onClick={removeAll}
          >
            <IoClose />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <h1 className="text-black text-2xl">Your list is empty...</h1>
        </div>
      )}
    </>
  );
};

export default ItemList;
