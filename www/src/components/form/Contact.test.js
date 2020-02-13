import React from 'react'
import { mount } from 'enzyme'
import Contact, { THANKS_MESSAGE, ThanksTitle, EmailInput } from './Contact'
import { Button } from '../buttons'

describe('Contact Form', () => {
  const triggerSubscribe = jest.fn(email => Promise.resolve(email))

  const wrapper = mount(<Contact triggerSubscribe={triggerSubscribe} />)

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

    expect(triggerSubscribe).toHaveBeenCalledWith({ email: 'hello@email.com' })
  })

  it('should show the confirm message after form submit', () => {
    const thanksMssg = wrapper.find(ThanksTitle).text()
    expect(thanksMssg).toBe(THANKS_MESSAGE)
  })
})
