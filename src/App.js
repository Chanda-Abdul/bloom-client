import React from 'react';
import BloomContext from './contexts/PlantContext'
import Routes from './routes/Routes'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import './App.css';
// import PlantService from './services/PlantService'

export default class App extends React.Component {
  static contextType = BloomContext

// constructor(props) {
//     super(props);
//     // this.plantService = new PlantService()
//   }

// state = {
//   garden: null;
// }

  render() {
    return (
      <BloomContext.Provider>
      <NavBar/>
      <Routes/>
      <Footer/>
      </BloomContext.Provider>
    )
  }
}
