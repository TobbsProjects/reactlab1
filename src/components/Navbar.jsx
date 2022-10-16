import React from "react"
import logo from "./react.svg"

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="reactfacts">
                <img className="logo" src={logo} alt="React Logo" />
                <h2>ReactFacts</h2>
            </div>
            <p>React Course - Project 1</p>
        </div>
    )
}