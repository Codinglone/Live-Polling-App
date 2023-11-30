import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <>
      <main className="flex flex-row w-full justify-between">
        <section
          id="sectionOne"
          className="w-1/2 h-[100vh] flex justify-center items-center bg-[#0066F7]"
        >
          <div className="flex justify-center">
            <form>
              <div className="flex w-full justify-between bg-white rounded-full pl-28 pr-2 py-[4px]">
                <input
                  type="text"
                  className="w-[70%] text-left outline-none"
                  placeholder="Enter the code"
                />
                <button className="w-[16%] bg-[#0066F7] h-10 rounded-full"></button>
              </div>
            </form>
          </div>
        </section>
        <section
          id="sectionTwo"
          className="w-1/2 h-[100vh] flex justify-center items-center bg-white"
        >
          <div className="w-full px-8">
            <form className="flex flex-col w-full">
              <div className="flex justify-center w-full">
                <div className="flex flex-col">
                  <FaRegUserCircle className="text-6xl" />
                  <span className="text-center my-2 text-xl font-medium">
                    Sign in
                  </span>
                </div>
              </div>
              <div className="flex w-full justify-center my-6">
                <input
                  type="text"
                  className="w-full border-2 rounded-md border-gray-400 py-2 px-4 outline-none"
                  placeholder="Email *"
                />
              </div>
              <div className="flex w-full justify-center my-2">
                <input
                  type="password"
                  className="w-full border-2 rounded-md border-gray-400 py-2 px-4 outline-none"
                  placeholder="Password *"
                />
              </div>
              <div className="flex w-1/4 my-2">
                <input
                  type="checkbox"
                />
                <span className="ml-2">Remember me</span>
              </div>
              <div className="flex w-full justify-center my-6">
                <button className="w-full bg-[#0066F7] text-center uppercase text-white font-medium py-1 rounded">signin</button>
              </div>
              <div className="flex w-full justify-end my-6">
                <p className="text-[#0066F7] text-sm text-right">
                    Don't have an account <Link to="/signup" className="text-[#0066F7]">Sign up</Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignIn;
