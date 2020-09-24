import React from 'react';
import BlockStyleButton from './BlockStyleButton';
import HeaderStyleDropdown from './HeaderStyleDropdown';

export const BLOCK_TYPES = [
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  // { label: "{ }", style: "code-block" },
];

// export const CODE_TYPES = [
//   { label: "No code", style: "unstyled" },
//   { label: "code", style: "code-block" },
//   //{ label: "jsx", style: "code-block-jsx" },
// ];

export const HEADER_TYPES = [
  { label: 'No heading', style: 'unstyled' },
  //   { label: "H1", style: "header-one" },
  //   { label: "H2", style: "header-two" },
  //   { label: "H3", style: "header-three" },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
];

const BlockStyleControls = ({ editorState, onToggle, showHeading }) => {
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <ul className="RichEditor-controls">
      {showHeading && (
        <li>
          <HeaderStyleDropdown
            headerOptions={HEADER_TYPES}
            active={blockType}
            onToggle={onToggle}
          />
        </li>
      )}

      {/* <li>
        <HeaderStyleDropdown
          headerOptions={CODE_TYPES}
          active={blockType}
          onToggle={onToggle}
        />
      </li> */}
      {BLOCK_TYPES.map((type) => {
        return (
          <li key={type.label}>
            <BlockStyleButton
              active={type.style === blockType}
              label={type.label}
              onToggle={onToggle}
              style={type.style}
              key={type.label}
              type={type}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default BlockStyleControls;
