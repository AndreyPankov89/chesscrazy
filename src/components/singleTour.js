import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import EditResults from './editResults';
const SingleTour = (props)=>{

    const {tourId,drawing,members,setResults} = props;
    const [editResultsShow, setERS] = useState(false);
    const [editingResults, setEditingResults]=useState(null)
    const tourDrawing = drawing;//[`tour${tourId}`];
    const formName = (numb)=>{
        const user = members[numb-1]
        return(
            <>
                <a href={`http://vk.com/${user.uid}`}>{user.name}</a> <a href={`http://lichess.org/${user.lichess}`}>({user.lichess})</a>
            </>
        )
    }
    const rendered = tourDrawing.map((item,i)=>{
        const {white,black}=item;
        const whiteName = formName(white);
        const blackName = formName(black);
        const lks = item.link? item.link.split(';').map((item,i)=>{
            return (<><a href={item}>{i+1}</a>{`  ` }</>)
        }):'';
        return(
            <tr key={i}>
                <td onClick={()=>{
                    setERS(true);
                    setEditingResults({
                        item,whiteName,blackName,tourId, pairId:i});
                }}>{i+1}</td>
                <td>{whiteName}</td>
                <td>{item.result}</td>
                <td>{blackName}</td>
                <td>{lks}</td>
            </tr>
        )
    })
    const ERS = editResultsShow? <EditResults 
                                    setERS={setERS}
                                    editingResults={editingResults}
                                    setResults={setResults}/>:null;

    return(
        <>
            {ERS}
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