import React from "react";
import './SettCard.scss'

interface ISetCardProps {
    city: string,
    id: string,
    removeCity: (id: string) => void
}

export const SettCard = (props: ISetCardProps) => {
    return (
        <>
            <button 
                className='setcard__btn-burger'
            >
                <span></span>
            </button>
            <p className='setcard__city'>{props.city}</p>
            <button 
                onClick={() => props.removeCity(props.id)}
                className='setcard__btn-del'>
            </button>
        </>
    )
}