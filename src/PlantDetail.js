import React from "react"
// import faker from 'faker'

const PlantDetail = props => {
    return (
        <div className="comment">
          <p>Title</p>
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatar}/>
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">{props.timeAgo}</span>
        </div>

        <div className="text">{props.content}</div>

        </div>
      </div>
    )
}

export default PlantDetail