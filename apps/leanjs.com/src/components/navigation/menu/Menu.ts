import { MUSTARD } from '../../../config/styles';

export default [
  //   {
  //     to: '/#sprints',
  //     text: 'Sprints',
  //     onlyOn: null,
  //   },
  {
    to: '/case_studies',
    text: 'Case Studies',
    onlyOn: null,
  },
  {
    to: '/#about-us',
    text: 'About Us',
    onlyOn: null,
  },
  {
    to: '/#academy',
    text: 'Academy',
    onlyOn: null,
  },
  {
    text: 'Webinars',
    onlyOn: null,
    children: [
      {
        to: '/javascript-architecture-for-business-optimization-webinar/',
        text: 'JS architecture Part 1',
      },
      {
        to:
          '/javascript-architecture-for-business-optimization-webinar-part-2/',
        text: 'JS architecture Part 2',
      },
    ],
  },
  {
    to: 'https://medium.com/leanjs',
    text: 'Blog',
    onlyOn: null,
  },
];
