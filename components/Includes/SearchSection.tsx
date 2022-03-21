import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";

const SearchSection = () => {

    const {search, setSearch} = useContext(MainContext)
    const router = useRouter()
    const searchSubmit = (e: any) => {
        e.preventDefault()
        router.push(`/opportunities?propertyType=${search.property_type}&city=${search.city}&text=${search.text}`)
    }

    return (
        <>
        {/* Start of Search Bar  */}
        <div className="container-search py-10 mx-auto">
            <div className="search-wrapper p-4">
                <form className="gap-4 grid grid-cols-1 lg:grid-cols-7 sm:grid-cols-2 w-full" onSubmit={(e)=>searchSubmit(e)}>
                    <input type="text" placeholder="What are you looking for ?" className="p-3 w-full col-span-2" value={search.text} onChange={(e)=>setSearch({...search, text: e.target.value})} />
                    <select className="p-3 w-full col-span-2" onChange={(e)=>setSearch({...search, property_type: e.target.value})}>
                        <option value="">Property Type</option>
                    </select>
                    <select className="p-3 w-full col-span-2" onChange={(e)=>setSearch({...search, city: e.target.value})}>
                        <option value="">All Cities</option>
                        <option value="Dubai">Dubai</option>
                    </select>
                    <div className="flex flex-wrap items-center justify-end text-right w-full">
                        <button type="submit" className="px-4 py-2 w-full rounded-xl"><span className="mdi mdi-magnify" /> Search </button>
                    </div>
                </form>
            </div>
        </div>
        {/* end of search Bar  */}
        </>
    );
};

export default SearchSection;