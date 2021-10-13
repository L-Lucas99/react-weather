import React from 'react'
import { getWheatherImg } from '../../Helper/getWheatherImg'

export const Pronostico = ({interval,symbol_description, temp}) => {
    return (
        <article className='flex pronostico'>
            <p>{interval} hrs</p>
            <img src={ getWheatherImg('dia', symbol_description)} alt={symbol_description    }  />
            <p>{symbol_description}</p>
            <p className='tem-max'>{temp}</p>
        </article>
    )
}
