import axios from "axios"
    const api =  import.meta.env.VITE_API_URL
const getProducts = async () => {
    return await axios.get(`${api}/products`)
}


const getCategory = async () => {
    return await axios.get(`${api}/categories`)
    
}

const getProductBySearch  = async (name: string) => {
    return await axios.get(`${api}/products/search?name=${name}`)
}

const getProductByCate  = async (id:string) => {
    return await axios.get(`${api}/products/cate/${id}`)
}
export  {getProducts,getCategory,getProductBySearch,getProductByCate} 