import React from 'react'
import { useForm } from '../../Hook/useForm'
import './search.css'

export const Search = ({setLocation}) => {

    const [formValues, handleFormValues] = useForm({location: ''})
    const {location} = formValues
    

    const handleClick = (e) => {
        
        e.preventDefault()
        setLocation(location)
    }
    

    return (
        <section className='search-section flex'>
            <form action="" className='flex flex-clm'>
                <input 
                    type="text" 
                    name='location' 
                    value={location} 
                    onChange={handleFormValues} 
                    placeholder='Buscar Ubicacion'
                />

                <button onClick={handleClick }>Buscar</button>
            </form>
        </section>
    )
}
