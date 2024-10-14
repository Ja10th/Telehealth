import { TbRibbonHealth } from "react-icons/tb";
import PatientForm from "./components/forms/PatientForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex h-screen max-h-screen">
      <section className="w-[50%] max-w-xl pt-32 mx-auto ">
          <div>
            <div className="flex justify-start items-center">
            <TbRibbonHealth  className="text-3xl"/>
              <h1>TeleHealth</h1>
            </div>
              <PatientForm />

              <div className="mt-20 flex justify-between">
               <p className="justify-end"> &copy; TeleHealth 2024</p>
              </div>
          </div>
      </section>
      <div className="w-[50%] h-screen">
        <Image
        src='https://images.pexels.com/photos/4210557/pexels-photo-4210557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        width={1000}
        height={1000}
        alt="Two medical needles"
        className="w-full h-full rounded-xl object-cover object-fit"
        />
      </div>
    </div>
    </>
  );
}
