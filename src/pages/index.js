import React from "react"
import { Link } from "gatsby"
import ScrollSnap from "scroll-snap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FullPage from "../components/fullpage"

class IndexPage extends React.Component {

  constructor(props) {
    super(props)
    this.snapContainer = React.createRef()
    this.state = {
      snapObject: null
    }
  }

  componentDidMount() {
    const snapConfig = {
      scrollSnapDestination: '0% 90%', // scroll-snap-destination css property
      scrollTimeout: 100, // time in ms after which scrolling is considered finished
      scrollTime: 300 // time in ms for the smooth snap
    }

    const callback = () => {
      console.log('snap')
    }
    const element = this.snapContainer.current
    const snapObject = new ScrollSnap(element, snapConfig)

    snapObject.bind(callback)

    this.setState({
      snapObject: snapObject
    })
  }

  componentWillUnmount() {
    this.state.snapObject.unbind()
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div ref={this.snapContainer} className="scrollsnap-container">
          <FullPage>FullPage 1</FullPage>
          <FullPage>FullPage 2</FullPage>
          <FullPage>FullPage 3</FullPage>
        </div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <div>
          <Link to="/textseite/">Textseite</Link>
        </div>
      </Layout>
    )
  }

}

export default IndexPage
