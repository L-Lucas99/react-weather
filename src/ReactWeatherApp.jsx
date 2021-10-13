import React, { createContext, useEffect, useReducer } from 'react'
import { favoriteReducer } from './FavoriteReducer';
import { getLocalStorage, upDateLocalStorage } from './Helper/localSotorag'
import { MainRouterApp } from './Router/MainRouterApp'



const init = () => {
    return  JSON.parse(localStorage.getItem('Favorite')) || [];
}


export const FavoriteContext = createContext(null);

export const ReactWeatherApp = () => {

    const [list, dispatch] = useReducer(favoriteReducer, [], init)

    useEffect(() => {
        localStorage.setItem('Favorite',JSON.stringify(list))
    }, [list])

    return (
        <div>

            <FavoriteContext.Provider value={ {
            list,
            dispatch
            
        } }>
                <MainRouterApp />

            </FavoriteContext.Provider>
        </div>
    )
}
