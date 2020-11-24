import React, {useState} from 'react';
import TableRow from './tableRow'
const TournamentTable = ({members})=>{
    const [hide, setHide] = useState(false);
    const list = members ? members.map((item)=>{
        if (item.name!=='free'){
        return(<TableRow member={item} hide={hide}/>)
        }
        return null
    })
    :null;
    console.log(hide);
    const cln = hide? 'hide':'';
    return(
        <>
            <span>Кратко</span>
            <label className="switch" for="checkbox">
                <input type="checkbox" id="checkbox" onClick={(e)=>{setHide(!hide)}}/>
                <div className="slider round"></div>
            </label>
            <table className={'tournament-table '+cln}>
                <tbody>
                    <tr>
                        <td>#</td>
                        <td>Участник</td>
                        <td className={cln}>1</td>
                        <td className={cln}>2</td>
                        <td className={cln}>3</td>
                        <td className={cln}>4</td>
                        <td className={cln}>5</td>
                        <td className={cln}>6</td>
                        <td className={cln}>7</td>
                        <td className={cln}>8</td>
                        <td className={cln}>9</td>
                        <td className={cln}>10</td>
                        <td className={cln}>11</td>
                        <td className={cln}>12</td>
                        <td className={cln}>13</td>
                        <td className={cln}>14</td>
                        <td className={cln}>15</td>
                        <td className={cln}>16</td>
                        <td className={cln}>17</td>
                        <td className={cln}>18</td>
                        <td className={cln}>19</td>
                        <td className={cln}>20</td>
                        <td className={cln}>21</td>
                        <td>Очки</td>
                        <td>Сыграно</td>
                    </tr>
                    {list}
                </tbody>
            </table>
        </>
    )
}
export default TournamentTable