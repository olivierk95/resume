import React, { Component } from "react";

// import components
import SEO from "../components/seo";
import Header from "../components/header";
import ProfilePicture from "../components/profilepicture";
import ContentContainer from "../components/contentcontainer";
import PresentationContainer from "../components/presentationcontainer";
import Contact from "../components/contact";
import Download from "../components/download";

// background effect
import Particles from "react-particles-js";
import parameters from "../../particlesjs-config.json";

// import styles
import "../styles/main.scss";


const animation = {
    position: "fixed",
    zIndex: "0",
}
class IndexPage extends Component {
  render () {
    return (
      <>
        <SEO title="Resume" keywords={[`resume`, `gatsby`, `react`]} />
        <body>

          <Particles params={parameters} style={animation} />

          <Header />

          <Download />

          <div className="content">
            
            <PresentationContainer />

            <ProfilePicture />

            <ContentContainer />
              
          </div>

          <Contact />

        </body>
      </>
    );
  }
}

export default IndexPage
