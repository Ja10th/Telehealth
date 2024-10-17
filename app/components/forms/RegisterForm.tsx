"use client";
import React, { useState, useEffect } from "react"; // Import useEffect for fetching from local storage
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Doctors, IdentificationTypes } from "@/constants";
import Image from "next/image";

const RegisterForm = ({ user }: { user: User }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    gender: "Male" as Gender,
    address: "",
    occupation: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    primaryPhysician: "",
    insuranceProvider: "",
    insurancePolicyNumber: "",
    allergies: "",
    currentMedications: "",
    familyMedicalHistory: "",
    pastMedicalHistory: "",
    identificationType: "Birth Certificate",
    identificationNumber: "",
    identificationDocument: [],
    treatmentConsent: false,
    disclosureConsent: false,
    privacyConsent: false,
    photo: []
  });
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [consent, setConsent] = useState({
    treatment: false,
    useDisclosure: false,
    privacyPolicy: false,
  });

  // Load saved data from local storage when component mounts
  useEffect(() => {
    const savedValues = localStorage.getItem("registerForm");
    if (savedValues) {
      setValues(JSON.parse(savedValues));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handlePrivacyChange = (e: { target: { name: any; checked: any; }; }) => {
    const { name, checked } = e.target;
    setConsent((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handlePhoneChange = (value: string | undefined) => {
    setValues({
      ...values,
      phone: value || "",
    });
  };

  const handleSubmit = (values: PatientFormValidation) => {
    setIsLoading(true);
    // Save form data to local storage
    localStorage.setItem("registerForm", JSON.stringify(values));

    let formData;
    if (values.identificationDocument && values.identificationDocument.length > 0){
        const blobFile = new Blob([values.identificationDocument[0]], {
          type: values.identificationDocument[0].type,
        })

        formData = new FormData();
        formData.append('blobfile', blobFile)
        formData.append('fileName', values.identificationDocument[0].name);

    }

    console.log("Submitting values:", values);

    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Form submitted successfully!");
    }, 2000);
  };

  const nextPage = () => setPage((prev) => (prev < 3 ? prev + 1 : prev));
  const prevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div>
      <h2 className="py-4 text-6xl font-black">Welcome 👋 </h2>
      <p className="text-gray-500 pl-2 pb-10">Let us know more about you</p>
      <form onSubmit={handleSubmit}>
        {/* Page 1: Personal Information */}
        {page === 1 && (
          <>
            <h3 className="text-gray-700 text-4xl font-bold pb-10">
              Personal Information
            </h3>
            <div className=" flex flex-col">
              <label htmlFor="name" className="text-gray-500 py-1 pl-2">
                Full name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name} // Set value from state
                onChange={handleChange} // Add onChange handler
                placeholder="John Doe"
                className="border dark:border-gray-200 bg-gray-100 rounded-md py-3 pl-2 border-black"
                required
              />
            </div>
            <div className="flex justify-between w-full py-2">
              <div className=" flex flex-col">
                <label htmlFor="email" className="text-gray-500 py-1 pl-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email} // Set value from state
                  onChange={handleChange} // Add onChange handler
                  placeholder="user@telehealth.com"
                  className="border dark:border-gray-200 w-[330px] bg-gray-100 pl-2 rounded-md py-3 border-black"
                  required
                />
              </div>
              <div className=" flex flex-col">
                <label htmlFor="phone" className="text-gray-500 pl-2 py-1">
                  Phone number
                </label>
                <PhoneInput
                  defaultCountry="US"
                  placeholder="(234) 123 2345"
                  international
                  countryCallingCodeEditable
                  value={values.phone} // Set value from state
                  onChange={handlePhoneChange} // Use phone change handler
                  style={{ backgroundColor: "white" }}
                  className="border dark:border-gray-200 w-[330px] bg-gray-100 pl-2 rounded-md py-3 border-black"
                />
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className=" flex flex-col">
                <label
                  htmlFor="dateOfBirth"
                  className="text-gray-500 py-1 pl-2"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="birthDate" // Change ID to match name
                  name="birthDate" // Change name to match state
                  value={values.birthDate} // Set value from state
                  onChange={handleChange} // Add onChange handler
                  className="border dark:border-gray-200 w-[330px] placeholder:text-gray-500 bg-gray-100 pl-2 pr-2 rounded-md py-1 border-black"
                  required
                />
              </div>
              <div className="flex flex-col pl-2">
                <label className="text-gray-500 pl-2 py-1">Gender</label>
                <ul className="list-disc flex justify-between">
                  <li className="flex items-center space-x-2 border border-gray-200 border-dashed p-1 px-4 rounded-xl mx-2">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      onChange={handleChange} // Add onChange handler
                    />
                    <label htmlFor="male" className="text-gray-500 pr-2">
                      Male
                    </label>
                  </li>
                  <li className="flex items-center space-x-2 border border-dashed p-1 px-2 rounded-xl mx-2">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      onChange={handleChange} // Add onChange handler
                    />
                    <label htmlFor="female" className="text-gray-500 pr-2">
                      Female
                    </label>
                  </li>
                  <li className="flex items-center space-x-2 border border-dashed p-1 px-4 rounded-xl mx-2">
                    <input
                      type="radio"
                      id="other"
                      name="gender"
                      value="other"
                      onChange={handleChange} // Add onChange handler
                    />
                    <label htmlFor="other" className="text-gray-500">
                      Other
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between py-2">
              <div className=" flex flex-col">
                <label htmlFor="address" className="text-gray-500 py-1 pl-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={values.address} // Set value from state
                  onChange={handleChange} // Add onChange handler
                  placeholder="ex: 14 Street, New York. 5101"
                  className="border dark:border-gray-200 w-[330px] bg-gray-100 rounded-md py-3 pl-2 border-black"
                  required
                />
              </div>
              <div className=" flex flex-col">
                <label htmlFor="occupation" className="text-gray-500 py-1 pl-2">
                  Occupation
                </label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={values.occupation} // Set value from state
                  onChange={handleChange} // Add onChange handler
                  placeholder="Teacher"
                  className="border dark:border-gray-200 w-[330px] bg-gray-200 rounded-md py-3 pl-2 border-black"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className=" flex flex-col">
                <label
                  htmlFor="emergencyContactName"
                  className="text-gray-500 py-1 pl-2"
                >
                  Emergency Contact Name
                </label>
                <input
                  type="text"
                  id="emergencyContactName"
                  name="emergencyContactName"
                  value={values.emergencyContactName} // Set value from state
                  onChange={handleChange} // Add onChange handler
                  placeholder="Jane Doe"
                  className="border dark:border-gray-200 w-[330px] bg-gray-100 rounded-md py-3 pl-2 border-black"
                  required
                />
              </div>
              <div className=" flex flex-col">
                <label
                  htmlFor="emergencyPhone"
                  className="text-gray-500 py-1 pl-2"
                >
                  Emergency Phone
                </label>
                <PhoneInput
                  defaultCountry="US"
                  placeholder="(234) 123 2345"
                  international
                  countryCallingCodeEditable
                  value={values.phone} // Set value from state
                  onChange={handlePhoneChange} // Use phone change handler
                  style={{ backgroundColor: "white" }}
                  className="border dark:border-gray-200 w-[330px] bg-gray-100 pl-2 rounded-md py-3 border-black"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextPage}
                className="bg-blue-500 text-white py-2 px-4 rounded-md mt-5"
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* Page 2: Medical Information */}
        {page === 2 && (
          <>
            <h3 className="text-gray-700 text-4xl font-bold pb-10">
              Medical Information
            </h3>
            <div className="flex flex-col">
              <label
                htmlFor="primaryPhysician"
                className="text-gray-500 py-1 pl-2"
              >
                Primary Physician
              </label>
              <select
                id="primaryPhysician"
                name="primaryPhysician"
                value={values.primaryPhysician}
                onChange={handleChange}
                className="border dark:border-gray-200 bg-gray-100 pl-1 pr-2 rounded-md py-3 border-black"
                defaultValue="" // To show default gr
              >
                <option value="" disabled className="pr-2 bg-gray-100">
                  Select a Physician
                </option>
                {Doctors.map((doctor) => (
                  <option
                    key={doctor.name}
                    value={doctor.name}
                    className="flex pr-2 bg-gray-100"
                  >
                    {doctor.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-between w-full py-2">
              <div className=" flex flex-col">
                <label
                  htmlFor="insuranceProvider"
                  className="text-gray-500 py-1 pl-2"
                >
                  Insurance Provider
                </label>
                <input
                  type="text"
                  id="insuranceProvider"
                  name="insuranceProvider"
                  value={values.insuranceProvider} // Set value from state
                  onChange={handleChange} // Add onChange handler
                  placeholder="Insurance Inc."
                  className="border dark:border-gray-200 w-[330px] bg-gray-100 pl-2 rounded-md py-3 border-black"
                  required
                />
              </div>
              <div className=" flex flex-col">
                <label
                  htmlFor="insurancePolicyNumber"
                  className="text-gray-500 py-1 pl-2"
                >
                  Insurance Policy Number
                </label>
                <input
                  type="text"
                  id="insurancePolicyNumber"
                  name="insurancePolicyNumber"
                  value={values.insurancePolicyNumber} // Set value from state
                  onChange={handleChange} // Add onChange handler
                  placeholder="123456789"
                  className="border dark:border-gray-200 w-[330px] bg-gray-100 pl-2 rounded-md py-3 border-black"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between w-full py-2">
              <div className=" flex flex-col">
                <label htmlFor="allergies" className="text-gray-500 py-1 pl-2">
                  Allergies
                </label>
                <textarea
                  id="allergies"
                  name="allergies"
                  value={values.allergies} // Set value from state
                  onChange={handleChange} // Add onChange handler
                  placeholder="None"
                  className="border dark:border-gray-200 w-[330px] bg-gray-100 pl-2 rounded-md py-3 border-black"
                  required
                />
              </div>
              <div className=" flex flex-col">
                <label
                  htmlFor="currentMedications"
                  className="text-gray-500 py-1 pl-2"
                >
                  Current Medications
                </label>
                <textarea
                  id="currentMedications"
                  name="currentMedications"
                  value={values.currentMedications} // Set value from state
                  onChange={handleChange} // Add onChange handler
                  placeholder="None"
                  className="border dark:border-gray-200 w-[330px] bg-gray-100 pl-2 rounded-md py-3 border-black"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between w-full py-2">
              <div className=" flex flex-col">
                <label
                  htmlFor="familyMedicalHistory"
                  className="text-gray-500 py-1 pl-2"
                >
                  Family Medical History
                </label>
                <textarea
                  id="familyMedicalHistory"
                  name="familyMedicalHistory"
                  value={values.familyMedicalHistory} // Set value from state
                  onChange={handleChange} // Add onChange handler
                  placeholder="None"
                  className="border dark:border-gray-200 w-[330px] bg-gray-100 pl-2 rounded-md py-3 border-black"
                  required
                />
              </div>
              <div className=" flex flex-col">
                <label
                  htmlFor="pastMedicalHistory"
                  className="text-gray-500 py-1 pl-2"
                >
                  Past Medical History
                </label>
                <textarea
                  id="pastMedicalHistory"
                  name="pastMedicalHistory"
                  value={values.pastMedicalHistory} // Set value from state
                  onChange={handleChange} // Add onChange handler
                  placeholder="None"
                  className="border dark:border-gray-200 w-[330px] bg-gray-100 pl-2 rounded-md py-3 border-black"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between py-2">
              <button
                type="button"
                onClick={prevPage}
                className="bg-gray-300 text-black py-2 px-4 rounded-md mt-5"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextPage}
                className="bg-blue-500 text-white py-2 px-4 rounded-md mt-5"
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* Page 3: Identification */}
        {page === 3 && (
          <>
            <h3 className="text-gray-700 text-4xl font-bold pb-10">
              Identification
            </h3>
            <div className="flex flex-col">
              <label
                htmlFor="identificationTypes"
                className="text-gray-500 py-1 pl-2"
              >
                Identification Type
              </label>
              <select
                id="identificationTypes"
                name="identificationTypes"
                value={values.identificationTypes} // Set value from state
                onChange={handleChange} // Add onChange handler
                className="border dark:border-gray-200 bg-gray-100 pl-2 rounded-md py-2"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {IdentificationTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col py-2">
              <label
                htmlFor="identificationNumber"
                className="text-gray-500 py-1 pl-2"
              >
                Identification Number
              </label>
              <input
                type="text"
                id="identificationNumber"
                name="identificationNumber"
                value={values.identificationNumber} // Set value from state
                onChange={handleChange} // Add onChange handler
                placeholder="Enter identification number"
                className="border dark:border-gray-200 bg-gray-100 rounded-md py-3 pl-2 border-black"
                required
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="photo" className="text-gray-500 py-1 pl-2">
                Upload Photo
              </label>
              <input
                type="file"
                id="identificationDocument"
                name="identificationDocument"
                accept="image/*"
                className="border dark:border-gray-200 bg-gray-100 rounded-md py-3 pl-2 border-black"
                required
              />
            </div>
            <h2 className="text-4xl text-gray-700 font-bold mb-4 pt-10">
              Consent and Privacy
            </h2>

            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="treatment"
                name="treatment"
                checked={consent.treatment}
                onChange={handlePrivacyChange}
                className="mr-2"
              />
              <label htmlFor="treatment" className="text-gray-500">
                I consent to receive treatment for my health condition.
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="useDisclosure"
                name="useDisclosure"
                checked={consent.useDisclosure}
                onChange={handlePrivacyChange}
                className="mr-2"
              />
              <label htmlFor="useDisclosure" className="text-gray-500">
                I consent to the use and disclosure of my health information for
                treatment purposes.
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="privacyPolicy"
                name="privacyPolicy"
                checked={consent.privacyPolicy}
                onChange={handlePrivacyChange}
                className="mr-2"
              />
              <label htmlFor="privacyPolicy" className="text-gray-500">
                I acknowledge that I have reviewed and agree to the privacy
                policy.
              </label>
            </div>
            <div className="flex justify-between py-2">
              <button
                type="button"
                onClick={prevPage}
                className="bg-gray-300 text-black py-2 px-4 rounded-md mt-5"
              >
                Previous
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md mt-5"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
