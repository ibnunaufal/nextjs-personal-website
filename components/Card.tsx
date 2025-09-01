import React, { PropsWithChildren } from "react";

const Card: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className="my-10 text-black">
      <div className="border-2 border-black rounded-md p-4 bg-emerald-100 shadowed-gray">
        {props.children}
      </div>
    </div>
  );
};

export default Card;