import React, {createContext, useState} from 'react'

 export const Countries = createContext(null);
const CountriesProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);
    const [users, setUsers] = useState([]);

    const data = {
        setDarkMode,
        darkMode,
        users,
        setUsers,
    }
  return (
    <ModeContext.Provider value={data}>
    {children}
    </ModeContext.Provider>
  )
}

export default modelContext