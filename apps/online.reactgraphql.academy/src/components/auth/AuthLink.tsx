import React from 'react';
import Link from '../navigation/Link';
import { useMagic } from './MagicProvider';
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
        clearCache();
      }}
    >
      logout
    </Link>
  ) : (
    <Link to={to}>login</Link>
  );
}
