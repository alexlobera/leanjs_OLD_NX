import React from 'react';
import Cookies from 'js-cookie';
import { useMagic } from '@leanjs/magic-link';

import Link from '../navigation/Link';
import { useGraphQLCache } from '../../api/graphql/Provider';
import { Spinner } from '../display';

export default function AuthLink({ to = '/login' }) {
  const { loggedIn, loading, logout } = useMagic();
  const { clearCache } = useGraphQLCache();

  return loading ? (
    <Spinner color="#4a4a4a" sx={{ mt: '8px' }} />
  ) : loggedIn === true ? (
    <Link
      onClick={() => {
        logout();
        Cookies.remove('__session');
        clearCache();
      }}
    >
      logout
    </Link>
  ) : (
    <Link to={to}>login</Link>
  );
}
