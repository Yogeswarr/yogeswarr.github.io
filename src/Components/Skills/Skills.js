import React from 'react'
import "./Skills.scss"
import { Link } from 'react-router-dom'

const Skills = () => {
    return (
        <div className="skills">
            Skills
            <Link to="/contact">contact</Link>
            <Link to="/about">about</Link>
            <Link to="/projects">projects</Link>
            <Link to="/">home</Link>
        </div>
    )
}

export default Skills
