import { createContext, useState } from "react";
import Alert from "../components/Shares/Components/Alert";

type contextType = {
    search: any,
    setSearch: (content: any) => void,
    alert: any,
    setAlert: (content: any) => void,
    alertMessage: any,
    setAlertMessage: (content: any) => void,
}

const context = {
    search: {},
    setSearch: () => {},
    alert: {},
    setAlert: () => {},
    alertMessage: {},
    setAlertMessage: () => {}
}

const MainContext = createContext<contextType>(context);

const MainProvider = ({children}: any) => {

    const [search, setSearch] = useState({
        text: '', city: '', property_type: '', bedrooms: '', bathrooms: ''
    })
    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')

    return (
        <MainContext.Provider value={{
            search,
            setSearch,
            alert,
            setAlert,
            alertMessage,
            setAlertMessage
        }}>
            {children}
            <Alert open={alert} setAlert={setAlert} message={alertMessage} />
        </MainContext.Provider>
    )
}

export { MainProvider, MainContext }