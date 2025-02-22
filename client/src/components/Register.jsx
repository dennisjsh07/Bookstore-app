import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [message, setMessage] = useState("");
  const {registerUser} = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const googleSignInHandler = () => {};

  // register user...
  const onSubmit = async (data) =>{
    console.log(data);
    try {
      await registerUser(data.email, data.password);
      alert("user registration successful");
    } catch (error) {
      setMessage("please provide a valid email and password");
      console.log(error.message);
    }
  } 

  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto border">
        <h2 className="text-xl font-semibold mb-4">Please Register</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:shadow"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:shadow"
            />
          </div>

          {message && (
            <p className="text-xs text-red-500 italic mb-3 mt-2">{message}</p>
          )}

          <div className="mb-3 mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white rounded font-bold px-8 py-2">
              Register
            </button>
          </div>

          <p className="font-medium text-sm">
            Haven&apos;t an account? Please{" "}
            <Link to="/login" className="text-blue-500 hover:text-blue-700">
              Login
            </Link>
          </p>

          {/*google signin */}
          <div>
            <button
              onClick={googleSignInHandler}
              className="flex justify-center items-center gap-2 bg-secondary hover:bg-blue-500 rounded py-2 mt-4 text-white w-full"
            >
              <FcGoogle />
              Sign in with Google
            </button>
          </div>

          <p className="mt-5 text-center text-gray-500 text-xs">
            ©2025 Book Store. All rights reserved.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
