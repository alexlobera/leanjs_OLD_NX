import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import NotFoundPage from './404'

describe('<NotFoundPage />', () => {
  it('should render component', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
