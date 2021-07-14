import React, { FC, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CitiesContextProvider } from '../context/citiesContext'
import { LoadingContext } from '../context/loadingContext'
import { CardList } from './CardList/CardList'
import { Settings } from './Settings/Settings'
import './style.scss'

export const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  return (
    <CitiesContextProvider>
      <LoadingContext.Provider value={{loading, setLoading}}>
      <div className='wrapper-weather'>
        <Router>
          <Switch>
            <Route exact path='/' component={CardList} />
            <Route path='/settings' component={Settings} />
          </Switch>
        </Router>
      </div>
      </LoadingContext.Provider>
    </CitiesContextProvider>
  )
}

