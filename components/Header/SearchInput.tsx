import { RiSearch2Line } from "react-icons/ri";

const SearchInput = () => {
  return (
    <div className="h-10 border border-ctp-text rounded-full p-1 flex items-center bg-ctp-base">
      <div className="px-3">
        <input
          type="text"
          className="border-none outline-none h-full w-full bg-transparent"
        />
      </div>
      <button className="h-full bg-ctp-rosewater text-ctp-base px-3 rounded-full">
        <RiSearch2Line className="text-2xl" />
      </button>
    </div>
  );
};

export default SearchInput;
