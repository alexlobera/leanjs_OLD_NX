import React from 'react'
import { mount } from 'enzyme'
import Unsubscribe, {
  EmailInput,
  ThanksTitle,
  THANKS_MESSAGE,
} from './unsubscribe'
import { Button } from '../components/buttons'

describe('Unsubscribe', () => {
  const triggerUnsubscribe = jest.fn(({ email }) => Promise.resolve(email))

  const wrapper = mount(<Unsubscribe triggerUnsubscribe={triggerUnsubscribe} />)

  it('the input email should be empty', () => {
    expect(wrapper.find('input').text()).toBe('')
  })

  it('should keep the button disabled if email is not valid', () => {
    wrapper
      .find(EmailInput)
      .find('input')
      .simulate('change', { target: { value: 'hello' } })

    expect(wrapper.find(Button).prop('disabled')).toBe(true)
  })
  it(`should enable button if email is valid`, () => {
    wrapper
      .find(EmailInput)
      .find('input')
      .simulate('change', { target: { value: 'hello@email.com' } })

    expect(wrapper.find(Button).prop('disabled')).toBe(false)
  })

  it('should call api with a valid email', () => {
    wrapper
      .find(EmailInput)
      .find('input')
      .simulate('change', { target: { value: 'hello@email.com' } })

    wrapper
      .find(Button)
      .closest('form')
      .simulate('submit')

    expect(triggerUnsubscribe).toHaveBeenCalledWith({
      email: 'hello@email.com',
    })
  })

  it('should show the confirm message after form submit', () => {
    const thanksMssg = wrapper.find(ThanksTitle).text()
    expect(thanksMssg).toBe(THANKS_MESSAGE)
  })
})
