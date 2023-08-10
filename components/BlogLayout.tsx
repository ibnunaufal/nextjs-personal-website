import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DotRing from "./DotRing";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { Metadata } from "next";


interface BlogLayoutProps {
  title: string;
}

// const BlogLayout = ({ children }: PropsWithChildren) => {
const BlogLayout: React.FC<PropsWithChildren<BlogLayoutProps>> = ({
  title,
  children,
}) => {
  const router = useRouter()
  return (
    <>
      <title>Blog | Naufal&apos;s Web</title>
      <meta name="description" content="Blog" />
      <div className=" antialiased max-w-2xl mb-5 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        {/* <DotRing /> */}
        <div className=" flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 ">
          <div className="flex justify-between border-b-4 mb-4 pb-4">
            <div className="flex hover:border hover:m-0 m-[1px] hover:rounded p-3" onClick={() => router.push('/blog')}>
              <Image
                src={"/arrow-back-outline.svg"}
                width={30}
                height={30}
                alt="logo-twitter"
                className="invert mr-2 hover:opacity-80"
              />
              <div className="flex items-center">Go Back</div>
            </div>
            <div className=" flex items-center font-bold text-xl hover:underline ">
              naufall.com
            </div>
          </div>
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default BlogLayout;
