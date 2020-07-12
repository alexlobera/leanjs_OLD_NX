import * as responsiveTable from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import styled from 'styled-components';
import { selectTechColor, selectBorderStyle } from '../utils';
import { FONT_FAMILY } from '../../config/styles';

const Table = styled(responsiveTable.Table)`
  ${FONT_FAMILY};
`;

const COMMON_CSS = `
border-bottom: 1px solid rgba(0, 0, 0, 0.12);
text-align: center;
padding: 0.725rem 0.96667rem calc(0.725rem - 1px);
`;

const Thead = responsiveTable.Thead;
const Tbody = responsiveTable.Tbody;
const Tr = responsiveTable.Tr;

const Th = styled(responsiveTable.Th)`
  ${COMMON_CSS}
  ${({ tech, trainingType }) =>
    tech &&
    `border-bottom 3px ${selectBorderStyle({
      trainingType,
    })} ${selectTechColor({ tech })}`};
`;
const Td = styled(responsiveTable.Td)`
  ${COMMON_CSS}
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.12);
  vertical-align: ${({ verticalAlign = 'center' }) => verticalAlign};
`;

export { Table, Thead, Tbody, Tr, Th, Td };
