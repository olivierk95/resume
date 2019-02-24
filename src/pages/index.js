import React, { Component } from "react";

// import components
import SEO from "../components/seo";
import Header from "../components/header";
import ProfilePicture from "../components/profilepicture";
import ContentContainer from "../components/contentcontainer";
import PresentationContainer from "../components/presentationcontainer";
import Contact from "../components/contact";
import Download from "../components/download";

// import styles
import "../styles/main.scss";

class IndexPage extends Component {
  render () {
    return (
      <>
        <SEO title="Resume" keywords={[`resume`, `gatsby`, `react`]} />
        <body>
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
