import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { enqueueSnackbar } from 'notistack';
import emailjs from '@emailjs/browser';

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const sendWelcomeEmail = (toEmail, userName) => {
    const serviceId = "service_slo5elm";
    const templateId = "template_bnck06t";
    const userId = "iq4REmtTF6WMMDFvW";
  
    emailjs.send(serviceId, templateId, {
      to_email: toEmail,
      user_name: userName,
      message: "Welcome to the Live Polls App",
    }, userId)
    .then((response) => {
      console.log("Email sent successfully:", response);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
  };
  const baseUrl = "http://localhost:8080"

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${baseUrl}/user/add`, {
      firstname: firstName,
      lastname: lastName,
      email: emailAddress,
      password,
    })
    .then(function (response) {
      setFirstName("");
      setLastName("");
      setEmailAddress("");
      setPassword("");
      console.log(response);
      setResponse(response.data);
      sendWelcomeEmail(emailAddress, `${firstName} ${lastName}`);
      enqueueSnackbar(response.data, { 
        variant: 'success'});
        navigate("/");

    })
    .catch(function (err) {
      console.error(err);
      setError(err?.response?.data);
      enqueueSnackbar(err.message, { 
        variant: 'error'})
    });
  }

  return (
    <>
    <main className="flex flex-row w-full justify-between">
      <section
        id="sectionOne"
        className="w-1/2 h-[100vh] flex justify-center items-center bg-[#0066F7]"
      >
        
      </section>
      <section
        id="sectionTwo"
        className="w-1/2 h-[100vh] flex justify-center items-center bg-white"
      >
        <div className="w-full px-8">
          <form className="flex flex-col w-full" onSubmit={(e) => handleSubmit(e)}>
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
                placeholder="Firstname *" value={firstName} onInput={(e) => setFirstName(e.target.value)} required
              />
              <input
                type="text"
                className="w-[45%] border-2 rounded-md border-gray-400 py-2 px-4 outline-none"
                placeholder="Lastname *" value={lastName} onInput={(e) => setLastName(e.target.value)} required
              />
            </div>
            <div className="flex w-full justify-center mt-4 mb-6">
              <input
                type="email"
                className="w-full border-2 rounded-md border-gray-400 py-2 px-4 outline-none"
                placeholder="Email *" value={emailAddress} onInput={(e) => setEmailAddress(e.target.value)} required
              />
            </div>
            <div className="flex w-full justify-center mt-4">
              <input
                type="password"
                className="w-full border-2 rounded-md border-gray-400 py-2 px-4 outline-none"
                placeholder="Password *" value={password} onInput={(e) => setPassword(e.target.value)} required
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