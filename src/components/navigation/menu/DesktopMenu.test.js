import React from 'react'
import { shallow } from 'enzyme'

import DesktopMenu, { DesktopMenuItem } from './DesktopMenu'

describe('<DesktopMenu />', () => {
    it('should render the list of menu items', () => {
        const data = [{ to: 'lorem', text: 'ipsum' }]

        const wrapper = shallow(<DesktopMenu data={data} />)

        expect(wrapper.find(DesktopMenuItem).length).toBe(1)
    })
})