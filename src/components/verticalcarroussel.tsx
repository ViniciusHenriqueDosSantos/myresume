import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function VerticalCarroussel() {
  const [current, setCurrent] = useState(0);
  const [allowed, setAllowed] = useState(true)

  const items = ["FactoryMind (2024)", "Portfólio (2024)"]
  useEffect(() => {
    if (!allowed) {
      setTimeout(() => {
        setAllowed(true)
      }, 500);
    }
  }
    , [allowed])
  return (
    <div className="lg:flex items-center  ">

      <div className=" mt-6 px-2 lg:h-[600px] max-h-[600px]  overflow-auto">
        <div className="flex  gap-4 h-full  overflow-auto hidden-scroll  px-2  max-h-full lg:flex-col flex-row justify-center">

          {
            items.map((x) => {
              return (
                <button onClick={(e) => {
                  if (allowed) {

                    const el = e.target as HTMLElement;
                    const target = el.parentElement?.parentElement?.parentElement?.children[1] as HTMLElement
                    if (el) {
                      const scrollTop = items.indexOf(el.innerText) * (target?.clientHeight + 100) + 20;

                      target.scrollTo({
                        top: scrollTop,
                        left: 0,
                        behavior: 'smooth',
                      });

                    }
                    setAllowed(false)
                  }
                }} className="hover:scale-110 transition-all focus:scale-110 ">{x}</button>
              )
            })
          }




        </div>
      </div>
      <div className=" w-full inline-block m-auto overflow-hidden  max-h-[200px] lg:max-h-[600px]">
        <Link className="" href="app.factorymind.com.br"><Image className="h-full w-auto max-h-[550px] m-auto my-6  hover:scale-105 border  border-1 border-white  align-middle transition-all " src="/images/factorymind.jpeg" alt="FactoryMind" width={2000} height={2000} quality={100} /></Link>
        <Link className="h-[500px]" href="">  <Image className="max-h-[550px] h-full m-auto  my-6 w-auto  hover:scale-105  border border-1 border-white align-middle transition-all " src="/images/portfolio.PNG" alt="FactoryMind" width={2000} height={2000} quality={100} /></Link>

      </div>
    </div >

  )
}