import Link from "next/link"

export default function Header() {

  return (
    <header id="header" className="  text-white  bg-sky-900 items-center transition-all   bg-opacity-25 w-full p-4 py-6 lg:p-8 lg:py-4">
      <div className="flex w-full justify-between items-center ">
        <p className="font-bold text-lg lg:text-2xl tracking-[0.5rem] lg:mb-0 w-full m-auto lg:w-auto lg:m-0"><span className=" text-sky-500 text-4xl">V</span>inicius <span className=" text-sky-500 text-4xl">V</span>itorino</p>
        <div className="gap-8 h-full  hidden lg:flex items-center  text-white font-bold  text-xl">
          <Link className="group" href={"#about"}>
            Sobre
            <hr className="h-0 w-0 transition-all group-hover:w-full" />
          </Link>
          <Link className="group" href={"#works"}>
            Trabalhos
            <hr className="h-0 w-0 transition-all group-hover:w-full" />

          </Link>
          <Link className="group" href={"#contact"}>
            Contato
            <hr className="h-0 w-0 transition-all group-hover:w-full" />

          </Link>
          <Link className="group" href={"#"}>
            Making Of
            <hr className="h-0 w-0 transition-all group-hover:w-full" />

          </Link>
        </div>
        <button onClick={(e) => {
          const button = (e.target as HTMLElement).parentElement as HTMLElement
          const menu = document.getElementById("menuItems")
          const header = document.getElementById("header")
          if (button.classList.contains('active')) {
            menu?.classList.remove('h-16')
            button.classList.remove('active')
            header?.classList.remove('pb-0')

          } else {
            header?.classList.add('pb-0')

            menu?.classList.add('h-16')
            button.classList.add('active')
          }
        }} id="menu" className="lg:hidden flex flex-col min-w-7  justify-between  h-[26px] ">
          <div id="topone" className="w-full menu-tip bg-white h-0.5" ></div>
          <div id="middleone" className="w-full  bg-white h-0.5" />
          <div id="bottomone" className="w-full menu-tip bg-white  h-0.5" />

        </button>
      </div>


      <div id="menuItems" className="flex transition-all h-0 items-center overflow-hidden justify-evenly ">
        <Link className="group" href={"#about"}>
          Sobre
          <hr className="h-0 w-0 transition-all group-hover:w-full" />
        </Link>
        <Link className="group" href={"#works"}>
          Trabalhos
          <hr className="h-0 w-0 transition-all group-hover:w-full" />

        </Link>
        <Link className="group" href={"#contact"}>
          Contato
          <hr className="h-0 w-0 transition-all group-hover:w-full" />

        </Link>
        <Link className="group" href={"#"}>
          Making Of
          <hr className="h-0 w-0 transition-all group-hover:w-full" />

        </Link></div>
    </header>
  )
}