import React from 'react'
import "./Contact.scss"
import { Link } from 'react-router-dom'
const Contact = () => {
    return (
        <div className="contact">
            Contact
            <Link to="/about">about</Link>
            <Link to="/skills">skills</Link>
            <Link to="/projects">projects</Link>
            <Link to="/">home</Link>
        </div>
    )
}

export default Contact
