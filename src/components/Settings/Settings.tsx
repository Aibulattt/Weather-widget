import React from 'react'
import { SettListCities } from './SettListCities/SettListCities'
import { Link } from 'react-router-dom'
import { SetForm } from './SetForm/SetForm'
import './Settings.scss'

export const Settings = () => {
    return (
        <div>
            <div className='set__top'>
                <h2 className='set__title'>Settings</h2>
                <Link to='/'>
                    <button className='set__btn-close'>
                        <span></span>
                    </button>
                </Link>
            </div>
            <SettListCities />
            <SetForm />
        </div>
    )
}