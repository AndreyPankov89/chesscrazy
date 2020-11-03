import React, { useState, useEffect } from 'react';
import RegistrationForm from './registrationForm';
import RegistrationList from './registrationList';
const Registration = (props)=>{

    const [registeredUsers, setRegisteredUsers] = useState([]);
    const {db}=props;

    useEffect(()=>{     
        db.getUsers()
            .then((dbusers=>{console.log(dbusers.values);
             setRegisteredUsers(Object.values(dbusers)) }));
    },[])
    const addUser = (user) => {    

        user.then(newUser=>{
            
            if (newUser){
                let counter;
                db.getCounter()
                .then((dbCounter) => {
                    counter = dbCounter;
                    newUser.id = counter;
                    console.log(counter);
                    
                    db.addUser(newUser);
                    setRegisteredUsers([...registeredUsers, newUser]);
                    db.setCounter(counter+1)
                })
            }
        })
    }
    
    return (
        <div className="registration">
            <RegistrationForm user={props.user} addUser={addUser}/>
            <RegistrationList users={registeredUsers}/>
        </div>
        
    )
}

export default Registration;