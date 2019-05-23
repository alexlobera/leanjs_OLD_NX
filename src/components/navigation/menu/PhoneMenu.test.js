import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import PhoneMenu, { Menu, PhoneMenuItem } from './PhoneMenu'

describe('<PhoneMenu />', () => {
  it('should close the menu when a menu item is clicked', () => {
    const wrapper = shallow(<PhoneMenu isOpen />)

    expect(wrapper.find(Menu).props().isOpen).toBe(true)

    wrapper
      .find(PhoneMenuItem)
      .first()
      .simulate('click')

    expect(wrapper.find(Menu).props().isOpen).toBe(false)
  })

  it('should be closed by default', () => {
    const wrapper = shallow(<PhoneMenu />)
    expect(wrapper.find(Menu).props().isOpen).toBe(false)
  })

  it('should render the list of menu items', () => {
    const wrapper = shallow(<PhoneMenu />)

    expect(wrapper.find(PhoneMenuItem).length).toBe(7)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should render curriculum as the first item on the menu', () => {
    const wrapper = shallow(<PhoneMenu />)

    expect(
      wrapper
        .find(PhoneMenuItem)
        .first()
        .props()
        .children.toLowerCase()
    ).toMatch(/react courses/)
  })
})
