import Link from "next/link"

interface EmphasizedLinkInterface extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }

const EmphasizedLink: React.FC<EmphasizedLinkInterface> = ({ children, className, href, ...rest }) => {

  return (
    <Link href={href ? href : ""} {...rest} className={"text-[#c0c039] font-extrabold underline " + className} >{children}</Link>
  )
}
export default EmphasizedLink;