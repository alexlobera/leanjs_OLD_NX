import React, { useState } from 'react'
import { H3 } from '../text'
import Ul, { Li } from 'src/components/layout/Ul'
import Button from 'src/components/buttons/Button'
import { Form, CheckboxField } from 'src/components/form'
import { sendFeedback } from '../../api/rest'

function SanityForm({ data }) {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const handleFormSubmit = async feedback => {
    await sendFeedback({ 'feedback from': data.title, ...feedback })
    setFormSubmitted(true)
  }

  return formSubmitted ? (
    <H3 sx={{ my: 3 }}>Thank's a lot for your feedback</H3>
  ) : (
    <Form
      onSubmit={handleFormSubmit}
      render={({ pristine, handleSubmit }) => (
        <>
          <H3>{data.title}</H3>
          <form onSubmit={handleSubmit}>
            <Ul variant="unstyled">
              {data.questions.map(question => (
                <Li>
                  <CheckboxField
                    name={question.inputLabel}
                    label={question.inputLabel}
                  />
                </Li>
              ))}

              <Li>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={pristine}
                  sx={{ mt: 3 }}
                >
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

export default SanityForm
