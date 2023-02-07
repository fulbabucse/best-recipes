import React from "react";
import loginImage from "../../assets/login.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../features/auth/authSlice";
const SignUp = () => {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { error } = useSelector((state) => state.auth);

  const handleSignUp = (data) => {
    dispatch(createUser({ email: data.email, password: data.password }));
  };

  let setError;

  if (error === "Firebase: Error (auth/email-already-in-use).") {
    setError = "This Email already exists !!";
  } else if (
    error ===
    "Firebase: Password should be at least 6 characters (auth/weak-password)."
  ) {
    setError = "Password should be at least 6 characters";
  }

  return (
    <div className="my-6 lg:my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        <div className="">
          <img src={loginImage} alt="Sign Up Logo" />
        </div>
        <div className="w-full lg:w-4/5 mx-auto">
          <div className="text-primaryColor text-center mb-4">
            <h1 className="text-xl lg:text-4xl font-semibold uppercase">
              Sign Up
            </h1>
            <p className="font-medium">Create a new Account</p>
          </div>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-6">
            <div className="grid md:grid-cols-2 md:gap-4 space-y-4 lg:space-y-0">
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  id="firstName"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primaryColor focus:outline-none focus:ring-0 focus:border-primaryColor peer"
                  placeholder=" "
                />
                <label
                  htmlFor="firstName"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primaryColor peer-focus:dark:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
                {errors.firstName && (
                  <p className="text-red-400 text-sm font-medium">
                    {errors.firstName?.message}
                  </p>
                )}
              </div>
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  {...register("lastName")}
                  id="lastName"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primaryColor focus:outline-none focus:ring-0 focus:border-primaryColor peer"
                  placeholder=" "
                />
                <label
                  htmlFor="lastName"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primaryColor peer-focus:dark:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name (optional)
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full group">
              <input
                type="email"
                {...register("email", {
                  required: "Email address is required",
                })}
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primaryColor focus:outline-none focus:ring-0 focus:border-primaryColor peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primaryColor peer-focus:dark:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
              {errors.email && (
                <p className="text-red-400 text-sm font-medium">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="grid md:grid-cols-1 md:gap-4 space-y-4 lg:space-y-0">
              <div className="relative z-0 w-full group">
                <input
                  type="password"
                  {...register("password", {
                    required: "Password field are required",
                    minLength: {
                      value: 6,
                      message: "Password length should be 6 character",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message: `At least 1 special character, 1 uppercase letter, and Number character make the password stronger`,
                    },
                  })}
                  id="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primaryColor focus:outline-none focus:ring-0 focus:border-primaryColor peer"
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primaryColor peer-focus:dark:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
                {errors.password && (
                  <p className="text-red-400 text-sm font-medium">
                    {errors.password?.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image
              </label>
              <input
                type="file"
                id="image"
                {...register("image", { required: "Image is required" })}
                accept="image/*"
              />
              {errors.image && (
                <p className="text-red-400 font-semibold text-sm">
                  {errors?.image?.message}
                </p>
              )}
            </div>

            <p className="text-sm text-red-500 text-center">{setError}</p>

            <button
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-4 py-3 bg-purple-500 text-white font-medium text-lg leading-tight rounded-md shadow-md  hover:shadow-2xl focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-colors duration-200 ease-in-out"
            >
              Sign Up
            </button>
          </form>
          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0 text-gray-700">
              OR
            </p>
          </div>
          <p className="text-md font-semibold text-gray-700 mt-3 text-center">
            Already have an account?
            <Link
              to="/sign-in"
              className="text-primaryColor hover:text-primaryColor focus:text-primaryColor transition duration-200 ease-in-out ml-1"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
