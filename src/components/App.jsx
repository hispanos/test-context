import React, { createContext, useState } from 'react'
import '../style.scss'
import Dashboard from './dashboard/Dashboard'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

export const AppContext = createContext({})

const App = () => {

    const [theme, setTheme] = useState("pink")

    return (
        <AppContext.Provider value={{
            theme,
            setTheme,
        }}>
            <Header />
            <div className="main">
                <Sidebar />
                <Dashboard />
            </div>
        </AppContext.Provider>
    )
}

export default App