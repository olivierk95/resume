import React, { Component } from "react";

// import components
import SEO from "../components/seo";
import Header from "../components/header";
import ProfilePicture from "../components/profilepicture";
import ContentContainer from "../components/contentcontainer";
import PresentationContainer from "../components/presentationcontainer";

// import styles
import "../styles/main.scss";

class IndexPage extends Component {
  render () {
    return (
      <>
        <SEO title="Resume" keywords={[`resume`, `gatsby`, `react`]} />
        <body>
          <Header />

          <div className="content">
            
            <PresentationContainer />

            <ProfilePicture />

            <ContentContainer />
              
          </div>
          {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div> */}
        </body>
      </>
    );
  }
}

export default IndexPage
