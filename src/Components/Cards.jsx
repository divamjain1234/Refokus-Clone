import Card from './Card'
const Cards = () => {
  return (
    <div className="w-full">
    <div className="max-w-[1000px] py-20 mx-auto text-white flex gap-2">
      <Card width={"basis-1/3"} start={false} para={true}/>
      <Card width={"basis-2/3"} start={true} para={false} />
    </div>
    </div>
  )
}

export default Cards