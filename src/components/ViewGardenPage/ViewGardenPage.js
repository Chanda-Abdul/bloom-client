import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios'
import { Link } from "react-router-dom";
import faker from "faker";
import PlantCard from "../PlantCard/PlantCard";
import PlantDetail from "../PlantDetail";
import ViewGardenButton from "../ViewGardenButton/ViewGardenButton";
import PlantService from '../../actions/PlantService'

export default class ViewGardenPage extends React.Component {
  render() {
    return (
      <div class="top">
        <section>
          <h1>Hello</h1>
          <p>Welcome to your garden</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
            id interdum velit laoreet id donec ultrices tincidunt arcu. Amet
            risus nullam eget felis eget nunc lobortis mattis. Viverra ipsum
            nunc aliquet bibendum enim. In vitae turpis massa sed. Dolor sed
            viverra ipsum nunc aliquet bibendum enim. Viverra accumsan in nisl
            nisi.
          </p>
          <p>
            <PlantService/>
          </p>
          {/* conditionally render later */}
          <section className="card-container">
            <div className="ui container comments">
                <PlantCard/>
                <PlantCard/>
                <PlantCard/>
              {/* <PlantCard>
                <div>
                  <h4>Plant Name</h4>
                  <h6>description of the plant</h6>
                  <PlantDetail
                    content={faker.lorem.sentence()}
                    avatar={faker.image.nature()}
                  />
                </div>
              </PlantCard>
              <PlantCard>
                <div>
                  <h4>Plant Name</h4>
                  <h6>description of the plant</h6>
                  <PlantDetail
                    content={faker.lorem.sentence()}
                    avatar={faker.image.nature()}
                  />
                </div>
              </PlantCard>
              <PlantCard>
                <div>
                  <h4>Plant Name</h4>
                  <h6>description of the plant</h6>
                  <PlantDetail
                    content={faker.lorem.sentence()}
                    avatar={faker.image.nature()}
                  />
                </div>
              </PlantCard>
              <PlantCard>
                <div>
                  <h4>Plant Name</h4>
                  <h6>description of the plant</h6>
                  <PlantDetail
                    content={faker.lorem.sentence()}
                    avatar={faker.image.nature()}
                  />
                </div>
              </PlantCard> */}
            </div>
          </section>

          <Link to="/add">
            <button className="myButton ui basic button">Add A Plant</button>
          </Link>
        </section>
      </div>
    );
  }
}
