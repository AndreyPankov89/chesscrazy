import React from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'
import SingleTour from './singleTour'
const DrawingPage = (props)=>{

    const {tourId} = useParams();
    const {drawing,members,setResults} = props;
    
    let rendered = null;
       if (drawing) {
            const arrdrawing = Object.entries(drawing);
            //console.log(arrdrawing);
            rendered = Object.entries(drawing).map((tourDrawing,i)=>{              
                return( <SingleTour 
                    key={i}
                    tourId={i+1} 
                    drawing={tourDrawing[1]} 
                    members={members}
                    setResults={setResults}/>)
            })
        }

    let tours = [];
    for (let i = 1; i<=21; ++i){
        const tekTourLink = <Link to={`/tour/${i}`}>Тур{i} </Link>;
        tours.push(tekTourLink);
    }
    
    return(
        <>
            {tours}
            {rendered}
        </>
    )

}

export default DrawingPage