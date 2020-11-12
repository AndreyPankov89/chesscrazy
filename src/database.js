import firebase from "firebase/app";
//import "firebase/auth";
import "firebase/database";

class Database{
    constructor(){
        const firebaseConfig = {
            apiKey: "AIzaSyCBgi9KWUoSUFfjmHSkvLA_-r1R4LqRJGM",
            authDomain: "chesscrazy-112020.firebaseapp.com",
            databaseURL: "https://chesscrazy-112020.firebaseio.com",
            projectId: "chesscrazy-112020",
            storageBucket: "chesscrazy-112020.appspot.com",
            messagingSenderId: "140890001362",
            appId: "1:140890001362:web:26a83a0c3cd6645409420b",
            measurementId: "G-0DRZYY3MS2"
        };
        firebase.initializeApp(firebaseConfig);
        this.database = firebase.database();
    }

    addUser = (user)=>{
        this.database.ref('registred/'+user.uid).set(user);
    }
    addMembers = (users)=>{
        this.database.ref('members').set(users);
    }
    setCounter = (counter)=>{
        this.database.ref('counter').set(counter);
    }
     getUsers = async()=>{
        let data; 
        await this.database.ref('registred').once('value')
        .then( shs=> {data=shs.val()||{}; })
        
        return data
    }     
    getMembers = async()=>{
        let data; 
        await this.database.ref('members').once('value')
        .then( shs=> {data=shs.val()||{}; })
        
        return data
    }
    getCounter = async()=>{
        let data; 
        await this.database.ref('drawing').once('value')
        .then( shs=> {data=shs.val()})
        
        return data
    }
    
    getDrawing = async()=>{
        let data; 
        await this.database.ref('drawing').once('value')
        .then( shs=> {data=shs.val()})
        
        return data
    }

    setDrawing = async (drawing)=>{
        this.database.ref('drawing').set(drawing);
    }


}
export default Database;