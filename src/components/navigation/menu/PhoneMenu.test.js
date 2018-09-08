import React from 'react'
import { shallow } from 'enzyme'

import PhoneMenu, { Menu, PhoneMenuItem } from './PhoneMenu'

describe('<PhoneMenu />', () => {
    it('should close the menu when a menu item is clicked', () => {
        const wrapper = shallow(<PhoneMenu isOpen />)

        expect(wrapper.find(Menu).props().isOpen).toBe(true)

        wrapper.find(PhoneMenuItem).first().simulate('click')

        expect(wrapper.find(Menu).props().isOpen).toBe(false)
    })

    it('should be closed by default', () => {
        const wrapper = shallow(<PhoneMenu />)

        expect(wrapper.find(Menu).props().isOpen).toBe(false)
    })
})