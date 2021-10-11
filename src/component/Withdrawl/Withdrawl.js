import React from 'react'
import './Withdrawl.css'

export default function Withdrawl() {
    return (
        <div>
            <div className='container'>
                <div className ='row'>
                    <div className = 'col col-lg-2 '>
                        <div className ='card'>
                            <label className='name'>Withdrawl/Deposit</label>

                        </div>

                    </div>

                </div>
                <div className = 'row'>
                    <div className = 'col'>
                        <div className = 'card2'>
                            <table>
                                <tr>
                                    <td>Select Transaction Type</td>
                                    <td>
                                        <tr>
                                            <td>
                                                Withdrawl
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Deposit
                                            </td>
                                        </tr>
                                    </td>
                                </tr>
                                <br/>
                                <br/>
                                <tr>
                                    <td>
                                        Current Balence
                                    </td>
                                    <td>Value</td>
                                </tr>
                                <br/>
                                <br/>
                                <tr>
                                    <td>Description</td>
                                   <td><input type="text" className="form-control" id="exampleInputPassword" placeholder="Description" required/></td> 
                                </tr>
                                <br/>
                                <br/>
                                <tr>
                                    <td>Transaction Amount</td>
                                   <td><input type="number" className="form-control" id="exampleInputPassword" placeholder="Amount in Ruppes" required/></td> 
                                </tr>
                            </table>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
