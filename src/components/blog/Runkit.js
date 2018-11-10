import React from 'react'
import Helmet from 'react-helmet'
import Embed from 'react-runkit'

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

export const EmbedRunkit = props => (
  <RunkitContext.Consumer>
    {({ loaded, load, loadRunkit }) => {
      if (loaded) {
        return <Embed {...props} />
      }
      if (!load) {
        loadRunkit()
      }
      return null
    }}
  </RunkitContext.Consumer>
)
