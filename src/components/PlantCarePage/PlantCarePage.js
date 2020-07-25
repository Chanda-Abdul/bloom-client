import React from "react";
import ViewGardenButton from "../ViewGardenButton/ViewGardenButton";
import plant1 from "../../images/plant1.png";
import plant3 from "../../images/plant3.png";
import plant5 from "../../images/plant5.png";
import plant8 from "../../images/plant8.png";
import plant9 from "../../images/plant9.png";
import gardening from "../../images/gardening.png";


export default class PlantCarePage extends React.Component {
  render() {
    return (
      <div >
        <section className='info-heading'>
          <div>
          <h1>How to propogate your green thumb</h1>
          <h2>Tips and tricks to help you care for your indoor jungle</h2>
          <p>
            A houseplant is a living, “breathing” thing that requires
            some attention and care in order to thrive. Usually, when you buy a
            plant, there’s no one to ask for advice; little information about
            its specific requirements for water, light, and maintenance. We want
            to help everyone find their green thumb. With the right tools and a
            little help along the way, anyone can have a thriving indoor jungle.
          </p>
          <img src={plant1} alt={plant1} width="125rem"/>
        </div>
        <div>
          <h3>Tip 1</h3>
          <h4>Get to know your plant.</h4>
          <p>
            Every plant is different, with unique needs. With a little time and
            TLC, you will learn to recognize the needs of individual plants.
            Some plant varieties require very little attention and don’t need to
            be fussed over. Other plants need more love. View the care
            instructions in your garden to view specifics about how to take care
            of each plant.
          </p>
          <img src={plant3} alt={plant3} width="125rem"/>
        </div>
        <div>
          <h3>Tip 2</h3>
          <h4>Don't overwater your plant</h4>
          <p>
            The most important thing to remember is DON’T OVERWATER YOUR PLANT.
            One of the most common mistakes new plant parents make is
            giving their plants too much water. A good rule of thumb for most
            plants is to water when the top 1-2 inches of soil is dry (use your
            finger to test the soil). Plants do not like to sit in soggy soil,
            so make sure you are removing the excess water after watering.
          </p>
          <img src={plant5} alt={plant5} width="125rem"/>
        </div>
        <div>
          <h3>Tip 3</h3>
          <h4>Choose the right spot.</h4>
          <p>
            Choosing the right spot for your plant starts with choosing the
            right plant for the light you have. Some, can adapt to and even
            prefer low light, while others prefer darker areas.
          </p>
          <img src={plant8} alt={plant8} width="125rem"/>
        </div>
        <div>
          <h3>Tip 4</h3>
          <h4>Be Patient.</h4>
          <p>
            Some plants take time to acclimate to their new environment. If a
            few leaves drop off in the first couple of weeks, don’t panic! This
            is perfectly normal and is just a sign of your plant adjusting to
            its new home. Give it time, and you should start to see positive
            results.
          </p>
          <img src={plant9} alt={plant9} width="125rem"/>
        </div>
        <div>
          <h3>Tip 5</h3>
          <h4>Ask for help.</h4>
          <p>
            The online plant community is alive and thriving. Do your research
            and reach out to others when you need a little advice.
          </p>
        </div>
        <div>
          <ViewGardenButton />
          <br/>
          <br/>
          <img src={gardening} alt={gardening} width="250rem"/>
          <br/>
          <br/>
        </div>
        </section>
      </div>
    );
  }
}
