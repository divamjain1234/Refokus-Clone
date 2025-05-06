const Stripe = ({val}) => {
  return (
    <div className="px-3 h-14 py-3 w-[16.66%] border-t-[1.2px] border-b-[1.2px] border-r-[1.8px] border-zinc-700 flex justify-between items-center text-black bg-white ">
      <img className="h-5" src={val.url} />
      <span className="font-semibold">{val.number}</span>
    </div>
  )
}

export default Stripe
