import React from 'react';
import styled from 'styled-components';
import { StyledComponentProps } from 'styled-components';
import Flex from '../Layout/Flex';
import Link, { LinkProps } from './Link';
import Text from '../Text/Text';
import { ThemeInterface } from '../../Config/theme';
import { Props } from '../../Types/React';

const Breadcrumb: React.FunctionComponent<Props> = () => (
  <Flex as="nav" ariaLabel="Breadcrumb">
    <BreadcrumbLink href="/">Home</BreadcrumbLink>
    <Text mr={1}> / </Text>
    <BreadcrumbLink>1st level</BreadcrumbLink>
    <Text mr={1}> / </Text>
    <BreadcrumbLink>2nd level</BreadcrumbLink>
    <Text mr={1}> / </Text>
    <BreadcrumbLink>etc</BreadcrumbLink>
  </Flex>
);

type StyledLinkProps = StyledComponentProps<any, {}, {}, any> &
  LinkProps & {
    // Make 'theme' optional because it comes from the 'styled' function
    // (i.e. the inner component that is going to be passed to addDefaultProps)
    theme?: ThemeInterface;

    // Setting strings as the defaultProp for 'a' seems to cause a Typescript error
    // because it is expecting a specific type (which happens to be equivalent to one of
    // a number of string).  I suspect we could to a typescript cast when specifying te default
    // parameter; but, for now, just make it 'any' here.
    as?: any;
  };

const BreadcrumbLink = styled(Link)<StyledLinkProps>``;
BreadcrumbLink.defaultProps = {
  box: 'a',
  mr: 1,
  fontFamily: 'serif',
};

export default Breadcrumb;
