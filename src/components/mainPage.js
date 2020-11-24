import React, { useState, useEffect} from 'react';
import Header from './header';
import RegPage from './registration/regPage';
import SingleTourPage from './singleTourPage';
import DrawingPage from './drawingPage';
import TournamentTable from './tournamentTable';
import {drawingGenerate} from '../drawingGenerate';
import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";

const MainPage = (props)=>{
    const {user,onAuth,db}=props;
    const [drawing, setDrawing] = useState(null);
    const [members, setMembers] = useState(null);
    const setResults = ((tour,pair,item, ws,bs)=>{
        db.setResultsToDrawing(tour,pair,item );
        const white = members[item.white-1];
        white.results[item.black-1]=ws;
        const black = members[item.black-1]
        black.results[item.white-1] = bs;
        console.log(item);
        
        db.setResultsToMembers(item.white-1,white);
        db.setResultsToMembers(item.black-1,black);
    })
    useEffect(()=>{
        db.getMembers()
            .then((res)=>{
                setMembers(res)
            })
        db.getDrawing()
            .then((result)=>{
                console.log(result);
                
                setDrawing(result)
            })
    },[db])

    return(
        <Router>
            <div className="container">
                <Header user={user} onAuth={onAuth} />
                <Switch>
                    <Route path='/reglament'>
                        <RegPage user={user} db={db}/>  
                    </Route>
                    <Route path='/table'>
                        <TournamentTable members={members}/>
                    </Route>
                    <Route path='/tour/:tourId'>
                        <SingleTourPage 
                            drawing={drawing} 
                            members={members}
                            setResults={setResults}
                            />
                    </Route>
                    <Route path="/">
{/*                         
                        <button onClick={()=>{
                            db.setDrawing(drawingGenerate(22))
                           //setDrawing(drawingGenerate(21))
                           db.getUsers()
                           .then((dbusers=>{
                               console.log(dbusers);
                                let regusers = (Object.values(dbusers)) 
                                regusers.sort((a,b)=>{
                                    return b.rating-a.rating
                                })
                                const regusers2 = regusers.map((item,i) => {
                                    let results = [];
                                    for (let i=0; i<21;++i){
                                        results.push('')
                                    }
                                    return {...item,id:i,uid:+item.uid,results:results}
                                })
                                db.addMembers(regusers2)
                                console.log(regusers2);
                            }));
                        }}>ttttt</button> */}
                        <DrawingPage 
                            drawing={drawing} 
                            members={members} 
                            setResults={setResults}/> 
                    </Route>
                </Switch>
                         
            </div>
        </Router>

    )
}

export default MainPage;