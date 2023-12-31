"use client";
import Image from "next/image";
import Sidebar from "./sidebar";
import { projects } from "../../public/projects";
import Layout from "../../components/Layout";
import { Fragment, useContext, useEffect, useState } from "react";
import Modal from "../../components/Modal";
import { MouseContext } from "../../context/mouse-context";
import Socmed from "../../components/Socmed";
import { useRouter } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";

interface model {
  id: 1;
  title: "Judul";
  description: "deskripsi";
  url: "";
  created_at: "";
}

export default function Home() {
  const router = useRouter();
  const [contents, setContents] = useState([]);
  const projectList = projects;
  const [showModal, setShowModal] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(true);
  const [selectedProject, setSelectedProject] = useState(projectList[0]);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const content = `<h1 id="sample-markdown">Sample Markdown</h1>
  <p>This is some basic, sample markdown.</p>
  <h2 id="second-heading">Second Heading</h2>
  <ul>
  <li>Unordered lists, and:<ol>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  </ol>
  </li>
  <li>More</li>
  </ul>
  <blockquote>
  <p>Blockquote</p>
  </blockquote>
  <p>And <strong>bold</strong>, <em>italics</em>, and even <em>italics and later <strong>bold</strong></em>. Even <del>strikethrough</del>. <a href="https://markdowntohtml.com">A link</a> to somewhere.</p>
  <p>And code highlighting:</p>
  <pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-string">'bar'</span>;
  
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">baz</span><span class="hljs-params">(s)</span> </span>{
     <span class="hljs-keyword">return</span> foo + <span class="hljs-string">':'</span> + s;
  }
  </code></pre>
  <p>Or inline code like <code>var foo = &#39;bar&#39;;</code>.</p>
  <p>Or an image of bears</p>
  <p><img src="http://placebear.com/200/200" alt="bears"></p>
  <p>The end ...</p>
  `;

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let data = localStorage.getItem("all-lists");
    if (data) {
      // Parse the JSON string stored in local storage to an array
      const parsedData = JSON.parse(data);
      setContents(parsedData);
    } else {
      // If data is not found, set an empty array
      setContents([]);
    }
  };

  const selectProject = (data: any) => {
    setHide(false);
    setSelectedProject(data);
    openModal();
  };

  return (
    <Layout>
      <title>Naufal&apos;s Web</title>
      <meta name="description" content="Blog" />
      <div className=" my-10">
        <div className=" mr-2 ">
          <div className=" font-bold text-2xl">Hi, I am Naufal 👋</div>
          <br />
          <p className=" text-gray-300 text-justify">
            My Full name is Ibnu Naufal, currently working as Mobile Developer.
            Passionate and Delighted to develop mobile apps for both Android and
            iOS. Not only mobile development, I also love to do any front-end
            work. Love to improve the little part of the UI that was not
            adjusted perfectly. Attention to detail, dude! 👀
          </p>
        </div>
        <div className="my-4">
          <a href="/about">
            Read more about me
            <span
                      className="ml-2 text-gray-400"
                      title="Opens in a new tab"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
          </a>
        </div>
        <Socmed />
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
        {/* <button className="p-10 bg-red-900" onClick={openModal} onMouseEnter={() => cursorChangeHandler()}
          onMouseLeave={() => cursorChangeHandler()}>
          Buka
        </button> */}
      </div>
      <div className=" my-10">
        <div className=" font-bold text-2xl">Blog</div>
        <br />
        <p className=" text-gray-300 text-justify mb-2">
          When I am on my free time, sometimes I write a little note that maybe
          on the next time I need to read it back. Here is several examples of
          my blogs.
        </p>
        <div className="flex overflow-x-auto max-h-50 flex-nowrap">
          <div className="flex flex-nowrap gap-3 mr-2">
            {contents?.map((x: model) => {
              return (
                <div
                  key={x.id}
                  className="border p-4 my-3 hover:border-violet-600"
                  onClick={() => {
                    router.push("/blog/" + x.url);
                  }}
                >
                  {/* <div dangerouslySetInnerHTML={{ __html: x.content }}></div> */}
                  <p className="text-xl font-bold">{x.title}</p>
                  <p className="text-gray-300">{x.created_at}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div></div>
      </div>
      <div className=" my-10">
        <div className=" font-bold text-2xl">Projects</div>
        <br />
        <p className=" text-gray-300 text-justify mb-2">
          Here is several projects that I have worked before, click one of them
          to see details.
        </p>
        <div className="flex overflow-x-auto max-h-50 flex-nowrap">
          <div className="flex flex-nowrap gap-3 mr-2">
            {projectList.map((x) => {
              return (
                <div
                  key={`${x.id}-${x.name}`}
                  onClick={() => selectProject(x)}
                  className={` w-56 h-20 mx-1 border rounded-md flex justify-center items-center bg-slate-800 border-slate-600
                    `}
                >
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

      {/* <div dangerouslySetInnerHTML={{ __html: content }}></div>
      {showModal && <p>true</p>}
      {!showModal && <p>false</p>} */}
      <Modal isOpen={!showModal} handleClose={() => setShowModal(!showModal)}>
        <div>isi Modal</div>
      </Modal>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-800 border-slate-600 border p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="font-bold text-2xl"
                  >
                    
                      {selectedProject.name}                    
                  </Dialog.Title>

                  <div className=" bg-slate-800 rounded-md my-4">                    
                    <div className=" text-justify">
                      <p>{selectedProject.desc}</p>
                    </div>
                    <div className="flex overflow-x-auto max-h-50 flex-nowrap">
                      <div className="flex flex-nowrap gap-3 mr-2">
                        <div className=" w-96 h-80 mx-1 rounded-md flex justify-center items-center ">
                          <Image
                            src={selectedProject.headerImage}
                            width={500}
                            height={100}
                            alt="header"
                          />
                        </div>
                        {selectedProject.screenshots.map((x) => {
                          return (
                            <div
                              key={`${x}}`}
                              className=" w-40 h-80 mx-1 rounded-md flex justify-center items-center "
                            >
                              <Image
                                src={x}
                                alt={`img-${x}`}
                                width={300}
                                height={100}
                                className=" rounded-md mr-2"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      Tech Stack Used: {selectedProject.tech.join(", ")}
                    </div>
                    <div>
                      My role in this project:{" "}
                      {selectedProject.type.join(", ")}
                    </div>
                    <a href={selectedProject.url} target="_blank">
                      <div className="flex my-2 hover:underline">
                        <div className="mr-1">See the project here</div>
                        <Image
                          src={"/arrow-forward-outline.svg"}
                          width={15}
                          height={15}
                          alt="logo-twitter"
                          className="invert hover:opacity-80 -rotate-45"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Layout>
  );
}
