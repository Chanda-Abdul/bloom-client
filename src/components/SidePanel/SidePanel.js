import React from "react"
import './SidePanel.css'
import SignUpButton from '../SignUpButton/SignUpButton'
import { Link } from "react-router-dom"

export default class SidePanel extends React.Component {
   render() {
       return (
           <div><SignUpButton/></div>
       )
   }
}