interface SubtitleInterface extends React.AllHTMLAttributes<HTMLDivElement> { }

const Subtitle: React.FC<SubtitleInterface> = ({ className, children, ...rest }) => {

  return (
    <h3 {...rest} className={"lg:text-3xl  text-xl   text-[#ffff66]  font-bold " + className}>{children}</h3>

  )
}
export default Subtitle;