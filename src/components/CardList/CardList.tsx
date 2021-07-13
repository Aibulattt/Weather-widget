import React, { useContext } from 'react'
import { IDataWeather, useCallWeather } from '../../Hooks/useCallWeather'
import { CardWeather } from '../CardWeather/CardWeather'
import { Link } from 'react-router-dom'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner";
import './CardList.scss'
import { LoadingContext } from '../../context/loadingContext'

export const CardList = () => {
    const [dataWeather] = useCallWeather()
    const {loading} = useContext(LoadingContext)

    if (loading) {
        return (
            <Loader
            type="TailSpin"
            color="#000"
            height={50}
            width={50}
            timeout={1000000} 
        />
        )
    }
    
    return (
        <ul className='card-list'>
            <li className='button-settings'>
                <Link to='/settings'>
                    <button 
                        className='card-weather__btn-settings'
                    >
                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px"><path fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="2" d="M16 12A4 4 0 1 0 16 20A4 4 0 1 0 16 12Z"/><path fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="2" d="M25,16c0-0.677-0.081-1.335-0.223-1.97l2.615-2.298l-2-3.464l-3.304,1.118c-0.966-0.89-2.122-1.578-3.407-1.979L18,4h-4l-0.681,3.406c-1.286,0.401-2.441,1.089-3.407,1.979L6.608,8.268l-2,3.464l2.615,2.298C7.081,14.665,7,15.323,7,16s0.081,1.335,0.223,1.97l-2.615,2.298l2,3.464l3.304-1.118c0.966,0.89,2.122,1.578,3.407,1.979L14,28h4l0.681-3.406c1.286-0.401,2.441-1.089,3.407-1.979l3.304,1.118l2-3.464l-2.615-2.298C24.919,17.335,25,16.677,25,16z"/></svg>
                    </button>
                </Link>
            </li>
            {dataWeather.map((item: IDataWeather) => {
                
                const {description} = item.weather[0]
                const {main} = item.weather[0]
                
                return (
                    <li className='card-lst__item' key={item.id}>
                        <CardWeather
                            city={item.name}
                            country={item.sys.country}
                            deg={item.main.temp}
                            genereal={item.main.feels_like}
                            description={description}
                            main={main}
                            wind={item.wind.speed}
                            pressure={item.main.pressure}
                            humidity={item.main.humidity}
                            dew='0C'
                            visibility={item.visibility}
                        />
                    </li>
                )
            })}
            
        </ul>
    )
}