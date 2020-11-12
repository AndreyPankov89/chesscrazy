export const drawingGenerate = (_memberCount)=>{
    let drawing = []
    
    const memberCount = (_memberCount%2)? _memberCount+1 : _memberCount

    
        console.log(!(_memberCount%2));
    for (let i = 0; i<memberCount-1;++i){
        const tour = []
        
   /*     if (!(_memberCount%2)){
            if ((i+1)%2 === 0){
                tour.push({white: i+1, black: memberCount, result:"*", link:""})
            }
            else{
                tour.push({white: memberCount, black: i+1, result:"-", link:""})
            }
        }/*/
            drawing.push(tour);
    }
    console.log(drawing.length,'ppppppp');
    
    if (!(_memberCount%2)){
        for (let i = 1; i<memberCount;++i){        
            console.log(i*2,memberCount);
            let tour;
            if (i<(memberCount/2)){
                tour={white: i, black: memberCount, result:"", link:""}
            }
            else{
                tour={white: memberCount, black: i, result:"", link:""}
            }
            if ((i*2)<=memberCount){
                ///tour = 
                drawing[(i*2)-2].push(tour)
            }
            else{
                console.log(drawing[(i*2)-memberCount],(i*2)-memberCount-1);
                
                drawing[(i*2)-memberCount-1].push(tour)
            }
        }
    }
    
    for(let i=1; i<memberCount; ++i){
        for (let j=1; j<i; ++j ){
            let pair;
            if ((i+j)%2===0){
                if (i<j){
                    pair= {white: j, black: i, result:"", link:""}
                }
                else{
                    pair= {white: i, black: j, result:"", link:""}
                }
            }
            else{
                if (i>j){
                    pair= {white: j, black: i, result:"", link:""}
                }
                else{
                    pair= {white: i, black: j, result:"", link:""}
                }
            }
            if (i!==j){
                if (i+j<=memberCount){
                    drawing[i+j-2].push(pair)
                }
                else{
                    drawing[i+j-memberCount-1].push(pair)
                }
            }
        }
    }
    return drawing
}

export default drawingGenerate