import React, { useEffect, useState } from 'react'

export type IAppContext = {
    isLogged: boolean;
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
    hasCurriculo: boolean;
    setHasCurriculo: React.Dispatch<React.SetStateAction<boolean>>;
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
}

export const AppContext = React.createContext<IAppContext>({} as IAppContext)

export const AppProvider: React.FC = ({ children }) => {

    const [name, setName] = useState('')

    const [isLogged, setIsLogged] = useState<boolean>(false)

    const [hasCurriculo, setHasCurriculo] = useState(false)

    return (
        <AppContext.Provider
            value={{
                isLogged,
                setIsLogged,
                hasCurriculo,
                setHasCurriculo,
                name,
                setName
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useApp = (): IAppContext => {
    const appContext = React.useContext<IAppContext>(AppContext);
    return appContext;
}