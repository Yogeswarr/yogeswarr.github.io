import React from 'react'
import "./Projects.scss"
import { Link } from 'react-router-dom'
const Projects = () => {
    return (
        <div className="projects">
            Projects
            <Link to="/contact">contact</Link>
            <Link to="/skills">skills</Link>
            <Link to="/about">about</Link>
            <Link to="/">home</Link>
        </div>
    )
}

export default Projects
