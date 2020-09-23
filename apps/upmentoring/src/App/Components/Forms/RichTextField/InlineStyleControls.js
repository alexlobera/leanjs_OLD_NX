import React from 'react';

import BlockStyleButton from './BlockStyleButton';

var INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
];

const InlineStyleControls = props => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <ul className="RichEditor-controls">
      {INLINE_STYLES.map(type => (
        <li key={type.label}>
          <BlockStyleButton
            key={type.label}
            active={currentStyle.has(type.style)}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
          />
        </li>
      ))}
      {props.linkControl &&
        <li>{props.linkControl}</li>}
    </ul>
  );
};

export default InlineStyleControls;
