import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About" keywords={[`gatsby`, `About`, `react`]} />{" "}
      <div className="site-About">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>About Us</h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default About
