"use client";

import Image from "next/image";
import LoadingScreen from "@/components/LoadingScreen";
import { useLoading } from "./context/LoadingContext";
import MainLayout from "@/components/MainLayout";
export default function Home() {
  const {isLoading} = useLoading();
  return (
    <>
      {isLoading ? (<LoadingScreen />) : ( <MainLayout />)}
    </>
  );
}
