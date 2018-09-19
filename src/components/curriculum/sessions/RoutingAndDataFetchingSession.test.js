import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import RoutingAndDataFetchingSession from './RoutingAndDataFetchingSession'

describe('<RoutingAndDataFetchingSession />', () => {
  it('should render component', () => {
    const wrapper = shallow(<RoutingAndDataFetchingSession />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
