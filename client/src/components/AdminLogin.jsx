/* eslint-disable no-undef */
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Base_URL } from "../utils/Constants";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const response = await axios.post(`${Base_URL}/admin/adminLogin`, data, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      // console.log(response.data);
      const auth = response.data;
      if(auth.token){
        localStorage.setItem("adminAuth", JSON.stringify(auth.token));
        setTimeout(()=>{
          localStorage.removeItem("adminAuth");
          alert("session expired please login again");
          navigate("/")
        }, 3600 * 1000)
      }
      alert("Admin Login successful");
      navigate("/dashboard");
    } catch (error) {
      setMessage("please provide a valid username and password");
      console.log(error.message);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto border">
        <h2 className="text-xl font-semibold mb-4">Admin Dashboard Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="userName"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Username
            </label>
            <input
              {...register("userName", { required: true })}
              type="text"
              name="userName"
              id="userName"
              placeholder="Username"
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
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}
          <div className="mb-3 mt-4">
            <button className="bg-blue-500 w-full hover:bg-blue-700 text-white rounded font-bold px-8 py-2">
              Login
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

export default AdminLogin;
