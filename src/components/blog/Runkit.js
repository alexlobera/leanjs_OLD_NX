import React from 'react'
import Helmet from 'react-helmet'
import Embed from 'react-runkit'
import styled from 'styled-components'

const RunkitContext = React.createContext()

export class RunkitProvider extends React.Component {
  state = {
    loaded: false,
    loading: false,
    load: false,
  }

  onRunkitLoaded() {
    this.setState({ loaded: true, loading: false })
  }

  loadRunkit = () => {
    this.setState({ load: true })
  }

  render() {
    const { load } = this.state
    const { loadRunkit } = this
    let declarativeLoadRunkit = null
    if (load) {
      window.__onRunkitLoaded = this.onRunkitLoaded.bind(this)
      declarativeLoadRunkit = (
        <Helmet
          script={[
            {
              type: 'text/javascript',
              src: 'https://embed.runkit.com',
              async: true,
              onLoad: 'window.__onRunkitLoaded()',
            },
          ]}
        />
      )
    }
    return (
      <RunkitContext.Provider value={{ ...this.state, loadRunkit }}>
        {declarativeLoadRunkit}
        {this.props.children}
      </RunkitContext.Provider>
    )
  }
}

// TODO add some SVG that looks like code?
const CodePlaceholder = styled.div`
  height: ${props => props.height || '200px'};
  width: 100%;
`

export const EmbedRunkit = ({ children, ...rest }) => (
  <RunkitContext.Consumer>
    {({ loaded, load, loadRunkit }) => {
      if (loaded) {
        return <Embed {...rest} />
      }
      if (!load) {
        loadRunkit()
      }
      let height
      if (Array.isArray(children) && children[0]) {
        const numberOfLines = children[0].split(/\r\n|\r|\n/).length
        height = `${numberOfLines * 25}px`
      }

      return <CodePlaceholder height={height} />
    }}
  </RunkitContext.Consumer>
)
