import styled from 'styled-components';
import { FONT_SIZE_LARGE, LINE_HEIGHT_XXLARGE } from '../../config/styles';

interface Props {
  large?: boolean;
}
export default styled.strong<Props>`
  color: white;
  ${(props) =>
    props.large
      ? `
		font-size: ${FONT_SIZE_LARGE};
		line-height: ${LINE_HEIGHT_XXLARGE};
	`
      : null};
`;
