import React from 'react'
import { shallow } from 'enzyme'

import LinkButton from './LinkButton'

describe('<LinkButton />', () => {
  it(`should execute the function passed to the onClick prop even when the prop is overridden in the children`, () => {
    const onClickProp = jest.fn()

    const wrapper = shallow(
      <LinkButton onClick={onClickProp} trackUserBehaviour={() => {}} />
    )

    wrapper.props().onClick()

    expect(onClickProp).toHaveBeenCalled()
  })
})
