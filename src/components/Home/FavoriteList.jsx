import React, { useContext } from 'react'
import { useFetch } from '../../Hook/useFetch'
import { FavoriteContext } from '../../ReactWeatherApp'
import { CardSearch } from '../Search/CardSearch'

export const FavoriteList = () => {

    const { list, dispatch } = useContext(FavoriteContext)


    return (
        <section className='favorite-list flex'>
            {
                list.map(fv => (
                    <CardSearch key={fv} nombre='' id={fv} nivel={3}/>
                ))
            }
        </section>
    )
}
