import React from 'react'
import { EmbedRunkit } from './Runkit'
import styled from 'styled-components'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

function getEditor({ noInline, code }) {
  return (
    <LiveProvider code={code} scope={{ styled }} noInline={noInline}>
      <LiveEditor tabIndex="-1" />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  )
}

export const Code = props => {
  if (props.className === 'language-runkit') {
    return <EmbedRunkit {...props} source={props.children.toString()} />
  } else if (props.className === 'language-.jsx') {
    return getEditor({ noInline: false, code: props.children.toString() })
  } else if (props.className === 'language-.jsx-inline') {
    return getEditor({ noInline: true, code: props.children.toString() })
  } else {
    return <code>{props.children}</code>
  }
}

export const Codesandbox = ({ height = '600px', id, view = 'split' }) => (
  <iframe
    src={`https://codesandbox.io/embed/${id}?verticallayout=1&view=${view}`}
    style={{
      width: '100%',
      height,
      border: 0,
      borderRadius: 0,
      overflow: 'hidden',
    }}
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin "
  />
)

export const Blockquote = styled.blockquote`
  padding-top: 10px;
  padding-bottom: 20px;
  background: #f9f9f9;
  border-left: 5px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  font-style: italic;
  /* quotes: '\\201C''\\201D''\\2018''\\2019'; */
  :before {
    color: #ccc;
    /* content: open-quote; */
    content: '”';
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
`
