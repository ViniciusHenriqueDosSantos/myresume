'use client'
import HomeComponent from "@/components/home";
import LoadingComponent from "@/components/loading";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(<LoadingComponent />)

  useEffect(() => {
    setTimeout(() => {
      setLoading(<HomeComponent />)
    }, 5000);
  }, [])

  return (

    <div className="w-full h-screen" >
      {
        loading
      }
    </div >
  )

}