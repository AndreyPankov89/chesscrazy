import React from 'react';

import {Link} from 'react-router-dom'
const Header = (props)=>{
    const {user,onAuth}=props;
    return(
        <header className="header">
            {/* <span className="header-username">{user.first_name}</span> 
            <span className="logout" onClick={()=>{onAuth(null)}}>Выйти</span> */}
            <h1 >
                <Link to="/">Осенний марафон 2020 NEXT</Link>
            </h1>
            <Link to="/reglament"> Регламент и список участников</Link>
        </header>
    )
}

export default Header;