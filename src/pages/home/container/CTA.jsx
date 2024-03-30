import React from "react";
import { images } from "../../../constants";

const CTA = ({isDarkMode}) => {
  return (
    <>
      <svg
        className="w-full h-auto max-h-40 translate-y-[1px] dark:translate-y-[0px] dark:bg-[#050e15]"
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill=""
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill={isDarkMode ? "#050e15" : "#0D2436"}
        />
      </svg>
      <section className="relative bg-dark-blue px-5 dark:bg-[#050e15]">
        <div className="container grid grid-cols-12 mx-auto py-10 md:pb-20lg:place-items-center">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="text-white dark:text-[#1E496A] font-Roboto font-bold text-2xl md:text-4xl md:text-center md:leading-normal lg:text-left">
              Get our Stories Delivered from us to your inbox weekly
            </h2>
            <div className="w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0">
              <input
                type="text"
                className="px-4 py-3 rounded-lg w-full placeholder:text-dark-light dark:placeholder:text-[#5A7184] dark:bg-[#0D0D0D]"
                placeholder="Your Email"
              />
              <button className="px-4 py-3 rounded-lg w-full bg-primary text-white dark:text-[#0D0D0D] font-bold md:w-fit md:whitespace-nowrap">
                Get Started
              </button>
            </div>
            <p className="text-[#5A7184] text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left">
              <span className="font-bold italic text-[#B3BAC5] md:not-italic md:font-normal md:text-dark-light">
                Get a response tomorrow
              </span>{" "}
              if you submit by 9pm today. If we received after 9pm will get a
              reponse the following day.
            </p>
          </div>
          <div className="col-span-12 hidden mb-[70px] md:block md:order-first lg:col-span-6 lg:order-last">
            <div className="w-3/4 mx-auto relative ">
              <div className="w-1/2 h-1/2 bg-[#FC5A5A] dark:bg-[#FC7373] rounded-lg absolute top-[10%] -right-[8%]" />
              <div className="w-1/2 h-1/2 bg-white rounded-lg opacity-[0.06] absolute -bottom-[10%] -left-[8%]" />
              <div className="w-full rounded-xl bg-white dark:bg-[#0D0D0D] p-3 z-[1] relative ">
                <img
                  src={images.CtaImage}
                  alt="title"
                  className="w-full objct-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                />
                <div className="p-5">
                  <h2 className="font-Roboto font-bold font-xl text-black dark:text-[#1E496A] md:text-2xl lg:text-[28px]">
                  The best aticles every week
                  </h2>
                  <p className="text-dark-light mt-3 text-sm md:text-lg dark:text-[#5A7184]">
                  Personal Development for Smart People
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
