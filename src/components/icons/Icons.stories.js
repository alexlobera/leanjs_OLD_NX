import React from 'react'
import { storiesOf } from '@storybook/react'
import GitHubIcon from './GitHubIcon'
import FacebookIcon from './FacebookIcon'
import InstagramIcon from './InstagramIcon'
import LinkedinIcon from './LinkedinIcon'
import TwitterIcon from './TwitterIcon'
import ExternalLinkIcon from './ExternalLinkIcon'
import PdfDownload from './PdfDownload'
import QuestionMarkIcon from './QuestionMarkIcon'
import Tick from './Tick'

storiesOf('Atoms | Icons', module).add('External Link', () => (
  <ExternalLinkIcon fill="#000" />
))
storiesOf('Atoms | Icons', module).add('Facebook', () => (
  <FacebookIcon fill="#000" />
))
storiesOf('Atoms | Icons', module).add('GitHub', () => (
  <GitHubIcon fill="#000" />
))
storiesOf('Atoms | Icons', module).add('Instagram', () => (
  <InstagramIcon fill="#000" />
))
storiesOf('Atoms | Icons', module).add('Linkedin', () => (
  <LinkedinIcon fill="#000" />
))
storiesOf('Atoms | Icons', module).add('PDF Download', () => (
  <PdfDownload fill="#000" />
))
storiesOf('Atoms | Icons', module).add('Question Mark', () => (
  <QuestionMarkIcon fill="#000" />
))
storiesOf('Atoms | Icons', module).add('Tick', () => <Tick fill="#000" />)
storiesOf('Atoms | Icons', module).add('Twitter', () => (
  <TwitterIcon fill="#000" />
))
