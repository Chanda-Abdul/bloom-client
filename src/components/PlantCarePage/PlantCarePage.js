import React from "react";
import ViewGardenButton from "../ViewGardenButton/ViewGardenButton";

export default class PlantCarePage extends React.Component {
  render() {
    return (
      <div>
        <section>
          <h1>How to propogate your green thumb</h1>
          <h2>Tips and tricks to help you care for your indoor jungle</h2>
          <p>
            We get it. A houseplant is a living, “breathing” thing that requires
            some attention and care in order to thrive. Usually, when you buy a
            plant, there’s no one to ask for advice; little information about
            its specific requirements for water, light, and maintenance. We want
            to help everyone find their green thumb. With the right tools and a
            little help along the way, anyone can have a thriving indoor jungle.
          </p>
        </section>
        <section>
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
        </section>
        <section>
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
        </section>
        <section>
          <h3>Tip 3</h3>
          <h4>Choose the right spot.</h4>
          <p>
            Choosing the right spot for your plant starts with choosing the
            right plant for the light you have. Some, can adapt to and even
            prefer low light, while others prefer darker areas.
          </p>
        </section>
        <section>
          <h3>Tip 4</h3>
          <h4>Be Patient.</h4>
          <p>
            Some plants take time to acclimate to their new environment. If a
            few leaves drop off in the first couple of weeks, don’t panic! This
            is perfectly normal and is just a sign of your plant adjusting to
            its new home. Give it time, and you should start to see positive
            results.
          </p>
        </section>
        <section>
          <h3>Tip 5</h3>
          <h4>Ask for help.</h4>
          <p>
            The online plant community is alive and thriving. Do your research
            and reach out to others when you need a little advice.
          </p>
        </section>
        <section>
          <ViewGardenButton />
        </section>
      </div>
    );
  }
}
