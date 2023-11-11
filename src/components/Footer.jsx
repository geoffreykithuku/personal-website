import React from 'react'
import { Linkedin, Twitter, Github } from 'lucide-react'

const Footer = () => {
  return (
    <div className="w-full  bg-black px-5 sm:px-10 lg:px-[100px] justify-between items-center flex flex-col sm:flex-row text-white footer py-5">
      <div className="my-5 sm:my-0">
        <h1 className="text-[32px] font-bold">Geoffrey.</h1>
      </div>
      <div className="flex  items-center text-[28px] font-semibold gap-5">
        <p>Let's Connect:</p>
        <span className="flex justify-center items-center gap-5">
          <a
            href="https://www.linkedin.com/in/geoffrey-kithuku/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={40} color="#ffffff" />
          </a>
          <a
            href="https://twitter.com/k__geoffrey"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter size={40} color="#ffffff" />
          </a>
          <a
            href="https://github.com/geoffreykithuku"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={40} color="#ffffff" />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer