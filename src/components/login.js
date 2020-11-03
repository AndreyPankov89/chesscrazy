import React from 'react';
import VK, {Auth} from 'react-vk'

const Login = (props) => {
    const {onAuth} = props;              
                 
	return ( 
        <>
        <p>
            Сайт для участия в турнирах группы ChessCrazy <br/>
            При входе на сайт, вы даете разрешение на получение Ваших фамилии и имени с сайта vk.com
            Данная информация будет использоваться только в рамках данного турнира
        </p>

        <h1 >
            Осенний марафон 2020
        </h1>
        <VK apiId={7641743}>
            <Auth options={{
                onAuth: _user => onAuth(_user)
            }}/>;
        </VK>
        </>
	)
};

export default Login;