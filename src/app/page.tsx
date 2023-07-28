"use client";
import Image from "next/image";
import Sidebar from "./sidebar";
import { projects } from "../../public/projects";
import Layout from "../../components/Layout";
import { useState } from "react";

export default function Home() {
  const projectList = projects;

  return (
    <Layout>
      <div className=" my-10">
        <div className=" mr-2 ">
          <div className=" font-bold text-2xl">Hi, I'm Naufal 👋</div>
          <br />
          <p className=" text-gray-300 text-justify">
            My Full name is Ibnu Naufal, currently working as Mobile Developer.
            Passionate and Delighted to develop mobile apps for both Android and
            iOS. Not only mobile development, I also love to do any front-end
            work. Love to improve the little part of the UI that wasn't adjusted
            perfectly. Attention to detail, dude! 👀
          </p>
        </div>
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
          <a href="" target="_blank">
            <Image
              src={"/logo-twitter.svg"}
              width={30}
              height={30}
              alt="logo-twitter"
              className="invert mr-2 hover:opacity-80"
            />
          </a>
        </div>
      </div>
      <div className="my-10">
        <div className=" font-bold text-xl mb-3">Courses</div>
        <p className=" text-gray-300 text-justify mb-2">
          As a good lifelong learner, I do finishing several courses at Udemy to
          improve my skills, and here it was.
        </p>
        <ul className="mb-2">
          <li>
            {" "}
            &#10687;{" "}
            <a
              href="https://www.udemy.com/share/101WwK3@Uw-j494SZACEw5yU0UCrPLxjnUCq19K5LheQyQvBHkp5-aqIvGCs7LIV1TIs5RoT9w==/"
              target="_blank"
              className=" text-gray-300 hover:text-white hover:underline"
            >
              React Native Practical Guide By Academind
            </a>
          </li>
          <li>
            {" "}
            &#10687;{" "}
            <a
              href="https://www.udemy.com/share/102rDy3@49Vy1-F75LAHx07vtA4nm8Txdi4w-QoOKKs7pQ8ZuF6-7ZfKRWHSQCaBl-Z1wzM0-Q==/"
              target="_blank"
              className=" text-gray-300 hover:text-white hover:underline"
            >
              SwiftUI Masterclass By Robert Petras
            </a>
          </li>
          <li>
            {" "}
            &#10687;{" "}
            <a
              href="https://www.udemy.com/share/101rfI3@6JnPhmAbq72CZbtoEkmYITDOyRlIKL8iWJUTud-pHoCaQO4SYW88GmlLspeIs6Knhg==/"
              target="_blank"
              className=" text-gray-300 hover:text-white hover:underline"
            >
              Flutter & Dart Completion Guide By Academind
            </a>
          </li>
        </ul>
        <p className=" text-gray-300 text-justify mb-2">
          When I think about how and why something works, I try hard to find out
          about it. Like what happens, I curious about Swift, and I do some
          courses to learn how things work (although the course was not finished
          yet🫣). I am curious about Svelte, ReactJS, or NextJS, and I do a Hello
          World project on these languages. It feels like my curiosity guides me
          to do it.
        </p>
      </div>
      <div className=" my-10 hidden">
        Projects
        <div className="flex overflow-x-auto max-h-50 flex-nowrap">
          <div className="flex flex-nowrap gap-3 mr-2">
            {projectList.map((x) => {
              return (
                <div className=" w-56 h-20 mx-1 bg-slate-800 border-slate-600 border rounded-md flex justify-center items-center ">
                  <Image
                    src={x.icon}
                    alt={`img-${x.icon}`}
                    width={30}
                    height={30}
                    className=" rounded-md mr-2"
                  />
                  {x.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
