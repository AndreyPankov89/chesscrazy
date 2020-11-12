import React from 'react';
import {useParams} from 'react-router-dom';
import SingleTour from './singleTour'
const SingleTourPage = (props)=>{

    const {tourId} = useParams();
    const {drawing,members} = props;
    const tourDrawing = drawing?Object.entries(drawing)[tourId-1][1]:[];
    
    return(
        <SingleTour tourId={tourId} drawing={tourDrawing} members={members}/>
    )

}

export default SingleTourPage