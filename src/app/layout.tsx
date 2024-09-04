import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";
import Provider from "./provider";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "Vinicius Henrique dos Santos",
  description: "Meu portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="pt-br">
      <Provider >
        <body className={roboto.className + 'overflow-x-hidden dark:bg-slate-800  transition-colors      w-full bg-sky-500  m-auto  text-slate-300 '}>

          {children}
        </body>
      </Provider>

    </html>
  );
}
