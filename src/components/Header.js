import React from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'
 
const Header = () => {
    return (
        <div className="header">
            <div className="header__title">Pokemon Evolution</div>
             <div className="navigation">
                <Link to="/PokedexApplication/">Go Home</Link>
             </div> 
        </div>
    )
}

export default Header
