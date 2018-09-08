import React from 'react'
import { shallow } from 'enzyme'

import LinkButton from './LinkButton'

describe('<LinkButton />', () => {
    it(`should execute the prop trackUserBehaviour when the the LinkButton is clicked if the link is a call to action `, () => {
        const trackUserBehaviour = jest.fn()

        const wrapper = shallow(<LinkButton cta trackUserBehaviour={trackUserBehaviour} />)

        wrapper.props().onClick()

        expect(trackUserBehaviour).toHaveBeenCalled()
    })

    it(`should execute the prop onClick when the LinkButton is clicked if such prop is passed to the LinkButton`, () => {
        const onClickProp = jest.fn()

        const wrapper = shallow(<LinkButton onClick={onClickProp} trackUserBehaviour={() => { }} />)

        wrapper.props().onClick()

        expect(onClickProp).toHaveBeenCalled()
    })
})