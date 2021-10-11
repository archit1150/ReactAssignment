import React from 'react'
import '../envVariable';
import icon from '../assest/Bank-icon.png'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand m-auto h1">
            <img src={icon} width="30" height="24" className="d-inline-block align-top" alt=""/>
                {global.appname}</span>
            </nav>
        </div>
    )
}
