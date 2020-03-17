import * as responsiveTable from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import styled from 'styled-components'
import { selectTypeColor, selectBorderStyle } from '../utils'
import { FONT_FAMILY } from '../../config/styles'

const Table = styled(responsiveTable.Table)`
  ${FONT_FAMILY};
`

const Thead = responsiveTable.Thead
const Tbody = responsiveTable.Tbody
const Tr = responsiveTable.Tr

const Th = styled(responsiveTable.Th)`
  text-align: center;
  ${props =>
    props.type &&
    `border-bottom 3px ${selectBorderStyle(props.type)} ${selectTypeColor(
      props.type
    )}`};
`
const Td = styled(responsiveTable.Td)`
  text-align: center;
  vertical-align: ${({ verticalAlign = 'center' }) => verticalAlign};
`

export { Table, Thead, Tbody, Tr, Th, Td }
