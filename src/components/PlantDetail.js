import React from "react"
// import faker from 'faker'

const PlantDetail = props => {
    return (
        <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatar}/>
        </a>

        <div className="content">

        <div className="text">{props.content}</div>

        </div>
      </div>
    )
}

export default PlantDetail