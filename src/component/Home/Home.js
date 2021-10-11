import React from 'react'
import './Home.css'
import { useState,useEffect } from "react";


export default function Home() {

    const [data, setData] = useState([]);
    const [transaction, setTransData] = useState([]);
    

    useEffect(() => {
        const accountNumber = localStorage.getItem('accountNumber')
        loadData(accountNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadData = async (accountNumber) => {
         const response = await fetch ("http://localhost:3000/users?q="+accountNumber);
         const data = await response.json();
         setData(data);
         trans(data)
    }
    // const dataFilter = (d,accountNumber)=>{
    //     for(let i =0; i<d.length; i++){
    //         if(d[i].accountNumber === accountNumber){
    //             trans(d[i])
    //         }
    //     }
    // }
    const trans = async(d)=>{
        const response = await fetch ("http://localhost:3000/transaction?userId="+d[0].id);
         const data = await response.json();
         setTransData(data)

    }
    return (
        <div>
            <ul>
                <li><a href="/profile">My Profile</a></li>
                <li><a href="/transaction">Withdrawl</a></li>
                <li className = 'logout'><a href="/">Logout</a></li>
            </ul>
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col'>
                    </div>
                    <div className = 'col'>
                       <label className = 'name'>My Transaction</label>
                    </div>
                    <div className = 'col'>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder='Search Transaction By Description'/>
                        <div className="input-group-append">
                            <button type='submit' className="input-group-text">
                            Search
                            </button>
                        </div>
                        </div>
                    </div>  
                </div>
                <div className = 'row'>
                    <div className = 'col'>
                    <label className='balence'>current balence</label>
                    
                    </div>
                    <div className = 'col col-lg-8'>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                        
                    </div>   
                </div>

            </div>
        </div>
    )
}
