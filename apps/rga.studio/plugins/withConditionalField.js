import React from 'react';
import ConditionalField from './conditionalField';

const withConditionalField = (Component) => (props) => (
  <ConditionalField {...props} component={Component} />
);

export default withConditionalField;
