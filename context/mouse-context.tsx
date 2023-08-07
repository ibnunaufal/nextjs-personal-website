'use client'
import React, { createContext, useState, ReactNode } from "react";

type CursorType = string;

interface MouseContextData {
  cursorType: CursorType;
  cursorChangeHandler: (cursorType: CursorType) => void;
}

export const MouseContext = createContext<MouseContextData>({
  cursorType: "",
  cursorChangeHandler: () => {},
});

interface MouseContextProviderProps {
  children: ReactNode;
}

const MouseContextProvider: React.FC<MouseContextProviderProps> = (props) => {
  const [cursorType, setCursorType] = useState<CursorType>("");

  const cursorChangeHandler = (cursorType: CursorType) => {
    setCursorType(cursorType);
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;
