"use client";
import React from "react";
import Image from "next/image";

const Socmed = () => {
  return (
    <div className="flex my-3">
      <a
        href="https://www.linkedin.com/in/ibnu-naufal-22369b201"
        target="_blank"
      >
        <Image
          src={"/logo-linkedin.svg"}
          width={30}
          height={30}
          alt="logo-linkedin"
          className="invert mr-2 hover:opacity-80"
        />
      </a>
      <a href="https://github.com/ibnunaufal/" target="_blank">
        <Image
          src={"/logo-github.svg"}
          width={30}
          height={30}
          alt="logo-github"
          className="invert mr-2 hover:opacity-80"
        />
      </a>
      <a href="https://twitter.com/naufalldotcom" target="_blank">
        <Image
          src={"/logo-twitter.svg"}
          width={30}
          height={30}
          alt="logo-twitter"
          className="invert mr-2 hover:opacity-80"
        />
      </a>
    </div>
  );
};
export default Socmed;
