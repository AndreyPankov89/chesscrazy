import React from 'react';
import RegistrationListItem from './registrationListItem'

const RegistrationList = (props)=>{
    const {users} = props;
    console.log(users);
    
    const rows = users ? users.map((item,i) => { return (<RegistrationListItem user={item} key={i}/>)}):null;
    return (
        // <div className="registration-list">
        //     {rows}
        // </div>
        <table>
            <tbody>
                {rows}
            </tbody>
            
        </table>
    )
}

export default RegistrationList;