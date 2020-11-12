import React from 'react';
import {useParams} from 'react-router-dom';
import SingleTour from './singleTour'
const DrawingPage = (props)=>{

    const {tourId} = useParams();
    const {drawing,members} = props;
    
    let rendered = null;
       if (drawing) {
            const arrdrawing = Object.entries(drawing);
            //console.log(arrdrawing);
            rendered = Object.entries(drawing).map((tourDrawing,i)=>{
                console.log(tourDrawing[1]);
                
                return( <SingleTour tourId={i+1} drawing={tourDrawing[1]} members={members}/>)
            })
        }
    console.log(rendered);
    
    return(
        <>
            {rendered}
        </>
    )

}

export default DrawingPage