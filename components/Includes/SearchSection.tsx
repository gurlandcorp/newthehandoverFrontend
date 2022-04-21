import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";

const SearchSection = () => {

    const propertyType = [
		"Constructed",
		"Non-Constructed",
	]

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
            <div className="search-wrapper p-2 rounded-lg lg:rounded-full">
                <form className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 sm:grid-cols-2 w-full" onSubmit={(e)=>searchSubmit(e)}>
                    <input type="text" placeholder="What are you looking for ?" className="px-3 py-1 w-full lg:col-span-3 rounded-full" value={search.text} onChange={(e)=>setSearch({...search, text: e.target.value})} />
                    <select className="px-3 py-1 w-full lg:col-span-2 rounded-full" onChange={(e)=>setSearch({...search, property_type: e.target.value})}>
                        <option value="">Property Type</option>
                        {
                            propertyType.map((type: any, index: any) => {
                                return <option key={index} value={type}>{type}</option>
                            })
                        }
                    </select>
                    <select className="px-3 py-1 w-full lg:col-span-2 rounded-full" onChange={(e)=>setSearch({...search, city: e.target.value})}>
                        <option value="">All Cities</option>
                        <option value="Dubai">Dubai</option>
                    </select>
                    <div className="flex flex-wrap items-center justify-end text-right w-full text-3xl">
                        <button type="submit" className="w-full rounded-full">Search <span className="mdi mdi-magnify" /></button>
                    </div>
                </form>
            </div>
        </div>
        {/* end of search Bar  */}
        </>
    );
};

export default SearchSection;