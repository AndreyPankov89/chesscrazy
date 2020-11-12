import React, {useState} from 'react';
import ApiLichess from '../../apiLichess';

const RegistrationForm = (props)=>{
    const lichess = new ApiLichess()
    const {user, addUser} = props;
    const [name,setName] = useState(`${user.last_name} ${user.first_name}`);
    const [login, setLogin] = useState("");
    const [uid, setUid] = useState("");

    const _setLogin = (val)=>{
        setLogin(val)
    }
    const formUser = async()=>{
        let rating;
        let newUser = {
            uid: uid,
            name,
            lichess: login
            //rating:rating
        }
        await lichess.getRating(login)
            .then((res)=>{
                newUser.rating=res;})
            .catch(()=>{
                alert("Не найден логин Личес. Попробуйте другой")
                newUser=null
            })
        return newUser 
    }
    return(
        <form className="registration-form" onSubmit={(e)=>{
            e.preventDefault();
            const user = formUser(); 
            console.log(user); addUser(user)}}>
            <input type="text" 
            placeholder="uid" 
            value={uid} 
            onChange={(e)=>{setUid(e.target.value)}}/> 
            <input type="text" 
                    placeholder="Имя" 
                    value={name} 
                    onChange={(e)=>{setName(e.target.value)}}/>
            <input type="text" 
                    placeholder="Lichess Логин" 
                    value={login} 
                    onChange={(e)=>{_setLogin(e.target.value);
                    }}/>
            <button type="submit">Зарегистрироваться</button>
        </form>
    )
}

export default RegistrationForm