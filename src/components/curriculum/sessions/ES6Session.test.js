import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import ES6Session from './ES6Session'

describe('<ES6Session />', () => {
  it('should render component', () => {
    const wrapper = shallow(<ES6Session />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
