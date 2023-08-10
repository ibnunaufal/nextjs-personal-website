import React from "react";
import Footer from "../../../components/Footer";
import github from "../../../public/logo-github.svg";
import linkedin from "../../../public/logo-linkedin.svg";
import instagram from "../../../public/logo-instagram.svg";
import telegram from "../../../public/logo-telegram.svg";
import Image from "next/image";
import style from "./style.module.css";

export default function Bio() {
  const socmedList = [
    {
      name: "Telegram",
      url: "http://t.me/ibnu_naufall",
      icon: telegram,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ibnu-naufal-22369b201",
      icon: linkedin,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ibn.naufall/",
      icon: instagram,
    },
    {
      name: "GitHub",
      url: "https://github.com/ibnunaufal/",
      icon: github,
    },
  ];
  return (
    <div className=" antialiased max-w-2xl mb-5 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
      <div className=" flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 ">
        <div className="flex justify-center mt-4 mb-10">
          <div className={`${style.image} hover:scale-150`}></div>
        </div>
        <div className="flex justify-center mb-4">
          <div>Hi, here to get in touch with me</div>
        </div>
        {socmedList.map((x) => {
          return (
            <div
              key={x.name}
              className="flex justify-between my-3 border rounded-md p-4"
            >
              <a href={x.url} className="flex justify-between w-full">
                <div>{x.name}</div>
                <Image
                  src={x.icon}
                  width={30}
                  height={30}
                  alt="logo-github"
                  className="invert mr-2 hover:opacity-80"
                />
              </a>
            </div>
          );
        })}
        <div          
          className="flex justify-between my-3 border rounded-md p-4"
        >
          <a href="/" className="flex w-full">
          <Image
            src={"/arrow-back-outline.svg"}
            width={30}
            height={30}
            alt="logo-twitter"
            className="invert mr-2 hover:opacity-80"
          />
            <div>Go to homepage</div>
          </a>
        </div>
        <Footer />
      </div>
    </div>
  );
}
