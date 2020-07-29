import React, { createContext, useState, useContext } from 'react';
import { checkUser, loginUser, logoutUser } from './magic';
import { requireSignup } from '../../api';

const UserContext = createContext(null);

const REQUIRE_SIGNUP = 'REQUIRE_SIGNUP';
const LOGGED_OUT = 'LOGGED_OUT';
const RECEIVE_LOGIN_RESPONSE = 'RECEIVE_LOGIN_RESPONSE';
const SET_LOADING = 'SET_LOADING';
const CLEAR_REQUIRE_SIGNUP = 'CLEAR_REQUIRE_SIGNUP';

const initialState = {
  loading: false,
  signupsRequired: {},
  loggedIn: false,
};

function userReducer(state, action) {
  switch (action.type) {
    case REQUIRE_SIGNUP:
      return {
        ...state,
        loading: false,
        signupsRequired: { ...state.signupsRequired, [action.email]: true },
      };
    case CLEAR_REQUIRE_SIGNUP:
      return {
        ...state,
        signupsRequired: {},
      };
    case LOGGED_OUT:
      return initialState;
    case RECEIVE_LOGIN_RESPONSE:
      return { ...state, loading: false, loggedIn: action.loggedIn };
    case SET_LOADING:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
}

export default function UserProvider({ children }) {
  const [user, dispatch] = React.useReducer(userReducer, initialState);

  React.useEffect(() => {
    async function iniState() {
      const loggedIn = await checkUser();
      dispatch({ type: RECEIVE_LOGIN_RESPONSE, loggedIn });
    }

    iniState();
  }, []);

  return (
    <UserContext.Provider value={{ ...user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(`A UserProvider is required up in the component tree`);
  }

  const { loggedIn, dispatch, loading, signupsRequired } = context;

  const clearSignupsRequired = () => {
    dispatch({ type: CLEAR_REQUIRE_SIGNUP });
  };

  const login = async ({ email }) => {
    dispatch({ type: SET_LOADING, loading: true });
    const { signup } = await requireSignup(email);
    if (signup) {
      dispatch({ type: REQUIRE_SIGNUP, email });
    } else {
      const token = await loginUser({ email });
      if (token) {
        dispatch({ type: RECEIVE_LOGIN_RESPONSE, loggedIn: !!token });
      }
    }
  };

  const logout = async () => {
    dispatch({ type: SET_LOADING, loading: true });
    await logoutUser();
    dispatch({ type: LOGGED_OUT });
  };

  return {
    loggedIn,
    loading,
    signupsRequired,
    login,
    logout,
    clearSignupsRequired,
  };
}
