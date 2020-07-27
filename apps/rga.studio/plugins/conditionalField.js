import PropTypes from 'prop-types';
import React from 'react';
import * as PathUtils from '@sanity/util/paths';
import {
  FormBuilderInput,
  withDocument,
  withValuePath,
} from 'part:@sanity/form-builder';

/**
 * ConditionalField input component will wrap any regular input field configured
 * with `options.condition` in the schema.
 *
 * `option.condition` should be a function that accepts two parameters, `document`
 * and `parent`, and returns `true` if the wrapped field should be shown.
 *
 * Inspired by the following code examples:
 *  - https://sanity-io-land.slack.com/archives/C9Z7RC3V1/p1583362492389300?thread_ts=1583335061.341000&cid=C9Z7RC3V1
 *  - https://github.com/sanity-io/sanity-recipes/blob/master/snippets/conditionalFieldsCustomInputComponent.js
 */

class ConditionalField extends React.Component {
  constructor(props) {
    super(props);
    // Reference to input element
    this._inputElement = React.createRef();
  }

  // Called by the Sanity form-builder when this input should receive focus
  focus() {
    if (this._inputElement.current) {
      this._inputElement.current.focus();
    }
  }

  // Renders the form input if condition function returns true
  render() {
    const {
      document,
      getValuePath,
      value,
      level,
      focusPath,
      onFocus,
      onBlur,
      onChange,
    } = this.props;

    // Extract type without 'inputComponent' (self reference) to avoid infinite loop
    // const { inputComponent, type } = this.props.type; => requires babel plugin
    const type = Object.assign({}, this.props.type);
    delete type.inputComponent;

    // Find the active field's parent object in the document
    const parentPath = getValuePath().slice(0, -1); // <- Remove current field from path
    const parent = PathUtils.get(document, parentPath);

    // Condition to evaluate if component should be shown, defaults to true
    const defaultCondition = () => false;
    const condition =
      (type.options && type.options.condition) || defaultCondition;

    if (!condition(document, parent)) {
      // Hide component
      return null;

      /**
       *  ----------------------------------------------------------------
       *  QUESTION
       *  How can we also delete the field value from the stored document?
       *  Running patch unset seems inefficient if it unsets the field
       *  every time the Studio UI is rendered, even though the stored
       *  document has not changed, but might be an acceptable solution.
       *  ----------------------------------------------------------------
       */
    } else {
      // Render component
      const Component = this.props.component || FormBuilderInput;
      return (
        <div style={{ marginBottom: 20 }}>
          <Component
            level={level}
            ref={this._inputElement}
            type={type}
            value={value}
            onChange={onChange}
            path={[]}
            focusPath={focusPath}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
      );
    }
  }
}

ConditionalField.propTypes = {
  type: PropTypes.shape({
    title: PropTypes.string,
    options: PropTypes.shape({
      condition: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
  level: PropTypes.number,
  focusPath: PropTypes.array,
  onFocus: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default withValuePath(withDocument(ConditionalField));
