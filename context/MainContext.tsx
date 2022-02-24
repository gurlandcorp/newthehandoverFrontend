import { createContext, useState } from "react";

type contextType = {
    search: any,
    setSearch: (content: any) => void
}

const context = {
    search: {},
    setSearch: () => {}
}

const MainContext = createContext<contextType>(context);

const MainProvider = ({children}: any) => {

    const [search, setSearch] = useState({
        text: '', city: '', property_type: '', bedrooms: '', bathrooms: ''
    })

    return (
        <MainContext.Provider value={{
            search,
            setSearch
        }}>
            {children}
        </MainContext.Provider>
    )
}

export { MainProvider, MainContext }