import React from 'react';
import {Link} from 'react-router-dom'
const SingleTour = (props)=>{

    const {tourId,drawing,members} = props;
    const tourDrawing = drawing;//[`tour${tourId}`];
    console.log(members);
    const formName = (numb)=>{
        const user = members[numb-1]
        console.log(user);
        return(
            <>
                <a href={`http://vk.com/${user.uid}`}>{user.name}</a> <a href={`http://lichess.org/${user.lichess}`}>({user.lichess})</a>
            </>
        )
    }
    const rendered = tourDrawing.map((item,i)=>{
        console.log(item)
        return(
            <tr>
                <td>{i+1}</td>
                <td>{formName(item.white)}</td>
                <td>{item.result}</td>
                <td>{formName(item.black)}</td>
                <td>{item.link}</td>
            </tr>
        )
    })
    return(
        <>
            <h3><Link to={`/tour/${tourId}`}>Тур № {tourId}</Link></h3>
            <table className="tour-table">
                <tbody>
                    <tr>
                        <td>#</td>
                        <td>Игрок 1</td>
                        <td>Счет</td>
                        <td>Игрок 2</td>
                        <td>Игры</td>
                    </tr>
                    {rendered}
                </tbody>
            </table>
        </>
    )

}

export default SingleTour