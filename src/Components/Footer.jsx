
const Footer = () => {
  return (
    <div className="w-full text-white">
        <div className="w-[1000px] mx-auto py-10 gap-32 flex">
            <div className="basis-1/2">
            <h1 className="text-[9rem] font-semibold leading-none tracking-tight" >refokus.</h1>
            </div>
            <div className="basis-1/2 flex gap-5">
            <div className="basis-1/3">
                <h4 className="mb-7 text-zinc-500 capitalize">Socials</h4>
                {['instagram','twitter (x?)','linkedln'].map((elem)=><a className="block text-zinc-600 mt-2 text-sm capitalize">{elem}</a>)}
            </div>
            <div className="basis-1/3">
                <h4 className="mb-7 text-zinc-500 capitalize">Socials</h4>
                {['instagram','twitter (x?)','linkedln'].map((elem)=><a className="block text-zinc-600 mt-2 text-sm capitalize">{elem}</a>)}
            </div>
            <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit.</p>
           <img className="mt-8" src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"></img>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer