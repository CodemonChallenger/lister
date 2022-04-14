import { IoAdd, IoClose } from "react-icons/io5";

const Header = ({ isModalOpen, toggleModal }) => {
  return (
    <nav className="bg-black text-white font-bold w-full h-[60px] p-6 flex items-center justify-between drop-shadow-md">
      <h1 className="text-xl">GoLister</h1>
      {isModalOpen ? (
        <IoClose
          className="bg-green-500 text-black w-12 h-8 rounded-full p-2 cursor-pointer drop-shadow-lg hover:brightness-110"
          onClick={toggleModal}
        />
      ) : (
        <IoAdd
          className="bg-green-500 text-black w-12 h-8 rounded-full p-2 cursor-pointer drop-shadow-lg hover:brightness-110"
          onClick={toggleModal}
        />
      )}
    </nav>
  );
};

export default Header;
