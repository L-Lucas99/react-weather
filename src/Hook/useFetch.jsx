import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [fetchData, setFetchData] = useState({data: null, loading: true})

    useEffect(() => {
        setFetchData({
            ...fetchData, 
            loading: true   
        })
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setFetchData({
                data: res, 
                loading: false
            })
        })
    }, [url])

    return [fetchData]
}
