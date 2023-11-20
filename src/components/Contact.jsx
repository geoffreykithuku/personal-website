import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <div id="contact" className="my-20 w-full contact">
      <div className="flex flex-col md:flex-row ">
        <div className="gap-8 md:gap-10 flex flex-col w-full pt-10">
          <h1 className="contact-title text-[36px] font-bold text-[#2f2e41] text-center md:text-left w-full mx-auto mt-0">
            Let's <br />
            <span className="text-[#CE5A67] ">Team Up </span> <br /> for Your
            Next Project!
          </h1>
          <p className="text-base text-[#2f2e41] text-center md:text-left">
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
