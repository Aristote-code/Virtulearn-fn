import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logUser from "../../utils/logUser";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../../../context/AuthContext";
import Loading from "react-loading";

type loginInputs = {
  email: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [error, setError] = useState(false);
  const { register, handleSubmit } = useForm<loginInputs>();
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(formData: loginInputs) {
    setIsLoading(true);
    try {
      const user = await logUser(formData);
      login({ user, token: user.token });
      navigate("/");
    } catch (error) {
      setError(true);
      toast.error("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <article className="px-16 md:px-7 sm:px-3 h-[90vh] flex justify-between gap-8">
      <section className="w-1/2 h-full flex flex-col justify-center items-center gap-6">
        <p className="font-bold font-serif italic text-4xl">Welcome Back</p>
        <p>Welcome back! Please enter your details</p>
        <form
          className="w-4/6 flex flex-col gap-5"
          onSubmit={handleSubmit(handleLogin)}
        >
          <label className="flex flex-col gap-1 w-full">
            Email
            <input
              className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
          </label>
          <label className="flex flex-col gap-1">
            Password
            <input
              className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
          </label>
          {error && (
            <p className="text-sm text-bergeD">Invalid UserName or Password</p>
          )}

          <Link className="self-end -mt-2" to="forgot">
            Forgot Password?
          </Link>
          <button className="bg-bergeL text-black font-bold text-xl py-1 rounded-2xl grid place-content-center">
            {isLoading ? (
              <Loading type="spin" color="#191919" width={30} height={30} />
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p>
          don't have an account?{" "}
          <Link to="/signup" className="font-bold text-lg">
            Sign up for free
          </Link>
        </p>
      </section>
      <section className="w-1/2 h-full">
        <img className="w-full h-full object-cover" src="/loginn.png" alt="" />
      </section>
    </article>
  );
}
