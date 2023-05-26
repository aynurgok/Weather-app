import { createContext, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([])

    const api = import.meta.env.VITE_REACT_APP_API;
    const onSubmit = async (e) => {
      e.preventDefault();
    
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api}&units=metric&lang=tr`;
    
      await axios(url)
        .then(response => {
          setResult(response.data)
        })
        
        .catch((error) => {
          console.log(error);
        });
    };
    
    const data = {
      search,
      setSearch,
      result,
      setResult,
      onSubmit
    }
    return(
        <GlobalContext.Provider value = {data}>
            {children}
        </GlobalContext.Provider>
      );
}



export default GlobalProvider
