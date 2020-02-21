import React, { useState } from 'react'
import { H3, P } from '../text'
import Ul, { Li } from 'src/components/layout/Ul'
import Span from 'src/components/text/Span'
import Button from 'src/components/buttons/Button'
import Link from 'src/components/navigation/Link'
import { Form, CheckboxField, InputField } from 'src/components/form'
import { WHITE } from '../../config/styles'
import { sendFeedback } from '../../api/rest'

function FormBuilder(props) {
  console.log('aa', props)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const handleFormSubmit = async feedback => {
    await sendFeedback(feedback)
    setFormSubmitted(true)
  }

  return formSubmitted ? (
    <H3 sx={{ my: 3 }}>Thank's a lot</H3>
  ) : (
    <Form
      onSubmit={handleFormSubmit}
      render={({ pristine, handleSubmit }) => (
        <>
          <H3>title</H3>
          <form onSubmit={handleSubmit}>
            <Ul variant="unstyled">
              <Li>
                <CheckboxField
                  color={WHITE}
                  name="tooExpensive"
                  label="The training  course is too expensive"
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

export default FormBuilder
