import { createContext, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([])
    const [load, setLoad] = useState(false)

    const api = import.meta.env.VITE_REACT_APP_API;
    const onSubmit = async (e) => {
      e.preventDefault();
    
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api}&units=metric&lang=tr`;
    
      await axios(url)
        .then(response => {
          setResult(response.data)
        })
        setLoad(true)
       
    };
    
    const data = {
      search,
      setSearch,
      result,
      setResult,
      onSubmit,
      load,
      setLoad
    }
    return(
        <GlobalContext.Provider value = {data}>
            {children}
        </GlobalContext.Provider>
      );
}



export default GlobalProvider
