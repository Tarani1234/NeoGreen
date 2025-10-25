"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa"; 

const Login = () => {
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const url = isRegister
        ? "https://neogreen-backend.onrender.com/api/admin/register"
        : "https://neogreen-backend.onrender.com/api/admin/login";

      const res = await axios.post(url, { username, password });

      if (isRegister) {
        setSuccess("Registration successful! You can now login.");
        setUsername("");
        setPassword("");
        setIsRegister(false);
      } else {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          router.push("/dashboard");
        } else {
          setError("Login failed: token missing");
        }
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError((err.response?.data as { message?: string })?.message || "Action failed");
      } else {
        setError("Action failed");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md transition-all duration-500"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          {isRegister ? "Create Account" : "Admin Login"}
        </h2>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        {success && <p className="text-green-500 mb-4 text-center">{success}</p>}

        {/* Username Input */}
        <div className="relative mb-6">
          <FaUser className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Input */}
        <div className="relative mb-8">
          <FaLock className="absolute top-3 left-3 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full p-3 rounded-lg text-white font-semibold ${
            isRegister ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
          } transition duration-300`}
        >
          {isRegister ? "Register" : "Login"}
        </button>

        {/* Toggle Form */}
        <p className="mt-6 text-center text-sm text-gray-600">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            className="text-blue-500 font-semibold underline ml-1"
            onClick={() => {
              setIsRegister(!isRegister);
              setError("");
              setSuccess("");
            }}
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login

