import React, { PropsWithChildren } from "react";

interface LembaranProp {
  title: string;
}

const Lembaran: React.FC<PropsWithChildren<LembaranProp>> = (props) => {
  return (
    <div className="my-10 text-black">
      <div className="font-bold text-xl bg-emerald-50 border-2 border-b-0 p-1 border-black rounded-t-md text-center shadowed-gray w-fit px-3">
        {props.title}
      </div>
      <div className="border-2 border-black rounded-md rounded-tl-none p-4 bg-emerald-100 shadowed-gray">
        {props.children}
      </div>
    </div>
  );
};

export default Lembaran;