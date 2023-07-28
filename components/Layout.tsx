import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className=" antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
      <div className=" flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 ">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};
export default Layout;
