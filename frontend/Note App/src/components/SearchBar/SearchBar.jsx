import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <>
            <div className="bg-gray-100 flex  items-center rounded-lg px-3 py-2 w-full max-w-lg">
                <input type="search"
                    placeholder="Search Note"
                    className="flex-1 w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
                />
                <Search className="text-gray-400 w-5 h-5" />
            </div>

        </>
    )
}
