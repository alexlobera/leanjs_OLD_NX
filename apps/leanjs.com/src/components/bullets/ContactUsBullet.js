import React from 'react';
import Bullet from './Bullet';

import { EXTRADARKGREY, WHITE } from '../../config/styles';
import {
  PHONE,
  EMAIL,
  LOGO_TWITTER,
  LOGO_INSTAGRAM,
  LOGO_GITHUB,
  LOGO_GOOGLE_HANGOUTS,
  OFFICE,
} from '../../resources/icons';

export const validImages = {
  phone: PHONE,
  email: EMAIL,
  twitter: LOGO_TWITTER,
  instagram: LOGO_INSTAGRAM,
  hangouts: LOGO_GOOGLE_HANGOUTS,
  github: LOGO_GITHUB,
  office: OFFICE,
};

const ContactUsBullet = ({ image }) => (
  <Bullet
    color={WHITE}
    bg={EXTRADARKGREY}
    size={40 / 18}
    images={validImages}
    image={image}
    hasBorder={false}
  />
);

export default ContactUsBullet;
