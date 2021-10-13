import React    ,                             { useContext } from 'react'
import { flagToCountry, getFlagsInText } from 'emoji-flags-to-country'
import { Link }                          from 'react-router-dom'
import { getWheatherImg }                from '../../Helper/getWheatherImg'
import { useFetch }                      from '../../Hook/useFetch'
import './search.css'
import { FavoriteContext } from '../../ReactWeatherApp'
export const CardSearch = ({nivel,nombre ,id, bandera }) => {

    const { list, dispatch } = useContext(FavoriteContext)
    let   url                = `http://api.meteored.cl/index.php?api_lang=cl&localidad=${id}&affiliate_id=ac26h4bfylb9&v=3.0`
    const [fetchData]        = useFetch(url)
    let   time               = 'Loading...'
    
    let src

   


    const changeImgSrc = () => {
        (isFavorite())
            ? src = '../../../public/assets/heart-true.png'
            : src = '../../../public/assets/heart-false.png'
    }

    const isFavorite = () => {
        return list.includes(id)
    }

    if (fetchData.data != null) {
        time = fetchData.data.day[1].symbol_description
        
        if (nombre == '') {
            nombre = fetchData.data.location.split('[')[0]
        }
        changeImgSrc()
    }


    const hanldeClickHeart = () => {
        let type
        (isFavorite()) ? type = 'remove' : type = 'add';
        const          action = {
            type,
            payload: id
        }
        dispatch(action)
    }


    return (

        <article className = 'flex flex-clm card-Search' data-id = {id}>

            <h4>{nombre}</h4>

            {
                (nivel === 4 || nivel === 3)

                    ? <>
                        <img src = {getWheatherImg('dia', time)} alt = "" />
                        <h4>{time}</h4>
                        <img
                            className = 'heart'
                            src       = {src}
                            alt       = ""
                            onClick   = {hanldeClickHeart}
                        />
                        <Link to = {`./location/${id}`}>
                            Ver mas..
                        </Link>
                    </>
                    : <> <img src = {`https://flagcdn.com/${flagToCountry(bandera).toLowerCase()}.svg`} alt = "" />

                        <span>Pais</span>
                    </>
            }

        </article>
    )
}
