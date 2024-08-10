import { useEffect, useState } from "react"
import { Product } from "../interface/product"
import { useParams, useSearchParams } from "react-router-dom"
import { getProductByCate, getProductBySearch, getProducts } from "../api/productAPI"

const ProductList = () => {
    const [p, setP] = useState<Product[]>([])
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();

  const q = searchParams.get("q");

const [l, setL] = useState(false)
  useEffect(() => {
    const fetcheProduct = async () => {
        setL(true)
        try {
        let allProducts;
            if(categoryId) {
                allProducts = await getProductByCate(categoryId)
                setP(allProducts.data.pro)
            }
            else if(q) {
                allProducts = await getProductBySearch(q)
                setP(allProducts?.data?.allPro) 
            }
            else {
                allProducts = await getProducts()
                setP(allProducts.data.result)
            }
            
        } catch (error) {
            console.log(error);
            
        }
        setL(false)
    }

        fetcheProduct()
    },[categoryId,q])

    if(l == true) return (<div>Loading ...</div>)
  return (
    <div className="w-full max-w-[1200px] py-5 mx-auto my-0 ">
        <div className="grid grid-cols-4 gap-x-6 gap-y-10">
        {p?.map((product) => (
            <a key={product._id}  className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                alt={product.img}
                src={`${import.meta.env.VITE_API_IMAGES}/${product.img}`}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.material}</p>

          </a>
        ))}
        </div>
    </div>
  )
}

export default ProductList