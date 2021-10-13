import React from 'react'
import { Pronostico } from './Pronostico';

export const Pronosticos = ({hours, name}) => {
    
    return (
        <section className='flex-clm flex pronosticos'>
            <h3>Pronosticos del dia: {name}</h3>
            {
                Object.values(hours).map(hour => (
                    <Pronostico key={hour.interval} {...hour}/>
                ))
            }
        </section>
    )
}
