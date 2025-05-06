import { IoIosReturnRight } from "react-icons/io";
const Button = ({title = 'Get started'}) => {
  return (
    <div className="px-4 py-2 bg-zinc-100 text-black
     rounded-full min-w-40 max-w-42  flex items-center justify-between">
     <span className="text-sm font-medium">{title}</span>   
     <IoIosReturnRight />
        </div>
  )
}

export default Button