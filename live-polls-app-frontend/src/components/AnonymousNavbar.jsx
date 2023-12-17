import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const AnonymousNavbar = ({ handleNavigation, activeNavLink }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    // localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <nav className="w-full flex flex-col">
      <div className="flex justify-center w-full  bg-[#0066F7]">
        <div className="w-1/4 flex justify-between py-2">
          <span className="text-white text-xl font-medium">Welcome</span>
          <span className="text-white text-xl font-medium">Codinglone</span>
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
          </div>
        </div>
        <div className="w-1/3 flex items-center justify-end px-4 relative">
      <FaRegUserCircle
        className="text-4xl cursor-pointer"
        onClick={() => setPopupOpen(!isPopupOpen)}
      />
      </div>
      {isPopupOpen && (
        <div className="absolute top-[100px] right-[6px] mt-2 p-4 bg-white border rounded shadow-lg">
          {/* Replace 'username' with the actual username */}
          <p className="text-gray-800">Username: Not Logged in</p>
          <button onClick={handleLogout} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </button>
        </div>
      )}
      </div>
    </nav>
  );
};

export default AnonymousNavbar;
