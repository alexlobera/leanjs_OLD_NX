import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import MarketingCard from './MarketingCard'

describe('<MarketingCard />', () => {
  it('should render component', () => {
    const wrapper = shallow(<MarketingCard />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
