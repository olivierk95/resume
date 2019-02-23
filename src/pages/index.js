import React, { Component } from "react"

// import components
import SEO from "../components/seo"
import ProfilePicture from "../components/profilepicture"
import ContentContainer from "../components/contentcontainer"

// import styles
import "../styles/main.scss"

class IndexPage extends Component {
  render () {
    return (
      <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <body>
          <header>
            <div className="typewriter">
              <h1>Hello, I am Olivier Keutgens!</h1>
            </div>
            <div className="secondtypewriter">
              <h2 className="typewriter">
                ... and this my <span>resume.</span>
              </h2>
              <h2 className="end">&nbsp;head.</h2>
            </div>
          </header>

          <div className="content">
            <div className="info-left">
              <div className="title">
                <h1>&nbsp;Junior Developer - Front end & Back end &nbsp;</h1>
              </div>

              <div className="introduction">
                <h5>
                  Passionate about <b>entrepreneurship</b>, <b>creativity</b> and{" "}
                  <b>digitality</b>, always optimist, nature and diversity lover,
                  change-enthusiast, backpacker, dedicated and motivated volunteer,
                  marketer (with Master!), flexible and eager to learn from others.
                  I aimed at improving the world we are living in by putting my
                  skills at the service of projects that make sense to me.
                </h5>
              </div>
            </div>

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
