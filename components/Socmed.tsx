"use client";
import React from "react";
import Image from "next/image";
import github from "../public/logo-github.svg";
import linkedin from "../public/logo-linkedin.svg";
import instagram from "../public/logo-instagram.svg";
import telegram from "../public/logo-telegram.svg";
import twitter from "../public/logo-twitter.svg";
import medium from "../public/logo-medium.svg";

const Socmed = () => {
  const socmedList = [
    {
      name: "Telegram",
      url: "http://t.me/ibnu_naufall",
      icon: telegram,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ibn.naufall/",
      icon: instagram,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/naufalldotcom",
      icon: twitter,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ibnu-naufal-22369b201",
      icon: linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/ibnunaufal/",
      icon: github,
    },
    {
      name: "Medium",
      url: "https://medium.com/@ibnunaufal",
      icon: medium,
    },
  ];
  return (
    <div className="flex my-3">
      {socmedList.map((x) => {
        return (
          <a
            href={x.url}
            target="_blank"
            key={x.url}
          >
            <Image
              src={x.icon}
              width={30}
              height={30}
              alt="logo-linkedin"
              className=" mr-2 hover:opacity-80"
            />
          </a>
        );
      })}
      {/* <a
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
      </a> */}
    </div>
  );
};
export default Socmed;
