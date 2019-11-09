import React from 'react'
import NodejsSession from './sessions/graphql/server/NodejsSession'
import SchemaDesignSession from './sessions/graphql/server/SchemaDesignSession'
import ThinkingInGraphQLSession from './sessions/graphql/server/ThinkingInGraphQLSession'
import ErrorAndSecuritySession from './sessions/graphql/server/ErrorAndSecuritySession'
import GraphQLServerRecapSession from './sessions/graphql/server/GraphQLServerRecapSession'
import GraphQLClientFundamentalsSession from './sessions/graphql/client/GraphQLClientFundamentalsSession'
import AdvGQLQueryMutationSession from './sessions/graphql/client/AdvGQLQueryMutationSession'
import GraphQLClientRecapSession from './sessions/graphql/client/GraphQLClientRecapSession'
//import GraphQLApolloClientDaySessions from './sessions/GraphQLApolloClientDaySessions'
import { Li } from '../layout/Ul'

import { GRAPHQL_BOOTCAMP } from '../../config/data'
import Curriculum, { renderSection } from './Curriculum'

export const sessionsFirstHalf = [
  {
    subTitle: 'Node.js and cloud, Thinking in GraphQL, and Schema design',
    comps: [NodejsSession, ThinkingInGraphQLSession, SchemaDesignSession],
  },
  {
    subTitle: 'Error handling, Security design, and Consolidation Project',
    comps: [ErrorAndSecuritySession, GraphQLServerRecapSession],
  },
]
export const sessionsSecondHalf = [
  {
    subTitle:
      'GraphQL client fundamentals, Advanced queries and mutations, and Consolidation Project',
    comps: [
      GraphQLClientFundamentalsSession,
      AdvGQLQueryMutationSession,
      GraphQLClientRecapSession,
    ],
  },
]

const type = GRAPHQL_BOOTCAMP

const CurriculumGraphQLBootcamp = ({
  toggleNavigateTo = `/graphql/curriculum?tab=${type}`,
  training,
  section = {},
  ...rest
}) => {
  const sectionProps = {
    ...section,
    toggleNavigateTo,
    type,
  }
  const renderSectionArgs = {
    training,
    initialDayOffset: 1,
    sectionProps,
    preEvening: true,
  }

  return (
    <Curriculum
      title="GraphQL Bootcamp Curriculum"
      training={training}
      type={type}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalf.map(renderSection(renderSectionArgs))}
      secondHalf={sessionsSecondHalf.map(
        renderSection({
          ...renderSectionArgs,
          initialDayOffset: sessionsFirstHalf.length,
        })
      )}
    />
  )
}

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>A developer with some experience developing React applications?</Li>
    <Li>Perfect for developers with 1+ year building backends and REST APIs</Li>
    <Li>Build production ready apps leverging GraphQL.</Li>
  </React.Fragment>
)

export const LearningObjectivesList = () => (
  <React.Fragment>TODO</React.Fragment>
)

CurriculumGraphQLBootcamp.LearningObjectivesList = LearningObjectivesList
CurriculumGraphQLBootcamp.TargetAudienceList = TargetAudienceList

export default CurriculumGraphQLBootcamp

// import React from 'react'
// import Link from '../navigation/Link'
// import { Li } from '../layout/Ul'
// import { H2Ref } from '../text'
// import Section from './CurriculumSection'
// // import GraphQLServerDayOneSessions from './sessions/DELETEME_GraphQLServerDayOneSessions'
// // import GraphQLServerDayTwoSessions from './sessions/GraphQLServerDayTwoSessions'
// import NodejsSession from './sessions/graphql/server/NodejsSession'
// import SchemaDesignSession from './sessions/graphql/server/SchemaDesignSession'
// import ThinkingInGraphQLSession from './sessions/graphql/server/ThinkingInGraphQLSession'
// import ErrorAndSecuritySession from './sessions/graphql/server/ErrorAndSecuritySession'
// import GraphQLApolloClientDaySessions from './sessions/GraphQLApolloClientDaySessions'
// import { GRAPHQL_BOOTCAMP } from '../../config/data'
// import selectCurriculumLayout from './selectCurriculumLayout'

// const CurriculumGraphQLBootcamp = ({
//   showTitle = true,
//   layout,
//   enableToggle,
//   isOpen,
//   toggleNavigateTo = `/graphql/curriculum?tab=${GRAPHQL_BOOTCAMP}`,
//   showLinkToCurriculum = true,
//   marketingCard,
//   trainings,
// }) => {
//   const type = GRAPHQL_BOOTCAMP
//   const sectionProps = {
//     ...section,
//     toggleNavigateTo,
//     type,
//   }
//   const commonProps = {
//     enableToggle,
//     toggleNavigateTo,
//     type,
//     isOpen,
//   }
//   const firstHalf = (
//     <React.Fragment>
//       <Section
//         {...commonProps}
//         title="Evening pre-training: Nodejs fundamentals (optional)"
//         name="day0"
//         subTitle="Nodejs Fundamentals"
//       >
//         <NodejsSession />
//       </Section>
//       <Section
//         {...commonProps}
//         title="Day 1: GraphQL API"
//         name="day1"
//         subTitle="From REST to GraphQL: schema, error, and security design"
//       >
//         <ThinkingInGraphQLSession />
//         <SchemaDesignSession />
//         <ErrorAndSecuritySession />
//       </Section>
//     </React.Fragment>
//   )
//   const secondHalf = (
//     <React.Fragment>
//       {/* <Section
//         {...commonProps}
//         title="Day 2: Advanced GraphQL API"
//         name="day2"
//         subTitle="Advanced Schema, Performance, and recap project"
//       >
//         <GraphQLServerDayTwoSessions />
//       </Section> */}
//       <Section
//         {...commonProps}
//         title="Day 2: GraphQL in React with Apollo Client"
//         name="day2"
//         subTitle="Apollo Client fundamentals, performance, testing, and tooling"
//       >
//         <GraphQLApolloClientDaySessions />
//       </Section>
//       {marketingCard ? React.cloneElement(marketingCard, { type }) : null}
//     </React.Fragment>
//   )

//   const title = showTitle ? (
//     <H2Ref>
//       GraphQL Bootcamp Curriculum{' '}
//       <Link to="#curriculum" name="curriculum">
//         #
//       </Link>
//     </H2Ref>
//   ) : null

//   return selectCurriculumLayout({
//     firstHalf,
//     secondHalf,
//     layout,
//     type,
//     title,
//     trainings,
//     curriculumTo: showLinkToCurriculum ? toggleNavigateTo : undefined,
//   })
// }

// export const TargetAudienceList = () => (
//   <React.Fragment>
//     <Li>A developer with some experience developing React applications?</Li>
//     <Li>Perfect for developers with 1+ year building backends and REST APIs</Li>
//     <Li>Build production ready apps leverging GraphQL.</Li>
//   </React.Fragment>
// )

// export default CurriculumGraphQLBootcamp
