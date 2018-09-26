import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Unsubscribe from './unsubscribe'

describe('<Unsubscribe />', () => {
  it('should render component', () => {
    const wrapper = shallow(<Unsubscribe />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
