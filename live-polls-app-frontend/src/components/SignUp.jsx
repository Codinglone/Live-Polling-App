import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
    <main className="flex flex-row w-full justify-between">
      <section
        id="sectionOne"
        className="w-1/2 h-[100vh] flex justify-center items-center bg-blue-600"
      >
        
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
                    Sign up
                  </span>
                </div>
            </div>
            <div className="flex w-full justify-between my-6">
              <input
                type="text"
                className="w-[45%] border-2 rounded-md border-gray-400 py-2 px-4 outline-none"
                placeholder="Firstname *"
              />
              <input
                type="text"
                className="w-[45%] border-2 rounded-md border-gray-400 py-2 px-4 outline-none"
                placeholder="Lastname *"
              />
            </div>
            <div className="flex w-full justify-center mt-4 mb-6">
              <input
                type="email"
                className="w-full border-2 rounded-md border-gray-400 py-2 px-4 outline-none"
                placeholder="Email *"
              />
            </div>
            <div className="flex w-full justify-center mt-4">
              <input
                type="password"
                className="w-full border-2 rounded-md border-gray-400 py-2 px-4 outline-none"
                placeholder="Password *"
              />
            </div>
            <div className="flex w-full justify-center mt-12 mb-6">
              <button className="w-full bg-[#0066F7] text-center uppercase text-white font-medium py-1 rounded">sign up</button>
            </div>
            <div className="flex w-full justify-end my-6">
              <p className="text-[#0066F7] text-sm text-right">
                  Already have an account <Link to="/" className="text-[#0066F7]">Sign in</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  </>
  )
}

export default SignUp