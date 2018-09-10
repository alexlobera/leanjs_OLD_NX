import React from 'react'
import 'jest-styled-components'
import renderer from 'react-test-renderer'

import {
  HideComponentsUsingCss,
  DisplayComponentsUsingCss
} from './index'



describe('HideComponentsUsingCss', () => {

  it('should hide components on screen size XS', () => {
    expect(renderer.create(<HideComponentsUsingCss xs><div /></HideComponentsUsingCss>).toJSON()).toMatchSnapshot()
  })

  it('should hide components on screen sizes XS and SM', () => {
    expect(renderer.create(<HideComponentsUsingCss xs sm><div /></HideComponentsUsingCss>).toJSON()).toMatchSnapshot()
  })

  it('should hide components on screen sizes XS and MD', () => {
    expect(renderer.create(<HideComponentsUsingCss xs md><div /></HideComponentsUsingCss>).toJSON()).toMatchSnapshot()
  })

  it('should hide components on screen sizes XS and LG', () => {
    expect(renderer.create(<HideComponentsUsingCss xs lg><div /></HideComponentsUsingCss>).toJSON()).toMatchSnapshot()
  })

  it('should hide components on screen size SM', () => {
    expect(renderer.create(<HideComponentsUsingCss sm><div /></HideComponentsUsingCss>).toJSON()).toMatchSnapshot()
  })

  it('should hide components on screen sizes SM and MD', () => {
    expect(renderer.create(<HideComponentsUsingCss sm md><div /></HideComponentsUsingCss>).toJSON()).toMatchSnapshot()
  })

  it('should hide components on screen sizes SM and LG', () => {
    expect(renderer.create(<HideComponentsUsingCss sm lg><div /></HideComponentsUsingCss>).toJSON()).toMatchSnapshot()
  })

  it('should hide components on screen size MD', () => {
    expect(renderer.create(<HideComponentsUsingCss md><div /></HideComponentsUsingCss>).toJSON()).toMatchSnapshot()
  })

  it('should hide components on screen sizes MG and LG', () => {
    expect(renderer.create(<HideComponentsUsingCss md lg><div /></HideComponentsUsingCss>).toJSON()).toMatchSnapshot()
  })

  it('should hide components on screen size LG', () => {
    expect(renderer.create(<HideComponentsUsingCss lg><div /></HideComponentsUsingCss>).toJSON()).toMatchSnapshot()
  })

})

