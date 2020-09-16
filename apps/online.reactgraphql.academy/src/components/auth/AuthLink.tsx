import React from 'react';
import Cookies from 'js-cookie';
import { useMagic } from '@leanjs/magic-link';
import { useApolloClient } from '@apollo/client';

import Link from '../navigation/Link';
import { Spinner } from '../display';

export default function AuthLink({ to = '/login' }) {
  const { loggedIn, loading, logout } = useMagic();
  const { clearStore } = useApolloClient();

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
