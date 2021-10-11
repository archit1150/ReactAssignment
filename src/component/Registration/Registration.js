import React from 'react'
import './Registration.css'

export default function Registration() {
    return (
        <div className='card'>
            <div className='name'>Bank Account Register</div>
            <form>
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User Name" required/>
                     <input type="date" className="form-control" id="exampleInputPassword" placeholder="DOB" required/>
                     <select className ='dropdowm'>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                     </select>
                     <input type="text" className="form-control" id="exampleInputPassword" placeholder="Account Number" required/>
                     <select className ='dropdowm'>
                        <option value="Current">Current Account</option>
                        <option value="Saving">Saving Account</option>
                     </select>
                     <br/>
                     <select className ='dropdowm'>
                        <option value="Rajsthan">Rajsthan</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Haryana">Haryana</option>
                        <option value="UttarPradesh">UttarPradesh</option>
                     </select>
                     <br/>
                     <select className ='dropdowm'>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Amritsar">Amritsar</option>
                        <option value="Gurgaon">Gurgaon</option>
                        <option value="Meerut">Meerut</option>
                     </select>
                     <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" required/>
                     <input type="password" className="form-control" id="exampleInputPassword" placeholder="Confirm Password" required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
