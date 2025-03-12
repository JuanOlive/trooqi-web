import { Search } from "lucide-react"

export const InputSearch = () => {

    return (
        <div className="flex items-center">
        <input type="text" className="shadow-md rounded-l-xl p-2 px-4 w-96 outline-none focus:bg-[#fff8e7] bg-[#fefcf6] transition-all duration-300" alt="Pesquisar"/>
        <button className="bg-white p-2 rounded-r-xl shadow-md text-gray-500"><Search/></button>
        </div>
    )

}