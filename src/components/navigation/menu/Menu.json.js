import React from 'react'
import SearchIcon from '../../icons/SearchIcon'
import LinkButton from '../../buttons/LinkButton'

export default [
  {
    to: '/react',
    text: 'React',
    children: [
      {
        to: '/react/training',
        text: 'React Courses',
      },
      {
        to: '/react/training/corporate',
        text: 'React Corporate Training',
      },
      {
        to: '/react/curriculum',
        text: 'React Curriculum',
      },
    ],
  },
  {
    to: '/graphql',
    text: 'GraphQL',
    children: [
      {
        to: '/graphql/training',
        text: 'GraphQL Courses',
      },
      {
        to: '/graphql/training/corporate',
        text: 'GraphQL Corporate Training',
      },
      {
        to: '/graphql/curriculum',
        text: 'GraphQL Curriculum',
      },
    ],
  },
  {
    to: '/graphql',
    text: 'JAMStack',
    children: [
      {
        to: '/graphql/training',
        text: 'GraphQL Courses',
      },
      {
        to: '/graphql/training/corporate',
        text: 'GraphQL Corporate Training',
      },
      {
        to: '/graphql/curriculum',
        text: 'GraphQL Curriculum',
      },
    ],
  },
  {
    to: '/about-us',
    text: 'About',
    children: [
      {
        to: '/about-us',
        text: 'The Academy',
      },
      {
        to: '/partners',
        text: 'Partners',
        hideOnMobile: true,
      },
      {
        to: '/community',
        text: 'Community',
        hideOnMobile: true,
      },
    ],
  },
  {
    to: '/blog',
    text: 'Blog',
  },
  {
    to: '/search',
    text: 'Search',
    icon: <SearchIcon style={{ marginBottom: '-8px' }} />,
  },
  {
    to: '#contact-us',
    text: 'Contact',
    box: LinkButton,
  },
]
