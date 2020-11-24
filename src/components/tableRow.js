import React from 'react';

const TableRow = ({member, hide})=>{
    let summ=0, count=0;
    const scores = member.results.map((item,i)=> {
        summ+=+item;
        let cln = (i===member.id)?"dark":'';
        cln = hide? cln+=' hide':cln;
        if (item!==''){
            ++count;
        }
        return (
            <td className={cln}>{item}</td>
        )
    })
    return(
        <tr>
            <td>{member.id+1}</td>
            <td>{member.name}</td>
            {scores}
            <td>{summ}</td>
            <td>{count}/21</td>
        </tr>
    )
}
export default TableRow