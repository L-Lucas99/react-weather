import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getWheatherImg } from '../../Helper/getWheatherImg';
import { useFetch } from '../../Hook/useFetch'
import './city.css'
import { Days } from './Days';
import { Pronosticos } from './Pronosticos';

export const city = () => {

    const { id } = useParams();
    const [daySelect, setDaySelect] = useState([])

    let url = `http://api.meteored.cl/index.php?api_lang=cl&localidad=${id}&affiliate_id=ac26h4bfylb9&v=3.0`
    const [fetchData] = useFetch(url)
    let time = 'Loading...'
    let nombre = 'Loading...'
    let nombre2 = 'Loading...'
    let temMax = 'loading...'
    let temMin = 'loading...'
    let days

    console.log(fetchData);

    useEffect(() => {
        if (fetchData.data != null) {
            setDaySelect(fetchData.data.day[1])
            console.log(daySelect);
        }
    }, [fetchData.data])

    if (fetchData.data != null) {
        
        time = fetchData.data.day[1].symbol_description
        nombre = fetchData.data.location.split('[')[0]
        nombre2 = fetchData.data.location.split(';')
        nombre2 = nombre2[1].split(']')[0]
        temMax = fetchData.data.day[1].tempmax
        temMin = fetchData.data.day[1].tempmin
        days = fetchData.data.day

        

    }
    

    const handleDaySelection = (i) => {

        setDaySelect(days[i + 1])

    }



    return (
        <section className='flex flex-clm dia'>
            {
                (fetchData.data != null)
                    ? <>
                        <article className='dia-actual flex'>
                            <div>
                                <h1>{nombre}</h1>
                                <h2>{nombre2}</h2>
                                <p>{time}</p>
                            </div>
                            <img src={ getWheatherImg('dia', time)} alt={time}  />
                            <div>
                                <span className='tem tem-max'>{temMax}</span>
                                /
                                <span className='tem tem-min'>{temMin}</span>
                            </div>
                        </article>
                        <Days days={days} handleDaySelection={handleDaySelection} />
                        {
                            (daySelect.hour == undefined)
                            ? <p>Loading...</p>
                            : <Pronosticos name={daySelect.name} hours={daySelect.hour} />
                            
                        }
                    </>
                    : <p>Loading..</p>
            }
        </section>
    )
}
