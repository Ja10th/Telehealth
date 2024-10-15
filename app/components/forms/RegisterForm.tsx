"use client";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Doctors } from "@/constants";
import Image from "next/image";

const RegisterForm = ({ user }: { user: User }) => {
  const [values, setValues] = useState<String>(" ");
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2 className="py-4 text-6xl font-black">Welcome 👋 </h2>
      <p className="text-gray-300 pb-10">Let us know more about you</p>
      <div>
        <h3 className="text-gray-300 text-4xl font-bold pb-10">
          Personal Information
        </h3>
        <form className="flex flex-col gap-5">
          <div className=" flex flex-col">
            <label htmlFor="name" className="text-gray-300 py-1 pl-2">
              Full name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="border dark:border-gray-400 bg-zinc-900 rounded-md py-1 pl-2 border-black"
              required
            />
          </div>
          <div className="flex justify-between w-full">
            <div className=" flex flex-col">
              <label htmlFor="email" className="text-gray-300 py-1 pl-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="user@telehealth.com"
                className="border dark:border-gray-400 w-[330px] bg-zinc-900 pl-2 rounded-md py-1 border-black"
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
                international
                countryCallingCodeEditable
                onChange={() => handleChange}
                className="border dark:border-gray-400 w-[330px] bg-zinc-900 pl-2 rounded-md py-1 border-black"
              />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className=" flex flex-col">
              <label htmlFor="email" className="text-gray-300 py-1 pl-2">
                Date of Birth
              </label>
              <input
                type="date"
                id="email"
                name="email"
                className="border dark:border-gray-400 w-[330px] placeholder:text-gray-300 bg-zinc-900 pl-2 pr-2 rounded-md py-1 border-black"
                required
              />
            </div>
            <div className="flex flex-col pl-2">
              <label className="text-gray-300 pl-2 py-1">Gender</label>
              <ul className="list-disc flex justify-between">
                <li className="flex items-center space-x-2 border border-dashed p-1 px-4 rounded-xl mx-2">
                  <input type="radio" id="male" name="gender" value="male" />
                  <label htmlFor="male" className="text-gray-300 pr-2">
                    Male
                  </label>
                </li>
                <li className="flex items-center space-x-2 border border-dashed p-1 px-2 rounded-xl mx-2">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                  />
                  <label htmlFor="female" className="text-gray-300 pr-2">
                    Female
                  </label>
                </li>
                <li className="flex items-center space-x-2 border border-dashed p-1 px-4 rounded-xl mx-2">
                  <input type="radio" id="other" name="gender" value="other" />
                  <label htmlFor="other" className="text-gray-300">
                    Other
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between">
            <div className=" flex flex-col">
              <label htmlFor="name" className="text-gray-300 py-1 pl-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="ex: 14 Street, New York. 5101"
                className="border dark:border-gray-400 w-[330px] bg-zinc-900 rounded-md py-1 pl-2 border-black"
                required
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="name" className="text-gray-300 py-1 pl-2">
                Occupation
              </label>
              <input
                type="text"
                id="occupation"
                name="occupation"
                placeholder="Teacher"
                className="border dark:border-gray-400 w-[330px] bg-zinc-900 rounded-md py-1 pl-2 border-black"
                required
              />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className=" flex flex-col">
              <label htmlFor="email" className="text-gray-300 py-1 pl-2">
                Emergency Contact Name
              </label>
              <input
                type="text"
                id="emergencyContactName"
                name="emergencyContactName"
                placeholder="Guardian's name"
                className="border dark:border-gray-400 w-[330px] bg-zinc-900 pl-2 rounded-md py-1 border-black"
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
                international
                countryCallingCodeEditable
                onChange={() => handleChange}
                className="border dark:border-gray-400 w-[330px] bg-zinc-900 pl-2 rounded-md py-1 border-black"
              />
            </div>
          </div>
          <h3 className="text-gray-300 text-4xl font-bold pt-10 pb-5">
            Medical Information
          </h3>
          <div className="flex flex-col">
            <label
              htmlFor="primaryPhysician"
              className="text-gray-300 py-1 pl-2"
            >
              Primary Physician
            </label>
            <select
              id="primaryPhysician"
              name="primaryPhysician"
              className="border dark:border-gray-400 bg-zinc-900 pl-1 pr-2 rounded-md py-1 border-black"
              defaultValue="" // To show default placeholder
            >
              <option value="" disabled className="pr-2">
                Select a Physician
              </option>
              {Doctors.map((doctor) => (
                <option
                  key={doctor.name}
                  value={doctor.name}
                  className="flex pr-2"
                >
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between w-full">
            <div className=" flex flex-col">
              <label htmlFor="email" className="text-gray-300 py-1 pl-2">
                Insurance Provider
              </label>
              <input
                type="text"
                id="insuranceProvider"
                name="insuranceProvider"
                placeholder="ex: Blue Cross"
                className="border dark:border-gray-400 w-[330px] bg-zinc-900 pl-2 rounded-md py-1 border-black"
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="email" className="text-gray-300 py-1 pl-2">
                Insurance Policy Number
              </label>
              <input
                type="text"
                id="insurancePolicyNumber"
                name="insurancePolicyNumber"
                placeholder="ex: ABC1234567"
                className="border dark:border-gray-400 w-[330px] bg-zinc-900 pl-2 rounded-md py-1 border-black"
              />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className=" flex flex-col">
              <label htmlFor="email" className="text-gray-300 py-1 pl-2">
                Allergies (if any)
              </label>
              <input
                type="text"
                id="allergies"
                name="allergies"
                placeholder="ex: Peanuts, Penicillin, Pollen"
                className="border dark:border-gray-400 w-[330px] bg-zinc-900 pl-2 h-20 rounded-md border-black align-text-top"
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="email" className="text-gray-300 py-1 pl-2">
                Current Medications
              </label>
              <input
                type="text"
                id="currentMedications"
                name="currentMedications"
                placeholder="ex: Ibuprofen 200mg, Levothyroxine 50mcg"
                className="border dark:border-gray-400 w-[330px] bg-zinc-900 pl-2 h-20 rounded-md  border-black align-text-top"
              />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className=" flex flex-col">
              <label htmlFor="email" className="text-gray-300 py-1 pl-2">
              Family medical history (if relevant)
              </label>
              <input
                type="text"
                id="familyMedicalHistory"
                name="familyMedicalHistory"
                placeholder="ex: Mother had breast cancer"
                className="border dark:border-gray-400 w-[330px] bg-zinc-900 pl-2 h-20 rounded-md border-black align-text-top"
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="email" className="text-gray-300 py-1 pl-2">
              Past medical history
              </label>
              <input
                type="text"
                id="pastMedicalHistory"
                name="pastMedicalHistory"
                placeholder="ex: Asthma diagnosis in childhood"
                className="border dark:border-gray-400 w-[330px] bg-zinc-900 pl-2 h-20 rounded-md  border-black align-text-top"
              />
            </div>
          </div>
          <h3 className="text-gray-300 text-4xl font-bold pt-10 pb-5">
            Identification and Verification
          </h3>

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

export default RegisterForm;
