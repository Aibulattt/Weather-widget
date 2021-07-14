import React from 'react'
import './CardWeather.scss'

interface ICardWeatherProps {
    city: string,
    deg: number,
    genereal: number,
    wind: number,
    pressure: number,
    humidity: number,
    visibility: number,
    description: string,
    main: string,
    country: string
}

export const CardWeather = (props: ICardWeatherProps) => {
    return (
        <ul className='card-weather'>
            <li className='card-weather__item'>
                <p className='card-weather__city'>{props.city}, {props.country}</p>
            </li>
            <li className='card-weather__item'>
                <img className='card-weather__img' src="../../../assets/weather-img.svg" alt="weather-img" />
                <p className='card-weather__deg'>{props.deg}&deg;C</p>
            </li>
            <li className='card-weather__item'>
                <p className='card-weather__general'>Feels Like {props.genereal} &deg;C. 
                    <span className='text-uppercase'> {props.description}.</span>
                    <span> {props.main}.</span>
                </p>
            </li>
            <li className='card-weather__item'>
                <p className='card-weather__wind'>
                    {props.wind} m/s
                </p>
                <p className='card-weather__pressure'>{props.pressure}hPa</p>
            </li>
            <li className='card-weather__item'>
                <p className='card-weather__hummidity'>hummidity:{props.humidity}%</p>
                <p className='card-weather__visibillity'>Visibillity: {props.visibility/1000}km</p>
            </li>
        </ul>
    )
}