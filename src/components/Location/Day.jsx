import React from 'react'
import { getWheatherImg } from '../../Helper/getWheatherImg'

export const Day = ({tempmax, tempmin, name, symbol_description,  i,handleDaySelection={handleDaySelection}}) => {
    return (
        <article className='day flex flex-clm' onClick={ (params) => {
            handleDaySelection(i)
        }
        }>
            <p>{name}</p>
           <img src={ getWheatherImg('dia', symbol_description)} alt={symbol_description    }  />
            <h3>{symbol_description}</h3>
           <div>
           <span className='tem tem-max'>{tempmax}</span> 
                    /
            <span className='tem tem-min'>{tempmin}</span>
           </div>
        </article>
    )
}
