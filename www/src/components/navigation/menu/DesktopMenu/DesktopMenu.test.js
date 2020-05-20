import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import DesktopMenu, { DesktopMenuItem } from './index'

describe('<DesktopMenu />', () => {
  it('should have less than 8 links at the top level', () => {
    const wrapper = shallow(<DesktopMenu />)

    expect(wrapper.find(DesktopMenuItem).length).toBeLessThan(8)
  })

  //  should render "react" not "curriculum", this is a mistake left for training purposes
  it('should render curriculum as the first item on the menu', () => {
    const wrapper = shallow(<DesktopMenu />)

    expect(
      wrapper.find(DesktopMenuItem).first().props().to.toLowerCase()
    ).toMatch(/react/)
  })

  it('should render the list of menu items', () => {
    const wrapper = shallow(<DesktopMenu />)

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
