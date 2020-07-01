import ES6Session from '../sessions/ES6Session';
import ThinkingInReactSession from '../sessions/ThinkingInReactSession';
import RoutingAndDataFetchingSession from '../sessions/RoutingAndDataFetchingSession';
import ReactFundamentalsRecapSession from '../sessions/ReactFundamentalsRecapSession';
import FormsAndAuthSession from '../sessions/FormsAndAuthSession';
import StylingInReactSession from '../sessions/StylingInReactSession';
import HooksSession from '../sessions/HooksSession';
import IntroReduxSession from '../sessions/IntroReduxSession';
import TestingIntroSession from '../sessions/TestingIntroSession';
import TestingInReactSession2 from '../sessions/TestingInReactSession2';
import AdvancedReactPatternsSession from '../sessions/AdvancedReactPatternsSession';
import AdvancedHooksAndPerfSession from '../sessions/AdvancedHooksAndPerfSession';
import FundamentalsFinalProject from '../sessions/FundamentalsFinalProject';
import DesignSystemSession from '../sessions/DesignSystemSession';

export const sessionsFirstHalf = [
  {
    subTitle: 'Thinking in React, Modern JavaScript, Routing & Data Fetching',
    comps: [ThinkingInReactSession, ES6Session, RoutingAndDataFetchingSession],
  },
  {
    subTitle: 'Forms, Authentication, and Hooks',
    comps: [FormsAndAuthSession, HooksSession, ReactFundamentalsRecapSession],
  },
  {
    subTitle: 'Redux Fundamentals, deployment to production',
    comps: [IntroReduxSession, FundamentalsFinalProject],
  },
];
export const sessionsSecondHalf = [
  {
    subTitle: 'Advanced React patterns and performance',
    comps: [AdvancedReactPatternsSession, AdvancedHooksAndPerfSession],
  },
  {
    subTitle: 'Real-World Testing in React',
    comps: [TestingIntroSession, TestingInReactSession2],
  },
  {
    subTitle: 'Building a UI component library',
    comps: [StylingInReactSession, DesignSystemSession],
  },
];
