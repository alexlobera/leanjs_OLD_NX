import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import PhoneMenu, { MenuContent, PhoneMenuItem, Overlay } from './index'

describe('<PhoneMenu />', () => {
  it('should close the menu when a menu item is clicked', () => {
    const wrapper = shallow(<PhoneMenu defaultIsOpen />)

    expect(wrapper.find(MenuContent).props().isOpen).toBe(true)
    expect(wrapper.find(Overlay)).toBeTruthy()

    wrapper
      .find(PhoneMenuItem)
      .first()
      .simulate('click')

    expect(wrapper.find(MenuContent).props().isOpen).toBe(false)
    expect(wrapper.find(Overlay).length).toBe(0)
  })

  it('should be closed by default', () => {
    const wrapper = shallow(<PhoneMenu />)

    expect(wrapper.find(MenuContent).props().isOpen).toBe(false)
    expect(wrapper.find(Overlay).length).toBe(0)
  })

  it('should render a menu with less than 11 items in the first navigation level', () => {
    const wrapper = shallow(<PhoneMenu />)

    expect(wrapper.find(PhoneMenuItem).length).toBeLessThan(11)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
