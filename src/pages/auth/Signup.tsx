import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { formInputs } from "../../interfaces";
import createUser from "../../utils/createUser";
import { useState } from "react";
import toast from "react-hot-toast";
import uploadImage from "../../utils/uploadImg";
import LoadingSpinner from "../../components/Loading";

export default function Signup() {
  const navigate = useNavigate();
  const [image, setImage] = useState<File | null>(null);
  const [imgError, setImgError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formInputs>();

  const passwordValue = watch("password");

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      // Check if size is greater than 3MB
      if (file.size > 3500000) {
        alert("Image size must not exceed 3MB");
        e.target.value = "";
        return;
      }
      setImage(file);
    } else {
      setImage(null);
    }
  }

  async function onsubmitForm(data: formInputs) {
    if (!image) {
      setImgError(true);
      return;
    }
    setIsLoading(true);
    try {
      const profilePicture = await uploadImage(image);

      await createUser({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phoneNumber,
        password: data.password,
        confirmPassword: data.confirmPwd,
        profilePicture,
        isMentor: data.role === "mentor",
      });
      toast.success("Sign up successful! Please log in.");
      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <article className="px-16 md:px-7 sm:px-3 h-[90vh] flex justify-between gap-8">
      <section className="w-1/2 h-full flex flex-col justify-center items-center gap-6">
        <p className="font-bold font-serif italic text-4xl">Welcome to focus</p>
        <p>Register your account</p>
        <form
          className="w-full flex flex-col gap-5"
          onSubmit={handleSubmit(onsubmitForm)}
          encType="multipart/form-data"
        >
          <div className="flex justify-between gap-4">
            <label className="flex flex-col gap-1 w-full">
              Firstname
              <input
                className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
                type="text"
                placeholder="Enter your Firstname"
                {...register("firstName")}
              />
            </label>
            <label className="flex flex-col gap-1 w-full">
              Lastname
              <input
                className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
                type="text"
                placeholder="Enter your Lastname"
                {...register("lastName")}
              />
            </label>
          </div>
          <div className="flex justify-between gap-4">
            <label className="flex flex-col gap-1 w-1/2">
              Email
              <input
                className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
                type="email"
                placeholder="Enter your email"
                {...register("email")}
              />
            </label>
            <label className="flex flex-col gap-1 w-1/2">
              Phone number
              <input
                className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
                type="number"
                placeholder="Enter your phone number"
                {...register("phoneNumber")}
              />
            </label>
          </div>

          <div className="flex justify-between gap-4">
            <label className="flex flex-col gap-1 w-1/2">
              Role
              <select
                className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
                {...register("role")}
              >
                <option className="text-black bg-white py-2" value="">
                  Choose role
                </option>
                <option className="text-black bg-white py-2" value="mentor">
                  Mentor
                </option>
                <option className="text-black bg-white py-2" value="student">
                  Student
                </option>
              </select>
            </label>
            <label htmlFor="pfp" className="flex flex-col gap-1 w-1/2">
              Profile Picture
              <input
                className="bg-greenL/0 border border-white rounded-lg px-4 py- outline-none"
                type="file"
                id="pfp"
                accept="image/*"
                size={2097152}
                onChange={(e) => handleImageChange(e)}
              />
              {imgError && <p className="text-bergeD">Image is required</p>}
            </label>
          </div>
          <div className="flex justify-between gap-4">
            <label className="flex flex-col gap-1 w-full">
              Password
              <input
                className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
                type="password"
                placeholder="Enter your password"
                {...register("password")}
              />
            </label>
            <label className="flex flex-col gap-1 w-full">
              Confirm password
              <input
                className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
                type="password"
                placeholder="Confirm"
                {...register("confirmPwd", {
                  validate: {
                    passwordsMatch: (confirmPwd) =>
                      confirmPwd === passwordValue,
                  },
                })}
              />
              {errors.confirmPwd?.type === "passwordsMatch" && (
                <span>Passwords must match</span>
              )}
            </label>
          </div>

          <button
            type="submit"
            className="bg-bergeL text-black font-bold text-xl py-1 rounded-2xl grid place-content-center"
          >
            {isLoading ? <LoadingSpinner /> : "Sign up"}
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-lg">
            Log in
          </Link>
        </p>
      </section>
      <section className="w-1/2 h-full">
        <img className="w-full h-full object-cover" src="/loginn.png" alt="" />
      </section>
    </article>
  );
}
