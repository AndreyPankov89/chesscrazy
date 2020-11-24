import React, {useState} from 'react';

const EditResults = (props)=>{
    const {setERS,editingResults,setResults} = props;
    const { item, whiteName,blackName,tourId, pairId} =editingResults;
    const [scoreWhite, setScoreWhite] = useState('');
    const [scoreBlack, setScoreBlack] = useState('');
    const [links, setLinks] = useState(item.link)
    const onSubmit = (e)=>{
        e.preventDefault();
        item.result = `${scoreWhite} - ${scoreBlack}`
        //const lks = links.split(';').map((item,i)=>{
          //  return ` <a href="${item}">${i}</a> `
        //}).join(' ');
        item.link = links
        console.log(item, tourId,pairId);
        setResults(tourId,pairId,item, +scoreWhite, +scoreBlack);
        setERS(false)
    }
    return(
        <div className="dialog-wrapper">
            <div className="dialog">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="player1">{whiteName}</label>
                        <input 
                            type="text" 
                            name="player1"
                            value={scoreWhite}
                            onChange={(e)=>{setScoreWhite(e.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="player2">{blackName}</label>
                        <input 
                            type="text" 
                            name="player2" 
                            value={scoreBlack}
                            onChange={(e)=>{setScoreBlack(e.target.value)}}/>
                        </div>
                    <div className="form-group">
                        <label htmlFor="links">links</label>
                        <textarea 
                            type="text" 
                            name="player1"
                            value={links}
                            onChange={(e)=>{setLinks(e.target.value)}}/>
                    </div>
                    <button type="submit">send</button>
                </form>
            </div>
        </div>
    )
}

export default EditResults;