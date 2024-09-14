interface EmphasizedText extends React.AllHTMLAttributes<HTMLDivElement> { }

const Emphasized: React.FC<EmphasizedText> = ({ className, children, ...rest }) => {
  return (
    <span {...rest} className={"text-[#c0c039] font-extrabold " + className}>{children}</span>
  )
}
export default Emphasized;