import React, { useState } from 'react'

import Ul from '../layout/Ul'
import P from '../text/P'
import Button from '../buttons/Button'

const LearningObjectivesUl = ({ children, showAllButton = true }) => {
  const [showAll, setShowAll] = useState(!showAllButton)
  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <>
      <Ul>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            showAll,
          })
        )}
      </Ul>
      {showAllButton && (
        <P>
          <Button
            className="show-all-learning-objectives"
            onClick={toggleShowAll}
          >
            {showAll
              ? `Hide learning objectives`
              : `Show all the learning objectives`}
          </Button>
        </P>
      )}
    </>
  )
}

export default LearningObjectivesUl
