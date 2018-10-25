import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import DesktopMenu, { DesktopMenuItem } from './DesktopMenu'

describe('<DesktopMenu />', () => {
  it('should render the list of menu items', () => {
    const wrapper = shallow(<DesktopMenu />)

    expect(wrapper.find(DesktopMenuItem).length).toBe(4)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should render curriculum as the first item on the menu', () => {
    const wrapper = shallow(<DesktopMenu />)

    expect(
      wrapper
        .find(DesktopMenuItem)
        .first()
        .props()
        .to.toLowerCase()
    ).toMatch(/curriculum/)
  })
})
