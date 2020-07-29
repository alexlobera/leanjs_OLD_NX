import React from 'react';
import Link from '../navigation/Link';
import { useUser } from './UserProvider';
import { Spinner } from '../display';

export default function AuthLink({ to = '/login' }) {
  const { loggedIn, loading, logout } = useUser();

  return loading ? (
    <Spinner color="#4a4a4a" sx={{ mt: '8px' }} />
  ) : loggedIn === true ? (
    <Link onClick={logout}>logout</Link>
  ) : (
    <Link to={to}>login</Link>
  );
}
