import React from 'React';
import ConditionalField from './conditionalField';

const withConditionalField = (Component) => (props) => (
  <ConditionalField {...props} component={Component} />
);

export default withConditionalField;
