import React from 'react';
import { LinkIconButton } from './IconButton';
import { CHAT } from '../../resources/icons';

const ContactButton = (props) => (
  <LinkIconButton image={CHAT} text="Contact" scroll to="contact" {...props} />
);

export default ContactButton;
