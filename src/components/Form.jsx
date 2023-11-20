import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  const form = useRef();
  const sendEmail = async(e) => {
    e.preventDefault();

   await emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully");
          form.current.reset();
        },
        (error) => {
          toast.error("Message Not Sent");
        }
      );
   
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-5 justify-center md:items-center w-[90%] mx-auto text-[#2f2e41]"
    >
      <div className="flex flex-col sm:flex-row justify-between w-full items-start text-base gap-5 ">
        <fieldset className="flex flex-col w-full gap-4">
          <label htmlFor="name">Your Name</label>
          <input
            className="w-full bg-[#e8e8e8] max-w-[300px] rounded-2xl px-5 py-3 ring-0 border-0 outline-none"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
          />
        </fieldset>
        <fieldset className="flex flex-col w-full gap-4">
          <label htmlFor="email">Your Email</label>
          <input
            className="w-full  bg-[#e8e8e8] max-w-[300px] rounded-2xl px-5 py-3 ring-0 border-0 outline-none"
            id="email"
            name="email"
            type="text"
            placeholder="Email"
          />
        </fieldset>
      </div>
      <fieldset className="flex flex-col justify-center items-start w-full gap-4">
        <label htmlFor="message">How Can I Help</label>
        <textarea
          className="w-full  bg-[#e8e8e8] max-w-[600px] rounded-2xl px-5 py-3 ring-0 border-0 outline-none"
          name="message"
          id="message"
          cols=""
          rows="5"
          placeholder="Message"
        ></textarea>
      </fieldset>
      <button
        className="bg-[#CE5A67] text-[#FCF5ED] px-10 py-3 rounded-2xl text-base font-semibold self-end"
        type="submit"
      >
        Send
      </button>
      <ToastContainer />
    </form>
  );
};

export default Form;
