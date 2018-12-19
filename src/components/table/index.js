import * as responsiveTable from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import styled from 'styled-components'
import { selectTypeColor } from '../utils'

const Table = responsiveTable.Table
const Thead = responsiveTable.Thead
const Tbody = responsiveTable.Tbody
const Tr = responsiveTable.Tr

const Th = styled(responsiveTable.Th)`
    text-align: center;
    ${props => props.type ? `border-bottom 3px solid ${selectTypeColor(props.type)}` : 'border: none;'}
`
const Td = styled(responsiveTable.Td)`
    text-align: center;
`


export { Table, Thead, Tbody, Tr, Th, Td }