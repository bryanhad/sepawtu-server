import { GoSearch } from "react-icons/go"
import Button from "../Button"

export default function FilterSearch({ placeholder, handler }) {
    return (
        <form className="flex gap-3 flex-[1]" onSubmit={(e) => handler(e)}>
            <div className="px-2 flex-[1] py-1 flex gap-3 text-slate-500 items-center rounded-md border">
                <label htmlFor="searchBar" className="p-2">
                    <GoSearch />
                </label>
                <input
                    id="searchBar"
                    name="name"
                    type="text"
                    className="flex-[1] p-2"
                    size={1}
                    placeholder={placeholder}
                />
            </div>
            <Button type="submit" color="primary" className="px-4">
                SEARCH
            </Button>
        </form>
    )
}
