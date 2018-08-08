import React from 'react'
import styled from 'styled-components'

import Ul from '../layout/Ul'
import { reactBlue } from '../../config/styles'

const TabContainer = styled(Ul)`
    margin: 0;
    padding: 0;
    > li {
        list-style-type: none;
        display: inline-block;
        margin: 0 8px;
        span, a {
            padding: 8px;
        }
        
    }
`

const TabLi = styled.li`
    ${props => props.active ? `
        position:relative;
        text-align:center;
        a::after {
            height: 3px;
            display: block;
            width: 100%;
            background: ${reactBlue()};
            border-right: 3px red;
            content: '';
            position: absolute;
            bottom:-10px;
            left:0;
        }
    `: ''}
`

export const TabItem = ({ children, active, ...props }) => (
    <TabLi active={active}>
        <a {...props}>
            {children}
        </a>
    </TabLi>
)

export const TabLabel = ({ children, ...props }) => (
    <span {...props}>{children}</span>
)

class Tabs extends React.Component {
    state = {
        active: null
    }

    render() {
        const { active } = this.state
        const newChildren = React.Children.map(this.props.children, child => (
            React.cloneElement(child, {
                active: child.props.name === active || (!active && child.props.default)
            })
        ))

        return (
            <TabContainer>
                {newChildren}
            </TabContainer>
        )
    }
}

export default Tabs