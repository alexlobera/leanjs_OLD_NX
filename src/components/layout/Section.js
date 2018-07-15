import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    padding-top: 60px;
    padding-bottom: 60px;
    background-color:${props => {
        switch (props.color) {
            case 'lightGrey': return '#eee'
        }
    }}
`

export default Section