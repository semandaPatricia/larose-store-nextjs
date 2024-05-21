"use client";

import { WixClientContext } from "@/context/wixContext";
import { useContext } from "react";

export const useWixClient = () => {
  return useContext(WixClientContext);
};

//This hook is used to fetch data.created to avoid repeatition in the home page