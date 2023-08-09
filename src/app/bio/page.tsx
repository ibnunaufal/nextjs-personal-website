import React from "react";
import Footer from "../../../components/Footer";
import github from "../../../public/logo-github.svg";
import Image from "next/image";

export default function Bio() {
  const socmedList = [
    {
      name: "LinkedIn",
      url: "http://",
      icon: github,
    },
    {
      name: "GitHub",
      url: "http://",
      icon: github,
    },
    {
      name: "Telegram",
      url: "http://",
      icon: github,
    },
    {
      name: "Whatsapp",
      url: "http://",
      icon: github,
    },
  ];
  return (
    <div className=" antialiased max-w-2xl mb-5 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
      <div className=" flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 ">
        <h1>Bio</h1>
        {socmedList.map((x) => {
          return (
            <div key={x.name}>
              {x.name}
              <Image
                src={x.icon}
                width={30}
                height={30}
                alt="logo-github"
                className="invert mr-2 hover:opacity-80"
              />
            </div>
          );
        })}

        <Footer />
      </div>
    </div>
  );
}
