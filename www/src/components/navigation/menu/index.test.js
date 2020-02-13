import React from 'react'
import { shallow } from 'enzyme'
import { Menu, PhoneMenu, DesktopMenu } from './'

describe('<Menu />', () => {
  it('should render a phone menu if it knows the screen size and it is small', () => {
    const wrapper = shallow(<Menu width={1} />)

    expect(wrapper.find(PhoneMenu).length).toBe(1)
    expect(wrapper.find(DesktopMenu).length).toBe(0)
  })

  it('should render a desktop menu if it knows the screen size and it is large', () => {
    const wrapper = shallow(<Menu width={3} />)

    expect(wrapper.find(PhoneMenu).length).toBe(0)
    expect(wrapper.find(DesktopMenu).length).toBe(1)
  })
})
