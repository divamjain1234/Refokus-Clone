import {motion} from "framer-motion"
const Marquee = ({imageurl,direction}) => {
  return (
    <div className="w-full bg-white flex overflow-hidden">
<motion.div initial={{x:direction==="left"?"0":"-100%"}} animate={{x:direction==="left"?"-100%":"0"}} transition={{ease:"linear",duration:20,repeat:Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40">{imageurl.map((url,index)=>(<img src={url}/>))} </motion.div>

<motion.div initial={{x:direction==="left"?"0":"-100%"}} animate={{x:direction==="left"?"-100%":"0"}} transition={{ease:"linear",duration:20,repeat:Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40">{imageurl.map((url,index)=>(<img src={url}/>))} </motion.div>

    </div>
    
  )
}

export default Marquee