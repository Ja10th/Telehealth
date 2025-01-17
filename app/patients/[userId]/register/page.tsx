import RegisterForm from "@/app/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbRibbonHealth } from "react-icons/tb";

const Register = async ({params: {userId} } : SearchParamProps) => {

    const user = await getUser(userId);
  return (
    <div>
      <div className="flex h-screen max-h-screen">
        <section className="w-[60%] max-w-2xl pt-32 mx-auto ">
          <div>
            <div className="flex justify-start items-center">
              <TbRibbonHealth className="text-3xl text-blue-500" />
              <h1>TeleHealth</h1>
            </div>
            <RegisterForm user={user}/>

            <div className="mt-10 flex text-center justify-between">
              <p className="text-center"> &copy; TeleHealth 2024</p>
            </div>
          </div>
        </section>
        <div className="w-[40%] h-screen" >
          <Image
            src="/register.jpg"
            width={1000}
            height={1000}
            alt="Two medical needles"
            priority
            className="w-full h-full rounded-xl object-cover object-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
