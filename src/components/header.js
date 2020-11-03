import React from 'react';


const Header = (props)=>{
    const {user,onAuth}=props;
    return(
        <header className="header">
            <span className="header-username">{user.first_name}</span> 
            <span className="logout" onClick={()=>{onAuth(null)}}>Выйти</span>
            <h1 >
                Осенний марафон 2020 NEXT
            </h1>
        </header>
    )
}

export default Header;