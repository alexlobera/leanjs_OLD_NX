import PropTypes from 'prop-types'

import CurriculumReactBootcamp from './CurriculumReactBootcamp'
import CurriculumPartTime from './CurriculumPartTime'
import CurriculumReactNative from './CurriculumReactNative'
import MarketingCard from './MarketingCard'
import CurriculumAdvancedReact from './CurriculumAdvancedReact'
import CurriculumGraphQLBootcamp from './CurriculumGraphQLBootcamp'
import CurriculumGraphQLAPI from './CurriculumGraphQLAPI'
import FullCurriculumsReact from './FullCurriculumsReact'
import CurriculumCorporateReact from './CurriculumCorporateReact'
import CurriculumReactFundamentals from './CurriculumReactFundamentals'
import CurriculumGraphQLWorkshops from './CurriculumGraphQLWorkshops'
import FullCurriculumsGraphQL from './FullCurriculumsGraphQL'

export {
  CurriculumReactBootcamp,
  CurriculumPartTime,
  CurriculumReactNative,
  MarketingCard,
  CurriculumAdvancedReact,
  CurriculumGraphQLBootcamp,
  CurriculumGraphQLAPI,
  FullCurriculumsReact,
  CurriculumCorporateReact,
  CurriculumReactFundamentals,
  CurriculumGraphQLWorkshops,
  FullCurriculumsGraphQL,
}

export const curriculumCommonPropTypes = {
  showTitle: PropTypes.bool,
  isOpen: PropTypes.bool,
  enableToggle: PropTypes.bool,
  toggleNavigateTo: PropTypes.string,
  marketingCard: PropTypes.object,
  showLinkToCurriculum: PropTypes.bool,
  layout: PropTypes.object,
  trainings: PropTypes.array,
  training: PropTypes.object,
}
