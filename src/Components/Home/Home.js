import React from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className="home">
            Home
            <Link to="/contact">contact</Link>
            <Link to="/skills">skills</Link>
            <Link to="/projects">projects</Link>
            <Link to="/about">about</Link>
        </div>
    )
}

export default Home
