import React from "react"
import SignUpButton from '../SignUpButton/SignUpButton'
import { Link } from 'react-router-dom'
import './NavBar.css'


export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navigation-menu">
            <div className="topnav left">
              <Link to="/">Bloom</Link>
            </div>
            <div className="topnav right btn">
              <SignUpButton />
            </div>
          </nav>
        )
    }
}