import React from 'react';
import { Ul, Li, Box, Container } from '../layout';
import Link from './Link';

export interface BreadcrumbPath {
  text: string;
  path?: string;
}
export interface BreadcrumbProps {
  paths: BreadcrumbPath[];
  className?: string;
}

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = ({
  paths,
  className = 'breadcrumb',
}: BreadcrumbProps) =>
  paths && paths.length ? (
    <Container as="nav" sx={{ bg: 'blue' }} ariaLabel="Breadcrumb">
      <Ul variant="inline">
        {paths.map(({ path, text }) => {
          // const formatedLabel = label.replace(/(<([^>]+)>)/gi, ' ');

          return (
            <Li key={path}>
              {path ? (
                <Link className={className} to={path}>
                  {text}
                </Link>
              ) : (
                text
              )}
            </Li>
          );
        })}
      </Ul>
    </Container>
  ) : null;

export default React.memo(Breadcrumb);
