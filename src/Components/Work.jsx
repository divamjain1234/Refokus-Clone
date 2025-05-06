/* eslint-disable no-unused-vars */
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react";
const Work = () => {
    const[images,setimages]=useState([{url:'https://images.pexels.com/photos/17484975/pexels-photo-17484975/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-can-help-humans-to-understand-the-complexity-of-biology-it-was-created-by-artist-khyati-trehan-as-part.png?auto=compress&cs=tinysrgb&w=600',top:'50%',left:'50%',isActive:false},
      {url:'https://img.freepik.com/free-photo/adorable-3d-character-children_23-2150473679.jpg?ga=GA1.1.2037263848.1741267148&semt=ais_hybrid',top:'60%',left:'55%',isActive:false},
      {url:'https://img.freepik.com/free-photo/3d-illustration-hands-with-heart-white_107791-15027.jpg?ga=GA1.1.2037263848.1741267148&semt=ais_hybrid',top:'56%',left:'44%',isActive:false},
      {url:'https://img.freepik.com/free-photo/3d-rendering-yeti_52683-102395.jpg?ga=GA1.1.2037263848.1741267148&semt=ais_hybrid',top:'45%',left:'56%',isActive:false},{url:'https://images.pexels.com/photos/11798029/pexels-photo-11798029.jpeg?auto=compress&cs=tinysrgb&w=600',top:'60%',left:'53%',isActive:false}
  ])
    const { scrollYProgress } =  useScroll();
    scrollYProgress.on("change",(data)=>{
        function imageshow(arr){
          setimages((prev)=>(
            prev.map((item,index)=>arr.indexOf(index)===-1?(
              {...item,isActive:false}
            ):{...item,isActive:true})
          ))
        }
        switch(Math.floor(data*100)){
          case 0:
            imageshow([]);
            break;
          case 1:
            imageshow([0]);
            break;
          case 4:
            imageshow([0,1]);
            break;
          case 6:
            imageshow([0,1,2]);
            break;
          case 12:
            imageshow([0,1,2]);
            break;
           }
    })
    
  return (
    <div className="w-full mt-10">
        <div className="relative max-w-[1000px] mx-auto text-center">
            <h1 className="text-[30vw] leading-none tracking-tight font-medium select-none text-white">work</h1>           
        <div className="absolute top-0 w-full h-full">
            {images.map((elem)=>(elem.isActive && (<img className="w-60 absolute -translate-x-[50%] -translate-y-[50%] rounded-lg" src={elem.url} style={{top:elem.top,left:elem.left}} />)))}
        </div>
        </div>
    </div>
  )
}

export default Work