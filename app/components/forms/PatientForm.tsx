"use client";
import React, { useState } from "react";

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };
  return (
    <div>
      <h2 className="py-4 text-6xl font-black">Hi there, ....</h2>
      <p className="text-gray-300 pb-20">Get started with appointments</p>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className=" flex flex-col">
            <label htmlFor="name" className="text-gray-300 py-1">Full name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border dark:border-gray-400 bg-zinc-900 rounded-md py-1 border-black"
              required
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="email" className="text-gray-300 py-1">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border dark:border-gray-400 bg-zinc-900 rounded-md py-1 border-black"
              required
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="text" className="text-gray-300 py-1">Phone number</label>
            <input
              type="text"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              className="border dark:border-gray-400 bg-zinc-900 rounded-md py-2 border-black"
            />
          </div>
          <button type="submit" className="bg-blue-500 rounded-md py-2">Get Started</button>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;
