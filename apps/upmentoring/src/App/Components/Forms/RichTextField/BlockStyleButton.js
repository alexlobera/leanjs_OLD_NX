import React from 'react';

const BlockStyleButton = (props) => {
  const onToggle = (e) => {
    e.preventDefault();
    props.onToggle(props.style);
  };

  let className = 'RichEditor-styleButton';
  if (props.active) {
    className += ' RichEditor-activeButton';
  }

  return (
    <span className={className} onClick={onToggle}>
      {props.label}
    </span>
  );
};

export default BlockStyleButton;
