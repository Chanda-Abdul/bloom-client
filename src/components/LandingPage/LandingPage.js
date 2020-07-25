import React from "react";
import ViewGardenButton from "../ViewGardenButton/ViewGardenButton";
import plant2 from "../../images/plant2.png";
import plant6 from "../../images/plant6.png";
import plant9 from "../../images/plant9.png";
import plant8 from "../../images/plant8.png";
import environment from "../../images/environment.png";


export default class LandingPage extends React.Component {
  render() {
    return (
      <section className="landing-heading">
        <h1>Welcome to Bloom</h1>
        
        <p>Bloom is a great way to keep track of your indoor garden. </p>
        <img src={plant2} alt={plant2} width="125rem"/>
        <p>
          The Bloom app is a great way to create a visual representation of all
          of the plants you own and it's a great way to keep your jungle
          organized.
        </p>
        <img src={plant8} alt={plant8} width="150rem"/>
        <p>
          By providing educational reminders about how and when to care for each
          plant in you can make sure that your urban jungle is always thriving.{" "}
        </p>
        <img src={plant6} alt={plant6} width="150rem"/>
        <p>
          View your garden to take a look at all of the plants you currently
          own. In your garden you can view care information and details to help
          you tend to each plant.
        </p>
        <img src={plant9} alt={plant9} width="150rem"/>
        <p>As you aquire new plants, you can add them to your garden.</p>
        <br/>
        
        <img src={environment} alt={environment} width="300rem"/>
        <br/>
        <ViewGardenButton />
        <br/>
        <br/>
        
      </section>
    );
  }
}
