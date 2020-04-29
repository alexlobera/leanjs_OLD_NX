import React, { useState } from 'react'
import { H3, P } from '../text'
import Ul, { Li } from 'src/components/layout/Ul'
import Button from 'src/components/buttons/Button'
import { Form, CheckboxField, InputField } from 'src/components/form'
import { WHITE, DARK_GREY } from '../../config/styles'
import { sendFeedback } from '../../api/rest'
import Spinner from '../form/Spinner'

function Feedback() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const handleFormSubmit = async feedback => {
    await sendFeedback({
      'feedback from': 'Training instance default feedback form',
      ...feedback,
    })
    setFormSubmitted(true)
  }

  return formSubmitted ? (
    <H3 sx={{ my: 3 }}>Thank's a lot for your feedback</H3>
  ) : (
    <Form
      onSubmit={handleFormSubmit}
      render={({ pristine, handleSubmit, submitting, ...rest }) => {
        return (
          <>
            <H3>Tell us about yourself</H3>
            <P>What are your main interests in a React training?</P>
            <form onSubmit={handleSubmit}>
              <Ul variant="unstyled">
                <Li>
                  <CheckboxField
                    color={WHITE}
                    name="discussingWithExperts"
                    label="Discussing real-world problems with industry experts"
                  />
                </Li>
                <Li>
                  <CheckboxField
                    color={WHITE}
                    name="networking"
                    label="Networking opportunities"
                  />
                </Li>
                <Li>
                  <CheckboxField
                    color={WHITE}
                    name="workingWithOtherDevs"
                    label="Working on real-world problems with other devs"
                  />
                </Li>
                <Li>
                  <CheckboxField
                    color={WHITE}
                    name="certification"
                    label="To become a certified React Developer"
                    elementOnChecked={
                      <InputField
                        name="certification.expand"
                        placeholder="How would you like us to asses your skills?"
                      />
                    }
                  />
                </Li>
                <Li>
                  <CheckboxField
                    color={WHITE}
                    name="upToDateStructuredCurriculum"
                    label="Structured curriculum and up-to-date program"
                  />
                </Li>
                <Li>
                  <Button
                    type="submit"
                    disabled={submitting || pristine}
                    sx={{ mt: 3 }}
                  >
                    {submitting ? (
                      <Spinner color={DARK_GREY} />
                    ) : (
                      'Submit feedback'
                    )}
                  </Button>
                </Li>
              </Ul>
            </form>
          </>
        )
      }}
    />
  )
}

export default Feedback
