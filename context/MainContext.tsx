import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { createContext, useState } from "react";
import Alert from "../components/Shares/Components/Alert";

type contextType = {
    search: any,
    setSearch: (content: any) => void,
    alert: any,
    setAlert: (content: any) => void,
    alertMessage: any,
    setAlertMessage: (content: any) => void,
    loading: any,
    setLoading: (content: any) => void,
    logout: () => void
}

const context = {
    search: {},
    setSearch: () => {},
    alert: {},
    setAlert: () => {},
    alertMessage: {},
    setAlertMessage: () => {},
    loading: {},
    setLoading: () => {},
    logout: () => {}
}

const MainContext = createContext<contextType>(context);

const MainProvider = ({children}: any) => {

    const [search, setSearch] = useState({
        text: '', city: '', property_type: '', bedrooms: '', bathrooms: '', minPrice: 0, maxPrice: 0
    })
    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const router = useRouter()
    const logout = () => {
        Cookies.remove('token')
        Cookies.remove('user')
        router.push('/sign-in')
    }

    return (
        <MainContext.Provider value={{
            search,
            setSearch,
            alert,
            setAlert,
            alertMessage,
            setAlertMessage,
            loading,
            setLoading,
            logout
        }}>
            {children}
            <Alert open={alert} setAlert={setAlert} message={alertMessage} />
        </MainContext.Provider>
    )
}

export { MainProvider, MainContext }