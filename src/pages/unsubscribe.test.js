import React from 'react'
import { mount } from 'enzyme'
import Unsubscribe, { EmailInput } from './unsubscribe'
import { Button } from '../components/buttons'
import waitForExpect from 'wait-for-expect'

describe('Unsubscribe', () => {
  const api = {
    triggerUnsubscribe: jest.fn(email => Promise.resolve(email)),
  }
  const wrapper = mount(<Unsubscribe api={api} />)

  it('the input email should be empty', () => {
    expect(wrapper.find('input').text()).toBe('')
  })

  it('should keep the button disabled if email is not valid', () => {
    wrapper
      .find(EmailInput)
      .find('input')
      .simulate('change', { target: { value: 'hello' } })

    console.log(wrapper.find(Button).debug())

    expect(wrapper.find(Button).prop('disabled')).toBe(true)
  })
  it(`should enable button if email is valid`, () => {
    wrapper
      .find(EmailInput)
      .find('input')
      .simulate('change', { target: { value: 'hello@email.com' } })

    console.log(wrapper.find(Button).debug())

    expect(wrapper.find(Button).prop('disabled')).toBe(false)
  })

  it('should call api with a valid email', async () => {
    await waitForExpect(() => {
      wrapper.find(Button).find('button').simulate('click')
      wrapper.update()
      console.log(wrapper.debug())
      // expect(api.triggerUnsubscribe).toHaveBeenCalledWith('hello@email.com')
    })
  })
})
