import React, { useState } from "react";
import Button from "./button";


const LoginCard = () => {
  // State to store email and password
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Submitted data:", formData);
  };


  return (
    <div className="w-[70%] mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="email" className="text-sm font-bold">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="mb-4 p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="password" className="text-sm font-bold">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="mb-4 p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* <button
          type="submit"
          className="p-3 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button> */}
        <Button type="submit" className="auth expert" onClick="handleSubmit">Submit</Button>
      </form>
    </div>
  );
};

export default LoginCard;
