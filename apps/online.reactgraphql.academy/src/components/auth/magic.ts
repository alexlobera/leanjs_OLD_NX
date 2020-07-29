import { Magic } from 'magic-sdk';

const magic = new Magic(process.env.GATSBY_MAGIC_LINK_PK_KEY);

export const checkUser = () => magic.user.isLoggedIn();

export const loginUser = ({ email }) =>
  magic.auth.loginWithMagicLink({ email });

export const logoutUser = () => magic.user.logout();
