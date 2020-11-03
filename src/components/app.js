import React, {useState} from 'react';
import Login from './login';
import MainPage from './mainPage'
function App(props) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const onAuth = ( _user) =>{
        setUser(_user)
        localStorage.setItem('user', JSON.stringify(_user));
        console.log(_user);
    };
    console.log(user);
    const content = user ? 
            <MainPage user={user} onAuth={onAuth} db={props.db} />: 
            <Login onAuth={onAuth} /> ;

    return (
        <div className="App">
            {content}                
        </div>
    );
}

export default App;
