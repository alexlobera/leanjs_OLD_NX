import * as responsiveTable from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import styled from 'styled-components'

const Table = responsiveTable.Table
const Thead = responsiveTable.Thead
const Tbody = responsiveTable.Tbody
const Tr = responsiveTable.Tr

const Th = styled(responsiveTable.Th)`
    text-align: center;
`
const Td = styled(responsiveTable.Td)`
    text-align: center;
`


export { Table, Thead, Tbody, Tr, Th, Td }