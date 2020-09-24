import React from 'react';
// import Immutable from "immutable";

import Heading from '../../../../App/Components/Text/Heading';
import { P } from '../../../../App/Components/Text/P';
import Button from '../../../../App/Components/Buttons/Button';
import TextField from '../TextField';
import Form from '../Form';
import Field from '../Field';
import { mustBeUrl } from '../validators';

import FinalFormFocus from '../../../../App/Components/Forms/FinalFormFocus';
import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';
import ErrorMessage from '../ErrorMessage';
import Label from '../Label';
import { withModal } from '../../../../App/Components/Communication/Modal';

import './RichTextField.css';

//draftjs/node_modules/fbjs/lib/setImmediate.js
window.global = {};

const {
  RichUtils,
  EditorState,
  CompositeDecorator,
  Editor,
  convertFromRaw,
  convertToRaw,
} = require('draft-js');

const { getSelectionEntity, getSelectionText } = require('draftjs-utils');
const { draftToMarkdown, markdownToDraft } = require('markdown-draft-js');

function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === 'LINK'
    );
  }, callback);
}

// const blockRenderMap = Immutable.Map({
//   "code-block-js": {
//     element: "pre",
//     // wrapper: "code",
//   },
// });

// const CodeBlock = (props) => {
//   const { language } = props.blockProps;
//   return <pre className={`language-${language}`}>{props.block.getText()}</pre>;
// };

// function customBlockRenderer(contentBlock) {
//   const type = contentBlock.getType();
//   if (type.startsWith("code-block-")) {
//     return {
//       component: CodeBlock,
//       editable: true,
//       props: {
//         language: "jsx",
//       },
//     };
//   }
// }

const Link = (props) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData();
  return (
    <a href={url} style={{ color: '#3b5998', textDecoration: 'underline' }}>
      {props.children}
    </a>
  );
};

class RichTextField extends React.Component {
  constructor(props) {
    super(props);

    const decorator = new CompositeDecorator([
      {
        strategy: findLinkEntities,
        component: Link,
      },
    ]);

    const { value } = props.input;
    const markdownValue = markdownToDraft(
      // we should remove this and only accept a string input value of this component. First we need to remove customFieldsValues and instead update the GQL schema producing types based on customFieldsValues. E.g. training unit related links
      Array.isArray(value) ? value[0] : value
    );
    const editorState = value
      ? EditorState.createWithContent(convertFromRaw(markdownValue), decorator)
      : EditorState.createEmpty(decorator);
    this.state = { editorState };
  }

  onChange = (editorState) => {
    this.setState({ editorState });
    const markdown = draftToMarkdown(
      convertToRaw(editorState.getCurrentContent())
    );
    this.props.input.onChange(markdown);
  };

  onAddLink = () => {
    const { editorState } = this.state;
    const entityKey = getSelectionEntity(editorState);
    const contentState = editorState.getCurrentContent();
    const selectedText = getSelectionText(editorState);

    const link = entityKey
      ? contentState.getEntity(entityKey).getData()
      : undefined;

    const modalContent = selectedText
      ? {
          header: <Heading variant="h3">Add/Edit a link to</Heading>,
          body: (
            <Form
              onSubmit={({ href }) => {
                this.props.modal.hide();
                this.setLink(href);
              }}
              initialValues={{ href: link?.url }}
            >
              {() => {
                return (
                  <>
                    <P>
                      Selected text: <strong>{selectedText}</strong>
                    </P>
                    <Field
                      name="href"
                      component={TextField}
                      type="text"
                      validate={mustBeUrl}
                    />
                    <P>Leave it empty to remove the link</P>
                    <Button mr={2} type="submit">
                      Save
                    </Button>
                    <Button mr={2} onClick={this.props.modal.hide}>
                      Cancel
                    </Button>
                  </>
                );
              }}
            </Form>
          ),
        }
      : {
          header: (
            <Heading variant="h3">
              You must select a text to add or edit a link
            </Heading>
          ),
          body: (
            <Button mr={2} onClick={this.props.modal.hide}>
              Cancel
            </Button>
          ),
        };
    this.props.modal.show(modalContent);
  };

  setLink = (link) => {
    const { editorState } = this.state;
    const selection = editorState.getSelection();
    if (!link) {
      this.onChange(RichUtils.toggleLink(editorState, selection, null));

      return;
    }
    const content = editorState.getCurrentContent();
    const contentWithEntity = content.createEntity('LINK', 'MUTABLE', {
      url: link,
    });
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentWithEntity,
    });
    const entityKey = contentWithEntity.getLastCreatedEntityKey();
    this.onChange(RichUtils.toggleLink(newEditorState, selection, entityKey));
  };

  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );

    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  };

  onTab = (e) => {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  };

  toggleBlockType = (blockType) => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  };

  toggleInlineStyle = (inlineStyle) => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  };

  render() {
    const {
      input: { value, ...restInput },
      label,
      meta,
      showLink,
      showHeading,
      ...rest
    } = this.props;
    const { editorState } = this.state;
    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';

    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <>
        {label ? <Label htmlFor={label}>{label}</Label> : null}
        <div className="RichEditor-root">
          <BlockStyleControls
            showHeading={showHeading}
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
          <InlineStyleControls
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
            linkControl={
              showLink && (
                <span style={{ cursor: 'pointer' }} onClick={this.onAddLink}>
                  Link
                </span>
              )
            }
          />

          <div className={className} onClick={this.focus}>
            <Editor
              {...restInput}
              {...rest}
              // blockRendererFn={customBlockRenderer}
              // blockRenderMap={blockRenderMap}
              editorState={editorState}
              onChange={this.onChange}
              //   blockStyleFn={getBlockStyle}
              handleKeyCommand={this.handleKeyCommand}
              onTab={this.onTab}
              spellCheck={true}
            />
          </div>
        </div>
        {meta && meta.error && meta.touched && (
          <ErrorMessage>{meta.error}</ErrorMessage>
        )}
        <FinalFormFocus name={this.props.name || this.props.input?.name} />
      </>
    );
  }
}

export default withModal(RichTextField);
