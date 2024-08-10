import { useEffect, useState } from "react"
import { Category } from "../interface/category"
import { Link, useNavigate } from "react-router-dom"
import { getCategory } from "../api/productAPI"

const Header = () => {
    const [c, setC] = useState<Category[]>([])
    const [input, setInput] = useState("");
    const navigate = useNavigate()
    const onSearch = () => {
        if(input.trim()){

            navigate(`/?q=${input}`)
        }
        setInput("")
    }


    const handleChange = (value: string) => {
        setInput(value);
       

    };
    useEffect(() => {
    const fetchtCate = async () => {
        try {
            const resp = await getCategory()
            setC(resp.data)
        } catch (error) {
            console.log(error);

        }
    }
        fetchtCate()
    }, [])
    return (
        <div className="w-full flex justify-center gap-20 py-5 text-lg">
            {c.map(c => (
                <Link key={c._id} to={`/products/${c._id}`}>
                    <div >{c.name}</div>
                </Link>
            ))}
            <Link to={'/'}>ALL</Link>
            <form className="w-[300px]">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                    </div>
                    <input
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                    type="search" id="default-search" className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"   />
                    <button onClick={onSearch} type="button" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                </div>
            </form>
        </div>
    )
}

export default Header