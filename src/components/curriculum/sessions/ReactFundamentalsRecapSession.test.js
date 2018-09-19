import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import ReactFundamentalsRecapSession from './ReactFundamentalsRecapSession'

describe('<ReactFundamentalsRecapSession />', () => {
  it('should render component', () => {
    const wrapper = shallow(<ReactFundamentalsRecapSession />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
