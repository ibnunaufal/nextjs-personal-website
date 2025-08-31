import React from "react";
import Footer from "../../../components/Footer";
import github from "../../../public/logo-github.svg";
import linkedin from "../../../public/logo-linkedin.svg";
import instagram from "../../../public/logo-instagram.svg";
import wa from "../../../public/logo-whatsapp.svg";
import twitter from "../../../public/logo-twitter.svg";
import medium from "../../../public/logo-medium.svg";
import Image from "next/image";
import Head from "next/head";
import ProfilePicture from "../../../components/ProfilePicture";

export default function WaPrivate() {
  const socmedList = [
    {
      name: "Open Whatsapp",
      url: "http://wa.me/6281225951789",
      icon: wa,
    },
  ];
  return (
    <>
    <Head>
        <title>Contact Me via WhatsApp</title>
        <meta name="description" content="Get in touch with me easily through WhatsApp. Click the link to start chatting!" />
        <meta property="og:title" content="Contact Me via WhatsApp" />
        <meta property="og:description" content="Get in touch with me easily through WhatsApp. Click the link to start chatting!" />
        <meta property="og:url" content="https://naufall.com/wa" />
        <meta property="og:type" content="website" />
      </Head>
    <div className=" antialiased max-w-2xl mb-5 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
      <div className=" flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 ">
        <div className="flex justify-center mt-4 mb-10">
          <ProfilePicture width="200px" height="200px" />
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

    </>
  );
}
