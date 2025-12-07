"use client";

import Image from "next/image";
import LoadingScreen from "@/components/LoadingScreen";
import { useGlobal } from "./context/GlobalContext";
import MainLayout from "@/components/MainLayout";
import BiosScreen from "@/components/BiosScreen";
export default function Home() {
  const {state} = useGlobal();
  return (
    <>
      {
        state.isShowBiosScreen ? (<BiosScreen />) : 
        state.isLoading ? (<LoadingScreen />) :
        state.isShowLoginScreen ? ( <MainLayout />) :
        null
      }
      {/* {state.isSHowingBiosScreen && (<BiosScreen />) }
      {state.isLoading ? (<LoadingScreen />) : ( <MainLayout />)} */}
    </>
  );
}
