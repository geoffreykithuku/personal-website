import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="my-20 w-full contact">
      <div className="flex flex-col md:flex-row ">
        <div className="gap-8 md:gap-10 flex flex-col w-full">
          <h1 className="contact-title text-[45px] font-bold text-[#2c3333] text-center md:text-left">
            Let's <br /><span className="text-[#ff2e63] text-[50px] font-extrabold">Team Up </span> <br /> for Your Next
            Project!
          </h1>
          <p className="text-base text-black text-center md:text-left">
            I'm excited to explore new opportunities and collaborate on
            innovative projects.Reach out and let's make something incredible
            together!
          </p>
        </div>
        <div className="w-full mt-10 sm:md-0 mx-auto flex justify-center items-center">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
