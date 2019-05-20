import styled from 'styled-components'

import { REACT_BLUE_DARK } from 'src/config/styles'

const TrainingCard = styled.div`
  border-left: 5px solid;
  border-color: ${REACT_BLUE_DARK};
  padding: 1rem 1rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  margin: 0 0 1rem 0;
  button {
    display: inline-block;
  }
`

export default TrainingCard
