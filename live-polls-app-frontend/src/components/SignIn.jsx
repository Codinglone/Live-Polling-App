import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

const SignIn = ({ handleSelectPoll }) => {
  const [pollCode, setPollCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlePollAnswer = (e) => {
    e.preventDefault();
    handleSelectPoll(pollCode);
    setTimeout(() => {
      navigate("/anonymous");
    }, 1500);
  };

  const baseUrl = "http://localhost:8080";

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .get(`${baseUrl}/user`)
      .then(function (response) {
        console.log(response);
        const users = response.data;

        if (users.length >= 1) {
          const foundUser = users.find(
            (user) =>
              user.email === email &&
              user.password === password &&
              user.role === "user"
          );

          if (foundUser) {
            localStorage.setItem("user", email);
            localStorage.setItem("role", "user");
            navigate("/user");
          } else {
            const foundAdmin = users.find(
              (user) =>
                user.email === email &&
                user.password === password &&
                user.role === "admin"
            );

            if (foundAdmin) {
              localStorage.setItem("user", email);
              localStorage.setItem("role", "admin");
              navigate("/admin");
            } else {
              enqueueSnackbar("Invalid email or password", {
                variant: "error",
              });
            }
          }
        } else {
          enqueueSnackbar("No users found", {
            variant: "error",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
        enqueueSnackbar(error.message, {
          variant: "error",
        });
      });
  };

  return (
    <>
      <main className="flex flex-row w-full justify-between">
        <section
          id="sectionOne"
          className="w-1/2 h-[100vh] flex justify-center items-center bg-[#0066F7]"
        >
          <div className="flex justify-center">
            <form onSubmit={(e) => handlePollAnswer(e)}>
              <div className="flex w-full justify-between bg-white rounded-full pl-28 pr-2 py-[4px]">
                <input
                  type="text"
                  className="w-[70%] text-left outline-none"
                  placeholder="Enter the code"
                  onInput={(e) => setPollCode(e.target.value)}
                />
                <button
                  type="submit"
                  className="w-[16%] bg-[#0066F7] h-10 rounded-full"
                ></button>
              </div>
            </form>
          </div>
        </section>
        <section
          id="sectionTwo"
          className="w-1/2 h-[100vh] flex justify-center items-center bg-white"
        >
          <div className="w-full px-8">
            <form onSubmit={(e) => handleLogin(e)} className="flex flex-col w-full">
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
                  onInput={(e) => setEmail(e.target.value)}
                  placeholder="Email *"
                  required
                />
              </div>
              <div className="flex w-full justify-center my-2">
                <input
                  type="password"
                  onInput={(e) => setPassword(e.target.value)}
                  className="w-full border-2 rounded-md border-gray-400 py-2 px-4 outline-none"
                  placeholder="Password *"
                  required
                />
              </div>
              <div className="flex w-full justify-center my-6">
                <button
                  type="submit"
                  className="w-full bg-[#0066F7] text-center uppercase text-white font-medium py-1 rounded"
                >
                  signin
                </button>
              </div>
              <div className="flex w-full justify-end my-6">
                <p className="text-[#0066F7] text-sm text-right">
                  Don't have an account{" "}
                  <Link to="/signup" className="text-[#0066F7]">
                    Sign up
                  </Link>
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

