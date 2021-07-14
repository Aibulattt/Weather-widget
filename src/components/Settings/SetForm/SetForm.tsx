import React, { FC, useContext, useState } from 'react'
import { CitiesContext, ICitiesContext } from '../../../context/citiesContext'
import {nanoid} from 'nanoid'
import './SetForm.scss'

export const SetForm: FC = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const {setCities, cities} = useContext<ICitiesContext>(CitiesContext)

    const addCity = () => {
        setCities([...cities, {city: inputValue, id: nanoid()}])
    }

    return (
        <form className='set__form'>
            <label htmlFor="newCity">Add Location:</label>
                <div className='set__input-elem'>
                    <input 
                        className='set__input'
                        id='newCity' 
                        name='newCity' 
                        type="text" 
                        placeholder='City Name'
                        value={inputValue}
                        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setInputValue(ev.target.value)}
                    />
                    <button
                        onClick={() => addCity()}
                        className='set__btn-add'
                        type='button'
                    >
                    </button>
                </div>
        </form>
    )
}