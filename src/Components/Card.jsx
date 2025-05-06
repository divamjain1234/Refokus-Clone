import { IoIosArrowRoundForward } from "react-icons/io";
const Card = ({width,start,para,}) => {
  return (
   <div className={`${width} bg-zinc-800 rounded-xl p-5 min-h-[28rem] flex justify-between flex-col hover:bg-violet-600`}>
    <div className="w-full">
    <div className="w-full flex items-center justify-between">
      <h1>One heading</h1> 
      <IoIosArrowRoundForward/>
    </div>
      <h1 className="mt-5 text-3xl font-medium">whatever heading</h1>
    </div>

<div className="down w-full">
  {start&&(
    <>
     <h1 className="font-semibold text-6xl tracking-tight leading-none">Start a project</h1>
     <button className="rounded-full border-[1px] border-zinc-50 py-2 px-5 mt-5 ">Contact us</button>
    </>
   )}
{para&&(<>
  <p className="text-sm text-zinc-500 font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
</>)}
</div>

   </div>
  )
}

export default Card