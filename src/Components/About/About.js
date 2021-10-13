import React from 'react'
import "./About.scss"
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="about">
            About  
            <Link to="/contact">contact</Link>
            <Link to="/skills">skills</Link>
            <Link to="/projects">projects</Link>
            <Link to="/">home</Link>

        </div>
    )
}

export default About
