import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "Vinicius Henrique dos Santos",
  description: "Portfólio de desenvolvedor de Vinicius Henrique dos Santos",
  icons: {
    icon: '/images/icon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="pt-br">
      <body className={roboto.className + ' bg-slate-800  transition-colors      w-full m-auto  text-slate-300 '}>

        {children}
      </body>


    </html>
  );
}
