import React from "react";
import Layout from "../../../components/Layout";
import Image from "next/image";
import Socmed from "../../../components/Socmed";
import style from "./style.module.css";

export default function About() {
  return (
    <Layout>
      <title>About | Naufal's Web</title>
      <meta name="description" content="About" />
      <div className="my-10 flex items-center justify-center">
        {/* <Image
          src={"/profile.png"}
          alt="pp"
          width={200}
          height={200}
          className="rounded-full transition ease-in-out delay-150 hover:scale-150"
        /> */}
        <div className={`${style.image} hover:scale-150`}></div>
      </div>
      <div className="my-10 text-justify">
        <div className="text-2xl font-bold">About Me</div>
        <div className="text-md text-gray-300">
          <p className="my-4">
            Hello, I am Naufal. Currently work as Mobile Developer at{" "}
            <a
              href="https://teknologikartu.com"
              className="underline hover:text-purple-500"
              target="_blank"
            >
              PT Teknologi Kartu Indonesia
            </a>
            . I have an IT experience of more than 2 years. But before that, I
            also studied IT major courses in middle school and at university.
          </p>
          <p className="my-4">
            When I have an interest in something, I let my curiosity work by
            itself. My curiosity will guide me to find out and try so hard to
            get it or know it. Fortunately, my interest was fallen into Coding.
            I started it on C Language on Arduino, then Desktop Programming with
            Visual Studio. Growing my skill by learning Web Development using
            Laravel, Mobile Development with Java, and now, I have been addicted
            to Mobile Programming with Kotlin.
          </p>
        </div>
      </div>
      <div className="my-10">
        <div className="text-2xl font-bold">Work Experience</div>
        <div className="my-4">
          <p className=" text-xl font-semibold">PT Teknologi Kartu Indonesia</p>
          <p className=" text-gray-300">Mobile Developer</p>
          <p className=" text-gray-300">Jan 2021 - Now</p>
        </div>
        <div className="my-4">
          <p className=" text-xl font-semibold">
            PT Angkasa Pura I Bandara Ahmad Yani Semarang
          </p>
          <p className=" text-gray-300">Staff Programmer (Internship)</p>
          <p className=" text-gray-300">Aug 2019 - Oct 2019</p>
        </div>
      </div>
      <div className="my-10">
        <div className="text-2xl font-bold">Education</div>
        <div className="my-4">
          <p className=" text-xl font-semibold">Politeknik Negeri Semarang</p>
          <p className=" text-gray-300">Informatic Engineering</p>
          <p className=" text-gray-300">Graduated 2020</p>
        </div>
        <div className="my-4">
          <p className=" text-xl font-semibold">SMK Syubbanul Wathon</p>
          <p className=" text-gray-300">Computer & Network Engineering</p>
          <p className=" text-gray-300">Graduated 2017</p>
        </div>
      </div>
      <div className="my-10 text-justify">
        <div className="text-2xl font-bold">Contact</div>
        <p className="my-4">
          Wanna have collaboration with me? Contact me with{" "}
          <a
            href="mailto:ibnunaufal5758@gmail.com"
            className="underline"
            target="_blank"
          >
            email
          </a>{" "}
          or social media below.
        </p>
        <Socmed></Socmed>
      </div>
    </Layout>
  );
}
