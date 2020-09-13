import React from 'react';
import Cookies from 'js-cookie';
import { useMagic } from '@leanjs/magic-link';
import { useGraphQLStore } from '@leanjs/graphql-client';

import Link from '../navigation/Link';
import { Spinner } from '../display';

export default function AuthLink({ to = '/login' }) {
  const { loggedIn, loading, logout } = useMagic();
  const { clearStore } = useGraphQLStore();

  return loading ? (
    <Spinner color="#4a4a4a" sx={{ mt: '8px' }} />
  ) : loggedIn === true ? (
    <Link
      onClick={() => {
        Cookies.remove('__session');
        clearStore();
        logout();
      }}
    >
      logout
    </Link>
  ) : (
    <Link to={to}>login</Link>
  );
}
