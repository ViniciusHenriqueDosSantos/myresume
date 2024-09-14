import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Console } from "console";
export default function Carrousel() {
  const [current, setCurrent] = useState(0);
  const [allowed, setAllowed] = useState(true)
  useEffect(() => {
    if (!allowed) {
      setTimeout(() => {
        setAllowed(true)
      }, 500);
    }
  }
    , [allowed])
  return (
    <div className="w-full  min-h-44 lg:min-h-96 h-auto  my-6 lg:my-0 flex rounded-lg " >
      <button onClick={async (e) => {
        if (allowed) {
          const target = e.target as HTMLElement;
          const el = target.classList.contains('icon')
            ? (target.parentElement?.parentElement as HTMLElement).children[1] as HTMLElement
            : (target.parentElement as HTMLElement).children[1] as HTMLElement

          if (el) {
            const scrollLeft = (current - 1) < 0 ? 3 : ((current - 1) * el.clientWidth);
            el.scrollTo({
              top: 0,
              left: scrollLeft,

              behavior: 'smooth',
            });

            setCurrent((prevCurrent) => (prevCurrent - 1) <= 0 ? 4 : (prevCurrent - 1));
          } else {
            console.log('Element not found', target as HTMLElement);
          }
          setAllowed(false)
        }
      }} className=" h-auto px-2 flex items-center hover:opacity-100  focus:opacity-100 transition-all opacity-30 bg-sky-600 "><ChevronLeft className="icon" size={25} /></button>
      <div id="carrousel" className="w-full max-w-[full] overflow-hidden   whitespace-nowrap h-auto flex bg-sky-200 " >
        <div id="imagem0" className="min-w-full bg-sky-200 bg-opacity-50 h-auto flex items-center justify-center "><Image src="/images/robotica.jpeg" alt="Torneio de Robótica" quality={100} width={600} height={600} className="w-full h-auto" /></div>
        <div id="imagem1" className="min-w-full bg-sky-200 h-auto flex items-center justify-center "><Image src="/images/unifesp.jpg" alt="Unifesp" width={600} height={600} quality={100} className="w-full h-auto" /></div>

        <div id="imagem2" className="min-w-full bg-sky-200 h-auto flex items-center justify-center "><Image src="/images/spskills.PNG" alt="World Skills" width={600} height={600} quality={100} className="w-auto h-full" /></div>

      </div>
      <button onClick={(e) => {
        if (allowed) {
          const target = e.target as HTMLElement;

          const el = target.classList.contains('icon')
            ? (target.parentElement?.parentElement as HTMLElement).children[1] as HTMLElement
            : (target.parentElement as HTMLElement).children[1] as HTMLElement

          if (el) {

            const scrollLeft = (current + 1) > 2 ? 0 : (current + 1) * el.clientWidth + 1;
            el.scrollTo({
              top: 0,
              left: scrollLeft,
              behavior: 'smooth',
            });

            setCurrent((prevCurrent) => (prevCurrent + 1) > 3 ? 0 : (prevCurrent + 1));
          } else {
            console.log('Element not found', target as HTMLElement);
          }
          setAllowed(false)
        }
      }} className=" h-auto px-2 flex items-center hover:opacity-100  focus:opacity-100 transition-all opacity-30 bg-sky-600 "><ChevronRight className="icon" size={25} /></button>

    </div >
  )
}