import React from 'react'
import './Profile.css'
import icon from './Profile-icon.png'
import { useHistory } from "react-router-dom"

export default function Profile() {

  let history = useHistory();

  const backToHome = () =>{
    return history.push("/home");
  }

    return (
      <>
        <div className = 'container'>
        <div className = 'card'>
            <div className='name'>My Profile
                <img src={icon} width="40" height="40" className='icon' alt=""/>
            </div>
            <table className = 'table'>
              <tbody>  
                <tr>
                <td>Name</td>
                <td>Value</td>
                </tr>
                <tr>
                <td>Account Number</td>
                <td>Value</td>
                </tr>
                <tr>
                <td>Date of Birth</td>
                <td>Value</td>
                </tr>
                <tr>
                <td>Address</td>
                <td>Value</td>
                </tr>
                <tr>
                <td>State</td>
                <td>Value</td>
                </tr>
                <tr>
                <td>City</td>
                <td>Value</td>
                </tr>
                <tr>
                <td>Gender</td>
                <td>Value</td>
                </tr>
              </tbody>
            </table>
            <button type="submit" className="btn btn-primary" onClick={backToHome}>Back To Home</button>
        </div>
        </div>
      </>
    )
}
