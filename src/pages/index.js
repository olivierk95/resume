import React, { Component } from "react";
import MediaQuery from 'react-responsive';

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
import "../styles/mediaqueries.scss";


const animation = {
    position: "fixed",
    zIndex: "0",
    top: "0",
    left: "0",
}
class IndexPage extends Component {
  render () {
    return (
      <>
        <SEO title="Resume" keywords={[`resume`, `gatsby`, `react`]} />
        <body>

          <Particles params={parameters} style={animation} />

          <Header />

          <MediaQuery query="(min-device-width:0px) and (max-device-width: 680px)">
            <div className="content">

              <PresentationContainer />

              <ProfilePicture />

              <ContentContainer />

            </div>            
          </MediaQuery>

          <MediaQuery query="(min-device-width:1025px)">
            <div className="content">

              <PresentationContainer />

              <ProfilePicture />

              <ContentContainer />
              
            </div>    
              
          </MediaQuery>

          <MediaQuery className="content" query="(min-device-width: 681px) and (max-device-width: 1024px)">
            <div className="content">
              <ProfilePicture />

              <div>
                <PresentationContainer />

                <ContentContainer />
              </div>
            </div>       
          </MediaQuery>

          <div className="actions-box">
            <Download />

            <Contact />
          </div>

        </body>
      </>
    );
  }
}

export default IndexPage
