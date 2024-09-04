import Link from "next/link";

export default function HomeComponent() {
  return (
    <div id="whole" className="w-full h-screen" >
      <div id="bg" className="w-full  h-[110%]   " >
        <header className="flex text-white  bg-sky-900   bg-opacity-25 w-full justify-between  p-8">
          <p className="font-bold text-2xl tracking-[0.5rem] "><span className=" text-sky-500 text-4xl">V</span>inicius <span className=" text-sky-500 text-4xl">V</span>itorino</p>
          <div className="flex gap-8 h-full items-center mt-1.5 text-white font-bold  text-xl">
            <Link href={"#about"}>Sobre</Link>
            <Link href={"#about"}>Sobre</Link>
            <Link href={"#about"}>Sobre</Link>
            <Link href={"#about"}>Sobre</Link>


          </div>
        </header>
        <div className="w-full flex flex-col  p-24 pt-12">
          <div className=" bg-black bg-opacity-40 shadow-xl mb-20 px-8 rounded-sm w-full">
            <h1 className="  text-[85px] font-semibold text-orange-100 p-2  pb-0  tracking-widest ">VINICIUS VITORINO</h1>
            <h3 className=" text-3xl font-semibold text-orange-50 p-2 pt-0 rounded-sm tracking-widest mb-6 w-8/12 ">Sou um desenvolvedor Brasileiro em busca de mais projetos para preencher esse portfólio.</h3>

          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <button className="transition-all hover:scale-105 hover:bg-opacity-85 w-full  hover:border-white  rounded-lg mb-5 max-w-[500px] border-2 border-sky-700 bg-sky-950  bg-opacity-50  text-2xl font-bold tracking-[0.5rem] text-white py-2 px-3 ">SOBRE</button>
            <button className="transition-all hover:scale-105 hover:bg-opacity-85 w-full  hover:border-white  rounded-lg mb-5 max-w-[500px] border-2 border-sky-700 bg-sky-950  bg-opacity-50  text-2xl font-bold tracking-[0.5rem] text-white py-2 px-3 ">SOBRE</button>
            <button className="transition-all hover:scale-105 hover:bg-opacity-85 w-full  hover:border-white  rounded-lg mb-5 max-w-[500px] border-2 border-sky-700 bg-sky-950  bg-opacity-50  text-2xl font-bold tracking-[0.5rem] text-white py-2 px-3 ">SOBRE</button>
            <button className="transition-all hover:scale-105 hover:bg-opacity-85 w-full  hover:border-white  rounded-lg mb-5 max-w-[500px] border-2 border-sky-700 bg-sky-950  bg-opacity-50  text-2xl font-bold tracking-[0.5rem] text-white py-2 px-3 ">SOBRE</button>


          </div>


        </div>
      </div>
      <div id="about" className="w-11/12 rounded-sm px-2 py-4 m-auto my-6 bg-sky-500 text-white">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odio magni, velit blanditiis corporis quos eaque omnis. Maxime laudantium provident recusandae velit, accusantium suscipit facilis ea fugiat, molestiae quisquam aliquam.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odio magni, velit blanditiis corporis quos eaque omnis. Maxime laudantium provident recusandae velit, accusantium suscipit facilis ea fugiat, molestiae quisquam aliquam.</p>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odio magni, velit blanditiis corporis quos eaque omnis. Maxime laudantium provident recusandae velit, accusantium suscipit facilis ea fugiat, molestiae quisquam aliquam.</p>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odio magni, velit blanditiis corporis quos eaque omnis. Maxime laudantium provident recusandae velit, accusantium suscipit facilis ea fugiat, molestiae quisquam aliquam.</p>


      </div>
    </div >
  )
}