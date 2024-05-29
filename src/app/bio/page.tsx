import React from "react";
import Footer from "../../../components/Footer";
import github from "../../../public/logo-github.svg";
import linkedin from "../../../public/logo-linkedin.svg";
import instagram from "../../../public/logo-instagram.svg";
import telegram from "../../../public/logo-telegram.svg";
import twitter from "../../../public/logo-twitter.svg";
import medium from "../../../public/logo-medium.svg";
import Image from "next/image";
import ProfilePicture from "../../../components/ProfilePicture";
import Lembaran from "../../../components/Lembaran";

export default function Bio() {
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
    <div className=" antialiased max-w-2xl mb-5 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
      <div className=" flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 ">
        <div className="flex justify-center mt-4 mb-10">
          <ProfilePicture width="200px" height="200px" />
        </div>
        <div className="flex justify-center mb-1 text-lg">
          <div>Hi folks, here to get in touch with me</div>
        </div>
        <Lembaran title="Contact List">
        {socmedList.map((x) => {
          return (
            <div
              key={x.name}
              className="flex justify-between my-3 rounded-md p-4 bg-emerald-50 button-shadowed-black text-black border-black border-2"
            >
              <a href={x.url} className="flex justify-between w-full">
                <div className=" font-semibold">{x.name}</div>
                <Image
                  src={x.icon}
                  width={30}
                  height={30}
                  alt="logo-github"
                  className="mr-2 hover:opacity-80"
                />
              </a>
            </div>
          );
        })}
        <div          
          className="flex justify-between my-3 rounded-md p-4 bg-red-100 button-shadowed-black text-black border-black border-2"
        >
          <a href="/" className="flex w-full">
          <Image
            src={"/arrow-back-outline.svg"}
            width={30}
            height={30}
            alt="logo-twitter"
            className=" mr-2 hover:opacity-80"
          />
            <div>Go to homepage</div>
          </a>
        </div>
        </Lembaran>
        
        <Footer />
      </div>
    </div>
  );
}
