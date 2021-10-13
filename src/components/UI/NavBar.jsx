import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className='flex'>
            <img src="../../../public/assets/sol.png" alt="" />
            <Link to='/'>
                ReactWeather
            </Link>
        </nav>
    )
}
