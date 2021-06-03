import React from 'react'
import {Link} from 'react-router-dom';
import PokePage from './PokePage'

const PokemonThumnail = ({id, name, image, type}) => {

    const style = `thumb-container ${type}`
    return (
        <div className={style}>
            <div className="number">
                <small>
                    {id}
                </small>
            </div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
            <Link to={'/pokepage/' + id} className="bt-wrapper">More information</Link>
        </div>
    )
}

export default PokemonThumnail
