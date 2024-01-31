import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  // TODO: send email from backend using services like EmailJS
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:jayzhoupro@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. My email is ${formData.email}. ${formData.message}`;
  };

  return (
    <div className="h-screen relative flex flex-col md:flex-row md:text-left text-center max-w-7xl s8:px-7 sm:px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute s8:top-16 12pro:top-20 sm:top-24 uppercase tracking-[20px] mr-[-20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="s8:mt-20 12pro:mt-16 sm:mt-0 flex flex-col space-y-10">
        <h4 className="s8:text-2xl 12pro:text-3xl sm:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">
            Let&apos;s Talk.
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="s8:text-xl 12pro:text-2xl">+1(806)822-9999</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="s8:text-xl 12pro:text-2xl">jayzhoupro@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="s8:text-xl sm:text-2xl">
              777 S. Alameda St, Los Angeles
            </p>
          </div>
        </div>

        {/* contact form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 s8:w-[90vw] sm:w-fit mx-auto"
        >
          <div className="s8:flex s8:flex-col s8:space-y-2 sm:space-y-0 sm:flex sm:flex-row sm:space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
