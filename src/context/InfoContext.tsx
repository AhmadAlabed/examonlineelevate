"use client";
import React, { createContext, useContext, useState } from "react";
type TInfo = { email: string };

type TInfoContext = {
  info: TInfo;
  setInfo: (info: TInfo) => void;
};
const InfoContext = createContext<TInfoContext | null>(null);
export default function InfoContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [info, setInfo] = useState<TInfo>({ email: "" });
  return (
    <InfoContext.Provider value={{ info, setInfo }}>
      {children}
    </InfoContext.Provider>
  );
}
export const useInfo = () => {
  const context = useContext(InfoContext);
  if (!context) {
    throw new Error("useInfo must be used within a InfoContextProvider");
  }
  return context;
};
