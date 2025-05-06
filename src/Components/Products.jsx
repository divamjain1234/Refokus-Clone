import Product from './Product'
const Products = () => {
  const products=[{title:'arqitel',description:'dolor sit amet consectetur adipisicing elit. Minus unde voluptas alias laudantium aliquam distinctio facilis molestias',live:true,case:false},{title:'TTR',description:'dolor sit amet consectetur adipisicing elit. Minus unde voluptas alias laudantium aliquam distinctio facilis molestias',live:true,case:false},{title:'YIR 2022',description:'dolor sit amet consectetur adipisicing elit. Minus unde voluptas alias laudantium aliquam distinctio facilis molestias',live:true,case:false},{title:'Yahoo!',description:'dolor sit amet consectetur adipisicing elit. Minus unde voluptas alias laudantium aliquam distinctio facilis molestias',live:true,case:true}]
  return (
    <div className='mt-20'>
      {products.map((elem)=><Product val={elem}/>)}
    </div>
  )
}

export default Products