import React from 'react'
import { Link } from 'react-router-dom'
import InfoButton from '../InfoButton/InfoButton'
import DeleteButton from '../DeleteButton/DeleteButton'

const PlantCard = (props) => {
    console.log(props.children, "plant card - props.children")
return (
    <div className="ui card">
        <div className="content">{props.children}</div>
        <div className="extra content">
            <div className="ui two buttons">
                <InfoButton/>
                <DeleteButton/>
            </div>
        </div>
    </div>
)
}

export default PlantCard