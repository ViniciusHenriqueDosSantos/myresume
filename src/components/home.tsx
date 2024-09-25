import { Mail, Phone } from "lucide-react";
import Carrousel from "./carrousel";
import Section from "./section";
import Subtitle from "./subtitle";
import EmphasizedLink from "./mylink";
import Emphasized from "./emphasized";
import HeaderButton from "./headerbutton";
import ButtonCopy from "./buttoncopy";
import VerticalCarroussel from "./verticalcarroussel";
import Header from "./header";
import Link from "next/link";

export default function HomeComponent() {
  return (
    <div id="whole" className="w-full h-screen " >
      <div id="bg" className="w-full  paralax   h-auto pb-12  " >
        <Header />
        <div className="w-full flex flex-col p-8 xl:p-24 pt-12">
          <div className=" bg-black bg-opacity-40 pt-2 shadow-xl mb-20 sm:px-8 px-4 rounded-sm w-full">
            <h1 className="  2xl:text-[85px] lg:text-6xl md:text-5xl sm:text-3xl text-2xl  font-semibold text-orange-100 p-2 mb-4  pb-0  tracking-widest ">VINICIUS VITORINO</h1>
            <h3 className=" text-xl md:text-2xl lg:text-3xl font-semibold text-orange-50 p-2 pt-0 rounded-sm tracking-widest mb-6 w-full sm:w-8/12 ">Desenvolvedor brasileiro em busca de novos desafios e oportunidades para enriquecer meu portfólio.</h3>

          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <HeaderButton href="#about">SOBRE</HeaderButton>
            <HeaderButton href="#works">TRABALHOS</HeaderButton>
            <HeaderButton href="#contact">CONTATO</HeaderButton>
            <HeaderButton href="">MAKING OF</HeaderButton>


          </div>


        </div>
      </div>

      <Section id="about">
        <Subtitle>Sobre mim</Subtitle>
        <div className="lg:flex block items-center  gap-10 justify-between">
          <p className="w-full text-[15px] lg:text-lg leading-8  mt-3 lg:mt-0 lg:leading-10  font-medium  text-sky-200 ">
            Meu nome é <Emphasized>Vinicius Henrique dos Santos</Emphasized>, também conhecido como Vinicius Vitorino, sou desenvolvedor do Brasil e este é o meu portfólio.
            Desde cedo, participei de torneios de robótica com a equipe Taiada Nexus, onde descobri minha paixão por tecnologia e programação.
            Durante a pandemia de 2020, comecei a estudar programação por conta própria, explorando o desenvolvimento web, área pela qual me afeiçoei.
            Mais tarde, cursei Técnico em Desenvolvimento de Sistemas no Senai e competi na World Skills na categoria Desenvolvimento de Softwares para Negócios.
            Hoje, trabalho como Freelancer e estudo Ciências da Computação na UNIFESP (Universidade Federal de São Paulo).
            <p className="mt-4">Meu currículo: <a href="/files/curriculo.pdf" download="ViniciusHenriqueDosSantos" className="ms-2 text-white bg-yellow-500  rounded-lg px-3 py-2 text-center"> Clique aqui</a></p>

          </p>

          <Carrousel />
        </div>
      </Section>

      <Section inbetween />
      <Section id="works">
        <Subtitle>Trabalhos</Subtitle>

        <VerticalCarroussel />



      </Section>
      <Section inbetween />
      <Section id="contact">
        <Subtitle>Tem algum projeto em mente? Me contate</Subtitle>
        <div className="mt-8">
          <div className="flex  flex-col gap-8 lg:gap-0 lg:flex-row justify-evenly font-bold text-xl items-center">
            <div className="text-center  w-full lg:w-4/12 ">

              <Link target="_blank" className="flex items-center gap-2 justify-center" href="https://wa.me/+5512981377347">
                <Phone size={30} fill="white" className=" border-1 border border-white rounded-full bg-green-500 text-white p-1.5 " />
                Chamar no WhatsApp
              </Link>
              <div className=" flex mt-3  justify-center gap-4 items-center"><Emphasized>+55 (12) 981377347</Emphasized> <ButtonCopy text="+5512981377347" /></div>
            </div>
            <div className="text-center w-full lg:w-4/12">

              <p>LINKEDIN</p>
              <div className=" flex mt-3  justify-evenly gap-4 items-center"><EmphasizedLink target="_blank" href="https://www.linkedin.com/in/vinicius-henrique-dos-santos-35a955246/">Vinicius Henrique dos Santos</EmphasizedLink> </div>

            </div>
            <div className="text-center  w-full lg:w-4/12">

              <Link target="_blank" className="flex items-center gap-2 justify-center" href="mailto: viniciushenriquesantos2005@gmail.com">
                <Mail />
                Enviar E-mail
              </Link>
              <div className=" flex mt-3  justify-center gap-4 items-center"><Emphasized className=" text-ellipsis    overflow-hidden " >viniciushenriquesantos2005@gmail.com</Emphasized> <ButtonCopy text="viniciushenriquesantos2005@gmail.com" /></div>
            </div>
          </div>

        </div>

      </Section>

      <Section inbetween />
    </div >
  )
}