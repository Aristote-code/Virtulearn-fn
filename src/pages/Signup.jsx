/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import LoginImg from "../assets/LoginImg";
import LogoIcon from "../assets/LogoIcon";
import { Link, redirect, useNavigate } from "react-router-dom";
import LoadingSpinner from "../assets/LoadingSpinner";

export function loader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    throw redirect("/feeds");
  }
  return null;
}

export default function Signup() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  function handleFormChange(e) {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSignup(e) {
    e.preventDefault();
    if (!userInfo.email || !userInfo.password || !userInfo.username) {
      setFormError(true);
    } else {
      setIsLoading(true);
      const formData = new URLSearchParams();
      for (const [key, value] of Object.entries(userInfo)) {
        formData.append(key, value);
      }
      const response = await fetch("https://mind-wave.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });
      setIsLoading(false);
      if (response.status === 201) return navigate("/login");
      else {
        setIsLoading(false);
        setIsError(true);
      }
    }
  }

  return (
    <article className="flex max-h-[85vh] text-dark-200 rounded-2xl overflow-hidden w-3/5 mx-auto mb-20 mt-4">
      <section className="w-1/2 md:w-full bg-light-200 flex flex-col gap-8 py-4 justify-around items-center">
        <div className="flex items-center gap-4">
          <LogoIcon classes="w-16 md:w-12" />
          <p className="font-serif font-bold text-3xl md:text-2xl">Mind Wave</p>
        </div>
        <p className="font-bold text-5xl md:text-4xl">Join Now</p>
        <form className="flex flex-col w-4/5 gap-6 md:w-4/5">
          {isError && (
            <p className="text-center text-red-700">
              Sorry!! Username already taken
            </p>
          )}
          {formError && (
            <p className="text-center text-red-700">Required Input Missing</p>
          )}
          <input
            className="bg-transparent border-2 border-dark-200 rounded-xl px-4 py-2 w-full"
            type="email"
            placeholder="Email"
            name="email"
            onChange={(event) => handleFormChange(event)}
            value={userInfo.email}
          />
          <input
            className="bg-transparent border-2 border-dark-200 rounded-xl px-4 py-2 w-full"
            type="text"
            placeholder="Username"
            value={userInfo.username}
            name="username"
            onChange={(event) => handleFormChange(event)}
          />
          <input
            className="bg-transparent border-2 border-dark-200 rounded-xl px-4 py-2 w-full"
            type="password"
            placeholder="Password"
            name="password"
            value={userInfo.password}
            onChange={(event) => handleFormChange(event)}
          />
          <button
            className="bg-dark-200 text-light-200 mx-auto font-bold text-xl border-2 border-dark-200 rounded-xl px-4 py-2 w-full grid place-content-center"
            onClick={handleSignup}
          >
            {isLoading ? <LoadingSpinner /> : "Sign Up"}
          </button>
        </form>
        <p>
          {`
          Already have an Account? 
        `}
          <Link to="/login" className="font-bold underline">
            Log In
          </Link>
        </p>
      </section>
      <section className="w-1/2 bg-dark-100 md:hidden">
        <LoginImg classes="h-full w-full object-contain" />
      </section>
    </article>
  );
}
