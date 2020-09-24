import React from 'react';
import styled from 'styled-components';
import { StyledComponentProps } from 'styled-components';
import Flex, { FlexProps } from '../Layout/Flex';
import ExclamationIcon from '../Icons/ExclamationIcon';
import { ThemeInterface } from '../../Config/old-theme';
import { addDefaultProps } from '../../Utils/react';

type StyledAlertProps = StyledComponentProps<any, {}, {}, any> &
  FlexProps & {
    message?: string;
  };

const StyledAlert = styled(Flex)<StyledAlertProps>`
  color: ${(props) =>
    props.message ? `${props.theme.colors.TEAL_DARK}` : null};
  background: ${(props) =>
    props.message
      ? `${props.theme.colors.TEAL_LIGHT}`
      : `${props.theme.colors.TEAL_DARK}`};
  font-style: normal;
  border-radius: 2px;
  font-weight: ${(props) => (props.message ? 'normal' : null)};
  > * {
    margin-right: 0.9rem;
  }
`;

// Make the 'theme' prop optional from the outer component, as it is added via the 'styled' function, which is used to generate the
// StyledAlertInner component, not the outer, so unless it is omitted or made optional there is a compile-time error
type AlertProps = StyledAlertProps & {
  theme?: ThemeInterface | undefined;
};

const StyledAlertWithExclamation: React.FunctionComponent<AlertProps> = ({
  children,
  ...rest
}: AlertProps) => (
  <StyledAlert {...rest}>
    <ExclamationIcon />
    {children}
  </StyledAlert>
);

const defaultProps = {
  fontFamily: 'serif',
  p: 1,
  alignItems: 'center',
  mb: 4,
  color: 'WHITE',
  fontWeight: 'light',
};

const Alert: React.FunctionComponent<AlertProps> = addDefaultProps(
  StyledAlertWithExclamation,
  defaultProps
);

export default Alert;
