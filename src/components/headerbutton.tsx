
interface HeaderButtonInterface extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }

const HeaderButton: React.FC<HeaderButtonInterface> = ({ children, className, ...rest }) => {

  return (
    <a {...rest} className={"transition-all hover:scale-105 hover:bg-opacity-85 w-full  hover:border-white  rounded-lg mb-5 max-w-[500px] border-2 text-center border-sky-700 bg-sky-950  bg-opacity-50  text-xl lg:text-2xl font-bold tracking-[0.5rem] text-white py-2 px-3 " + className}>{children}</a>

  )
}
export default HeaderButton;