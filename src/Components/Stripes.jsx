import Stripe from "./Stripe"
const Stripes = () => {
    const data=[{url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a791f752d7eb2b20280_Keystone-black.svg',number:48},{url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg',number:24},{url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg',number:12},{url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b842910de1189f26accda_jologo-onLight.svg',number:68},{url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6796cbd90e91519a09b8b326_awwwards.svg',number:43},{url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6796cbd97af8fb6fc9bbb4c6_cssda.svg',number:32}]
  return (
    <div className="flex items-center justify-between mt-24">
      {data.map((elem)=>(
        <Stripe val={elem}/>
      ))}
    </div>
  )
}

export default Stripes