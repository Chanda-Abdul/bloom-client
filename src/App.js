import React from 'react';
import BloomContext from './contexts/PlantContext'
import axios from 'axios'
import Routes from './routes/Routes'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import './App.css';
// import { API_BASE_URL } from './config'

export default class App extends React.Component {
  static contextType = BloomContext



// constructor(props) {
//     super(props);
//     // this.plantService = new PlantService()
//   }



  render() {
    return (
      <div>
      <NavBar/>
      <Routes/>
      <Footer/>
      </div>
    )
  }
}
