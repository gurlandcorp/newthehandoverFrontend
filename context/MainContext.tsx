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
    setLoading: (content: any) => void
}

const context = {
    search: {},
    setSearch: () => {},
    alert: {},
    setAlert: () => {},
    alertMessage: {},
    setAlertMessage: () => {},
    loading: {},
    setLoading: () => {}
}

const MainContext = createContext<contextType>(context);

const MainProvider = ({children}: any) => {

    const [search, setSearch] = useState({
        text: '', city: '', property_type: '', bedrooms: '', bathrooms: ''
    })
    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [loading, setLoading] = useState(false)

    return (
        <MainContext.Provider value={{
            search,
            setSearch,
            alert,
            setAlert,
            alertMessage,
            setAlertMessage,
            loading,
            setLoading
        }}>
            {children}
            <Alert open={alert} setAlert={setAlert} message={alertMessage} />
        </MainContext.Provider>
    )
}

export { MainProvider, MainContext }