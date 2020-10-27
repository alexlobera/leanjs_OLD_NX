import React, { FunctionComponent } from 'react';

import Footer from './Footer';
import Navbar from '../navigation/Navbar';
// import Link, { LinkButton } from '../navigation/Link';
// import Link from '../navigation/Link';
// import { Ul, Li } from '.';

import Breadcrumb, { BreadcrumbPath } from '../navigation/Breadcrumb';
import Menu from '../navigation/menu';
interface LayoutProps {
  breadcrumbPaths?: BreadcrumbPath[];
  variant?: string;
}

const variantLayoutProps = {
  stack: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
    zIndex: 'sticky',
  },
};

const Layout: FunctionComponent<LayoutProps> = ({
  breadcrumbPaths,
  children,
  variant = 'absolute',
}) => {
  // React.useEffect(() => {
  //   const utm_source_cookie = getCookie('utm_source');
  //   const utm_source_url = getURLParameter('utm_source');
  //   if (!utm_source_cookie && utm_source_url) {
  //     setCookie('utm_source', utm_source_url);
  //   }
  // }, []);

  return (
    <React.Fragment>
      <Navbar
        sx={{ ...(variantLayoutProps[variant] || {}) }}
        menu={
            <Menu />
        //   <Ul
        //     variant="inline"
        //     sx={{
        //       ml: 'auto',
        //       display: 'flex',
        //       li: { alignItems: 'center', display: 'flex' },
        //     }}
        //   >
        //     {/* <Li>
        //       <Link to="/">Inicio</Link>
        //     </Li> */}
        //     {/* <Li>
        //       <Link to="/cursos">Proximas fechas</Link>
        //     </Li> */}
        //     <Li>
        //       <Link to="/cursos">Catalogo de cursos</Link>
        //     </Li>
        //     <Li>
        //       <Link to="/empresas">Empresas</Link>
        //     </Li>
        //     <Li>
        //       <Link to="/nosotros">Nosotros</Link>
        //     </Li>
        //     <Li>
        //       <Link to="/testimonios">Testimonios</Link>
        //     </Li>
        //     <Li>
        //       <Link to="/blog">Blog</Link>
        //     </Li>
        //     <Li>
        //       <Link to="#contact-form">Contacto</Link>
        //     </Li>
        //   </Ul>
        }
      >
        {breadcrumbPaths && (
          <Breadcrumb sx={{ px: 4, py: 1 }} paths={breadcrumbPaths} />
        )}
      </Navbar>
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
