import React from 'react';

const RegistrationListItem = (props)=>{
    const {user} = props;

    return (
   /*     <div className="registration-list-item">
            <span className="cell"><a href={`https://vk.com/id${user.uid}`}>
                {user.name}    
            </a></span>
            <span className="cell"><a href={`https://lichess.org/@/${user.lichess}`}>
                {user.lichess}    
            </a></span>
            <span className="cell">
                {user.rating}    
            </span>
        </div>
      */
     <tr>
         <td><a href={`https://vk.com/id${user.uid}`}>
                {user.name}    
            </a></td>
         <td>
         <a href={`https://lichess.org/@/${user.lichess}`}>
                {user.lichess}    
            </a>
         </td>
         <td>
            {user.rating}    
         </td>
     </tr>  
    )
}

export default RegistrationListItem;