import Button from "./Button"
const Product = ({val}) => {
  return (
    <div className="py-20 w-full text-white">
        <div className="max-w-[1000px] mx-auto flex items-center justify-between ">
            <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
            <div className="dets w-1/3">
                <p className="mb-10">{val.description}</p>
                <div className="flex items-center gap-5">
                  {val.live && <Button/>}
                  {val.case && <Button title='case study'/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product