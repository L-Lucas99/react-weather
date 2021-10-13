import React from 'react'
import { CardSearch } from './CardSearch'

export const ListSearch = ({locations,location, loading}) => {
    return (
        <section className='list-search'>
            <h2>Lista de Busqueda de : {location}</h2>
            <hr />
            <div className='flex flex-wr'>
            {
                (!loading)
                ?locations.map(location => (
                    <CardSearch key={location.id}{...location}/>
                ))
                :<p>Loading...</p>
            }
            </div>
            
        </section>
    )
}
