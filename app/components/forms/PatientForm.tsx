"use client";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
  number: string;
}
const PatientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<User>({
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

   const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    { name, email, number } : User
  ) => {
    e.preventDefault();
    setIsLoading(true);
    try {
    //   const userData = { name, email, number };

    //   const user = await createUser(userData)

    //   if(user) router.push(`/patients/$(user.$id}/register`)
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <div>
      <h2 className="py-4 text-6xl font-black">Hi there, ....</h2>
      <p className="text-gray-300 pb-20">Get started with appointments</p>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className=" flex flex-col">
            <label htmlFor="name" className="text-gray-300 py-1 pl-2">
              Full name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="border dark:border-gray-400 bg-zinc-900 rounded-md py-1 pl-2 border-black"
              required
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="email" className="text-gray-300 py-1 pl-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="user@telehealth.com"
              className="border dark:border-gray-400 bg-zinc-900 pl-2 rounded-md py-1 border-black"
              required
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="text" className="text-gray-300 pl-2 py-1">
              Phone number
            </label>
            <PhoneInput
              defaultCountry="US"
              placeholder="(234) 123 2345"
              value={formData.number}
              international
              countryCallingCodeEditable
              className="border dark:border-gray-400 bg-zinc-900 pl-2 rounded-md py-1 border-black"
              onChange={() => handleChange}
            />
          </div>
          <button type="submit" className="bg-blue-500 rounded-md py-2">
            {isLoading ? (
              <div>
                <span>Loading...</span>
              </div>
            ) : (
              <span>Get Started</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;
