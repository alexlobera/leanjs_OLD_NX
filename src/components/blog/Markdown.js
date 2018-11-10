import React from 'react'
import { EmbedRunkit } from './Runkit'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import styled from 'styled-components'

export const Code = props => {
  if (props.className === 'language-runkit') {
    return <EmbedRunkit {...props} source={props.children.toString()} />
  } else {
    return <code>{props.children}</code>
  }
}

export const Tweet = ({ id }) => <TwitterTweetEmbed tweetId={id} />

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
