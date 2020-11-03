import React from 'react';
import Header from './header';
import Registration from './registration';
import Reglament from './reglament'
const MainPage = (props)=>{
    const {user,onAuth,db}=props;
    return(
        <div className="container">
            <Header user={user} onAuth={onAuth} />
            <div className="row">
                <Registration user={user} db={db}/>
                <Reglament/>
            </div>
            
        </div>
    )
}

export default MainPage;