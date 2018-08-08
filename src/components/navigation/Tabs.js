import React from 'react'
import styled from 'styled-components'

import Ul from '../layout/Ul'

const TabContainer = styled(Ul)`
    margin: 0;
    padding: 0;
    > li {
        list-style-type: none;
        display: inline-block;
        margin:0;
        span, a {
            padding: 8px;
        }
        
    }
`

const TabLi = styled.li`
    ${props => props.active ? `
        a::after {
            border-color: red;
            border-style: solid;
            position: absolute;
            top: 100%; 
            left: 10px; 
            width: 50%;
            height: 0px;
            content: '';
            opacity: 0;
            -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
            -moz-transition: opacity 0.3s, -moz-transform 0.3s;
            transition: opacity 0.3s, transform 0.3s;
            -webkit-transform: translateY(20px);
            -moz-transform: translateY(20px);
            transform: translateY(20px);
        }
    `: ''}
`

export const TabItem = ({ children, active, ...props }) => (
    <TabLi active={active}>
        <Link {...props}>
            {children}
        </Link>
    </TabLi>
)

export const TabLabel = styled.span

class Tabs extends React.Component {
    state = {
        active: null
    }

    render() {
        const newChildren = React.Children.map(this.props.children, child => (
            React.cloneElement(child, {
                active: child.props.name === this.state.active
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