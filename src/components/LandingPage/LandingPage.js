import React from "react";
import ViewGardenButton from "../ViewGardenButton/ViewGardenButton";

export default class LandingPage extends React.Component {
  render() {
    return (
      <section>
        <h1>Welcome to Bloom</h1>
        <p>Bloom is a great way to keep track of your indoor garden. </p>
        <p>
          The Bloom app is a great way to create a visual representation of all
          of the plants you own. Bloom is the best way to keep your jungle
          organized.
        </p>
        <p>
          By providing educational reminders about how and when to care for each
          plant in you can make sure that your urban jungle is always thriving.{" "}
        </p>
        <p>
          View your garden to take a look at all of the plants you currently
          own. In your garden you can view care information and details to help
          you tend to each plant.{" "}
        </p>
        <p>As you aquire new plants, you can add them to your garden.</p>

        <ViewGardenButton />
      </section>
    );
  }
}
