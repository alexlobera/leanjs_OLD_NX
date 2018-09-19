import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import FormsAndAuthSession from './FormsAndAuthSession'

describe('<FormsAndAuthSession />', () => {
  it('should render component', () => {
    const wrapper = shallow(<FormsAndAuthSession />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
