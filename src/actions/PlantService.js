import React from 'react'
// import { API_BASE_URL } from '../config'
import axios from 'axios'

export default class PlantService extends React.Component {
    state = {
        garden: []
    }

    componentDidMount() {
        axios.get(`https://polar-sierra-05851.herokuapp.com/plants/`)
        .then(res => {
            const garden = res.data.plants;
            this.setState({ garden })
        })
    }

render() {
    console.log(this.state, "this.state")
    return (
        <div>
            PlantService
            {this.state.garden.map(garden => <li>{garden.plant_name}</li>)}
        </div>
    )
}
}