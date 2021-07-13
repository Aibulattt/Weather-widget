import { useContext, useEffect, useState } from "react"
import { CitiesContext, ICitiesContext } from "../context/citiesContext"
import { LoadingContext } from "../context/loadingContext"

export interface IDataWeather {
    id: string,
    name: string,
    sys: {
        country: string
    }
    wind: {
        speed: number
    },
    dew: string,
    visibility: number,
    main: TMain,
    weather: [
        {
            description:string,
            main: string
        }
    ]
}

type TMain = {
    temp: number,
    humidity: number,
    feels_like: number,
    pressure: number,
}

const urlApi = 'http://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '5858beb8f19ab62fadeb2245f81fb6e1'

export const useCallWeather = () => {
    const [dataWeather, setDataWeather] = useState<IDataWeather[]>([])
    const {cities, setCities, savedCities, setSavedCities} = useContext<ICitiesContext>(CitiesContext)
    const {setLoading} = useContext(LoadingContext)
    
    
    useEffect(() => {
        const state = localStorage.getItem('cities')

        if (state) {
            const citiess = JSON.parse(state)
            setSavedCities(citiess)
            setCities(savedCities)
            
            
        }
    }, [])

    useEffect(() => {

        try {
            // if (savedCities.length) {
                
            //     savedCities.forEach(city => {
            //         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=5858beb8f19ab62fadeb2245f81fb6e1&units=metric`)
            //             .then(res => {
            //                 setLoading(true)
            //                 if (res.ok) {
            //                     return res.json()
            //                 } else throw(new Error)
            //             })
            //             .then(data => {
            //                 setDataWeather(prev => [data, ...prev])
            //                 if (dataWeather.length >= 1) {
            //                     setDataWeather(dataWeather.filter((item, index) => dataWeather.indexOf(item) === index))
            //                 }
            //                 setLoading(false)
            //             })
            //     })
            // } else {
                    cities.forEach(city => {
                        
                        fetch(`${urlApi}${city.city}&appid=${apiKey}&units=metric`)
                            .then(res => {
                                setLoading(true)
                                if (res.ok) {
                                    return res.json()
                                } else throw(new Error)
                            })
                            .then(data => {
                                setLoading(false)
                                setDataWeather(prev => [data, ...prev])
                                if (dataWeather.length >= 1) {
                                    setDataWeather(dataWeather.filter((item, index) => dataWeather.indexOf(item) === index))
                                }
                                
                            })
                    })
            // }
                
        } catch (e) {
            console.log(e);
        }
    }, [cities])

    return [dataWeather]
}