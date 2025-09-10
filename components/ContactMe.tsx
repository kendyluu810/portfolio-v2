"use client";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { PageInfo } from "../typing";

type Props = { pageInfo: PageInfo };

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${pageInfo?.email}}?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      id="contactme"
      className="min-h-screen flex flex-col text-white text-center px-6 md:px-10 justify-evenly items-center"
    >
      <h3 className="mt-10 uppercase tracking-[8px] md:tracking-[15px] text-gray-500 text-lg md:text-2xl">
        {"Let's Connect"}
      </h3>
      <div className="flex flex-col space-y-6 w-full max-w-3xl mt-6">
        <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-darkGreen/50 underline">Lets talk.</span>
        </h4>

        <div className="space-y-4">
          <div className="flex items-center space-x-3 justify-center">
            <PhoneIcon className="text-darkGreen h-6 w-6 animate-pulse" />
            <p className="text-base sm:text-lg md:text-xl">
              (+84) {pageInfo?.phoneNumber}
            </p>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <EnvelopeIcon className="text-darkGreen h-6 w-6 animate-pulse" />
            <p className="text-base sm:text-lg md:text-xl">{pageInfo?.email}</p>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <MapPinIcon className="text-darkGreen h-6 w-6 animate-pulse" />
            <p className="text-base sm:text-lg md:text-xl">
              {pageInfo?.address}
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col space-y-2 md:w-fit mx-auto "
        >
          <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput text-center"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput text-center"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput text-center"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput text-center"
          />
          <button className="bg-[#f7ab0a] py-4 px-8 rounded-md text-black font-semibold hover:bg-[#e89900] transition-colors duration-300">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}
