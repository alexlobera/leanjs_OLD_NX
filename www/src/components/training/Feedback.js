import React, { useState } from 'react'
import { H3, P } from '../text'
import Ul, { Li } from 'src/components/layout/Ul'
import Span from 'src/components/text/Span'
import Button from 'src/components/buttons/Button'
import Link from 'src/components/navigation/Link'
import { Form, CheckboxField, InputField } from 'src/components/form'
import { WHITE } from '../../config/styles'
import { sendFeedback } from '../../api/rest'

function Feedback({ trialPath, articlePath }) {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const handleFormSubmit = async feedback => {
    await sendFeedback({
      'feedback from': 'GraphQL part-time checkout',
      ...feedback,
    })
    setFormSubmitted(true)
  }

  return formSubmitted ? (
    <H3 sx={{ my: 3 }}>Thank's a lot for your feedback</H3>
  ) : (
    <Form
      onSubmit={handleFormSubmit}
      render={({ pristine, handleSubmit }) => (
        <>
          <H3>You can give us feedback</H3>
          <P>
            If you are not going to book a spot on the training course, you can
            tell us why to help us improve :)
          </P>
          <form onSubmit={handleSubmit}>
            <Ul variant="unstyled">
              <Li>
                <CheckboxField
                  color={WHITE}
                  name="tooExpensive"
                  label="The training  course is too expensive"
                  elementOnChecked={
                    <Span>
                      {articlePath && (
                        <>
                          Have you read the{' '}
                          <Link to={articlePath}>full value proposition</Link>?
                        </>
                      )}

                      {trialPath && (
                        <>
                          {` `}If you think it's not good value for money,{' '}
                          <Link to={trialPath}>try it first</Link>!
                        </>
                      )}
                    </Span>
                  }
                />
              </Li>
              <Li>
                <CheckboxField
                  color={WHITE}
                  name="tooLong"
                  label="The training course is too long"
                  elementOnChecked={
                    <InputField
                      name="tooLong.expand"
                      placeholder="How long should it be?"
                    />
                  }
                />
              </Li>
              <Li>
                <CheckboxField
                  color={WHITE}
                  name="timingsNotGood"
                  label="Timings are not good"
                  elementOnChecked={
                    <Ul variant="unstyled" sx={{ ml: 5 }}>
                      <Li>When does work best work for you?</Li>
                      <Li>
                        <CheckboxField
                          color={WHITE}
                          name="timingsNotGood.morningEU "
                          label="Mornings EU"
                        />
                      </Li>
                      <Li>
                        <CheckboxField
                          color={WHITE}
                          name="timingsNotGood.eveningsUSAWestCoast"
                          label="Evenings USA West Coast"
                        />
                      </Li>
                      <Li>
                        <CheckboxField
                          color={WHITE}
                          name="timingsNotGood.eveningsUSAWestCoast"
                          label="Evenings USA Est Coast"
                        />
                      </Li>
                      <Li>
                        <CheckboxField
                          color={WHITE}
                          name="timingsNotGood.weekends"
                          label="Weekends"
                        />
                      </Li>
                    </Ul>
                  }
                />
              </Li>
              <Li>
                <CheckboxField
                  color={WHITE}
                  name="curriculumNotGood"
                  label="I don't like the curriculum"
                  elementOnChecked={
                    <InputField
                      name="curriculumNotGood.expand"
                      placeholder="What would you change?"
                    />
                  }
                />
              </Li>
              <Li>
                <CheckboxField
                  color={WHITE}
                  name="other"
                  label="Other"
                  elementOnChecked={
                    <InputField
                      name="other.expand"
                      placeholder="Could please explain a bit?"
                    />
                  }
                />
              </Li>
              <Li>
                <Button type="submit" disabled={pristine} sx={{ mt: 3 }}>
                  Submit feedback
                </Button>
              </Li>
            </Ul>
          </form>
        </>
      )}
    />
  )
}

export default Feedback
