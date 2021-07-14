import React, { createContext, useEffect, useState } from "react"
import { useCurrentGeo } from "../Hooks/useCurrentGeo"
import {nanoid} from 'nanoid'

export interface ICitiesContext {
    cities: TCityy[],
    setCities: (city: any) => void,
}

export type TCityy = {
    city: ReturnType<typeof useCurrentGeo>,
    id: string,
}

export const CitiesContext = createContext<ICitiesContext>({
    cities: [],
    setCities: () => {},
})

export const CitiesContextProvider = ({children} : {children: React.ReactNode}) => {
    const city = useCurrentGeo()
    
    const [cities, setCities] = useState([{city, id: nanoid()}])

    useEffect(() => {
        setCities([{city, id: nanoid()}])
    }, [city])

    return (
        <CitiesContext.Provider value={{cities, setCities}}>
            {children}
        </CitiesContext.Provider>
    )
}