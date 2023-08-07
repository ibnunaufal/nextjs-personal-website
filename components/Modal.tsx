import React, { useEffect } from "react";
import ReactPortal from "./ReactPortal";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal = ({ children, isOpen, handleClose }: ModalProps) => {
  // close the modal when esc is pressed
  useEffect(() => {
    const closeOnEscKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscKey);
    };
  }, [handleClose]);

  // disable scroll on modal load
  useEffect(() => {
    if (!isOpen){
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <div className=" fixed top-0 left-0 w-screen h-screen z-40 bg-neutral-500 opacity-50"></div>
        <div>
            <button
                onClick={handleClose}
                className="py-2 px-8 self-end font-bold border rounded hover:bg-violet-600"
                >
                Close
                </button>
        </div>
        {/* <div className=" fixed z-50 w-screen h-screen justify-center items-center">
          <div className=" fixed rounded-md flex flex-col box-border max-w-2xl overflow-hidden p-5 bg-zinc-800 inset-y-32 inset-x-10">
            <button
              onClick={handleClose}
              className="py-2 px-8 self-end font-bold border rounded hover:bg-violet-600"
            >
              Close
            </button>
            <div className="box-border h-5/6">{children}</div>
          </div>
        </div> */}
      </>
    </ReactPortal>
  );
};

export default Modal;
