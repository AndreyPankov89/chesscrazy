import React from 'react'
import Registration from './registration';
import Reglament from './reglament'

const RegPage = ({user, db})=>{
    return(
        <div className="row">
            <Registration user={user} db={db}/>
            <Reglament/>
        </div>
    )
}

export default RegPage;