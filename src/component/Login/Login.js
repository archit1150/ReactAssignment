import React from 'react'
import './Login.css'
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom"

export default function Login() {
    const[userName, setUserName] = useState('');
    const[password, setPassword] = useState('');
    const [data, setData] = useState([]);

    const history = useHistory();
    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
         const response = await fetch ("http://localhost:3000/users");
         const data = await response.json();
         setData(data);

    }
    const authentication = () =>{
         const userData = data.filter((d)=> d.userName.includes(userName))
         if(userData.length ===0){
             alert('crediential invalid')
         }
         else{
             if(userData[0].password === password){
                history.push("/home")
                localStorage.setItem('accountNumber',userData[0].accountNumber)
             }
             else{
                 alert('password is wrong')
             }
         }
    }
  const  handelSubmit = () =>{
      authentication();

    }

    return (
        <div>
            <div className = 'container'>
            <div className = 'row'>
                <div className = 'col'>
                <div className='card'>
                <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=> setUserName(e.target.value)} required/>
                </div>
                <div className="form-group">
                     <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} required/>
                </div>
                <div className ='link'>
                    <small>Don't have account ? </small>
                    <a href='/register'>Registration</a>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handelSubmit}>Submit</button>
                </form>
                 </div>
                </div>
            </div>

        </div>
        </div>
    )
}
