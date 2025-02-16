import { FaSortDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex m-3 justify-between">
      <div className="flex gap-1 px-2 hover:bg-neutral-700 rounded-xl cursor-pointer">
        <div className="flex flex-col">
          <span className="text-xl">Gemini</span>
          <span className="text-gray-400">2.0 Flash</span>
        </div>
        <div className="mt-1 text-gray-400">
          <FaSortDown />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
