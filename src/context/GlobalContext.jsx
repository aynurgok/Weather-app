import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
    const [search, setSearch] = useState("")

    const data = {
      search,
      setSearch
    }
    return(
        <GlobalContext.Provider value = {data}>
            {children}
        </GlobalContext.Provider>
      );
}
export default GlobalProvider
