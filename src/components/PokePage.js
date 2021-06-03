import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './PakePage.css'

const PokePage = (props) => {
    const [data, dataSet] = useState(undefined)
    const { id } = useParams()
     useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            response = await response.json()
            dataSet(response)
        }

        fetchMyAPI()
    }, [])
    return (
        <div className="container">
            {
            data && 
            <div>
                <div><img src={data.sprites.other.dream_world.front_default} alt="" /></div>
                <div>id: {data.id}</div>
                <div>Name: {data.name}</div>
                <div>Type: {data.types[0].type.name}</div>
                <div>Attacs: {data.stats[1].base_stat}</div>
                <div>Defence: {data.stats[2].base_stat}</div>
                <div>HP: {data.stats[0].base_stat}</div>
                <div>SP Attack: {data.stats[3].base_stat}</div>
                <div>SP Defense: {data.stats[4].base_stat}</div>
                <div>Speed: {data.stats[5].base_stat}</div>
                <div>Weight: {data.weight}</div>
            </div>
            }
        </div>
    )
}

export default PokePage