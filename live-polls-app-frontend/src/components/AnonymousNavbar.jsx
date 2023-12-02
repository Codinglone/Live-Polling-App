import { FaRegUserCircle } from "react-icons/fa";
const AnonymousNavbar = ({ handleNavigation, activeNavLink }) => {
  return (
    <nav className="w-full flex flex-col">
      <div className="flex justify-center w-full  bg-[#0066F7]">
        <div className="w-1/4 flex justify-between py-2">
          <span className="text-white text-xl font-medium">Welcome</span>
          <span className="text-white text-xl font-medium">Admin</span>
        </div>
      </div>
      <div className="w-full bg-white shadow-lg py-2 flex justify-between">
        <div className="w-[50%] flex justify-end">
          <div className="w-[20%] flex items-center justify-between">
            <span
              className={`cursor-pointer text-md font-medium ${
                activeNavLink === "polls" ? "text-[#0066f7]" : ""
              }`}
              onClick={() => handleNavigation("polls")}
            >
              Polls
            </span>
            <span
              className={`cursor-pointer text-md font-medium ${
                activeNavLink === "quiz" ? "text-[#0066f7]" : ""
              }`}
              onClick={() => handleNavigation("quiz")}
            >
              Quiz
            </span>
          </div>
        </div>
        <div className=" w-1/3 flex items-center justify-end px-4">
          <FaRegUserCircle className="text-4xl" />
        </div>
      </div>
    </nav>
  );
};

export default AnonymousNavbar;
