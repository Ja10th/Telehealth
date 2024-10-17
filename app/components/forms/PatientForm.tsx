  "use client";
  import React, { useState } from "react";
  import "react-phone-number-input/style.css";
  import PhoneInput from "react-phone-number-input";
  import { useRouter } from "next/navigation";
  import { createUser } from "@/lib/actions/patient.action";

  interface User {
    name: string;
    email: string;
    phone: string;
  }
  const PatientForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<User>({
      name: "",
      email: "",
      phone: "",
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // Prevent default form submission
    
      const { name, email, phone } = formData; // Destructure from formData
      setIsLoading(true);
    
      try {
        const userData = { name, email, phone };
    
        const user = await createUser(userData);
        console.log("Created user: ", user); // Check the response
    
        if (user && user.$id) {
          router.push(`/patients/${user.$id}/register`);
        }
      } catch (error) {
        console.log("Error", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    return (
      <div>
        <h2 className="py-4 text-6xl font-black">Hi there 😃</h2>
        <p className="text-gray-500 pb-20">Get started with appointments</p>
        <div>
          <form
          onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className=" flex flex-col">
              <label htmlFor="name" className="text-gray-500 py-1 pl-2">
                Full name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="border dark:border-gray-200 bg-gray-100 rounded-md py-3 pl-2 border-black"
                required
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="email" className="text-gray-500 py-1 pl-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="user@telehealth.com"
                className="border dark:border-gray-200 bg-gray-100 pl-2 rounded-md py-3 "
                required
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="text" className="text-gray-500 pl-2 py-1">
                Phone number
              </label>
              <PhoneInput
                defaultCountry="US"
                placeholder="(234) 123 2345"
                value={formData.phone}
                international
                countryCallingCodeEditable
                className="border dark:border-gray-200 bg-gray-100 pl-2 rounded-md py-3 "
                onChange={(value) =>
                  setFormData({ ...formData, phone: value || "" })
                }
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded-md py-2">
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
