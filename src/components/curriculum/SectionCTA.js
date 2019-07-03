import React from 'react'
import styled from 'styled-components'

const SectionCTA = ({ children }) => (
  <SectionCTAstyles className="curriculum-cta">{children}</SectionCTAstyles>
)

const SectionCTAstyles = styled.div`
  padding-top: 50px;
  padding-bottom: 25px;
`
export default SectionCTA
