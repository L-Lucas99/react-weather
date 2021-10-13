import React, { useContext, useEffect, useState } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router'
import { useFetch } from '../../Hook/useFetch'
import { ListSearch } from '../Search/ListSearch'
import { Search } from '../Search/Search'
import { FavoriteContext } from '../../ReactWeatherApp';
import { FavoriteList } from './FavoriteList';

export const Home = ({ history }) => {


    const locationRoute = useLocation()
    const { q = 'chile' } = queryString.parse(locationRoute.search)
    const [location, setLocation] = useState(q)

 
    let url = `https://www.meteored.cl/peticionBuscador.php?lang=cl&texto=${encodeURI(location)}`
    const [fetchData] = useFetch(url)



    useEffect(() => {
        history.push(`?q=${location}`)
    }, [location])




    return (
        <section className='flex flex-clm'>

            <Search setLocation={setLocation} />
            <h2>Lista de Favoritos</h2>
            <hr />
            <FavoriteList />

           {
                (fetchData.data === null)
                    ? <p>Loading...</p>
                    : <ListSearch
                        location={location}
                        loading={fetchData.loading}
                        locations={fetchData.data.localidad}
                    />
            }

        </section>
    )
}
