import { AllHTMLAttributes, ReactNode } from "react";

interface SectionInterface extends React.AllHTMLAttributes<HTMLDivElement> {
  inbetween?: boolean
}
const Section: React.FC<SectionInterface> = ({ children, inbetween, ...rest }) => {
  return (
    <div {...rest} className="w-full bg-section rounded-sm text-lg px-0 lg:px-2 m-auto    text-white">
      {inbetween ?

        <div className="h-20"></div>
        : <div className=" border-2 border-sky-700 lg:w-11/12  w-[95%] rounded-lg m-auto  p-4   bg-sky-950  bg-opacity-70 " >
          {children}
        </div>
      }
    </div>
  )
}
export default Section;