import React, {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
} from 'react';
import styled from 'styled-components';

const ModalContext = createContext(false);
const stopPropagation = (e) => e.stopPropagation();
const callAll = (...fns) => (...args) => fns.forEach((fn) => fn && fn(...args));

export const Header = styled.div`
  border-bottom: 1px solid #eee;
  padding: 1rem;
`;

export const Footer = styled.div`
  border-top: 1px solid #eee;
  padding: 1rem;
`;

export const Body = styled.div`
  padding: 0 1rem;
`;

const StyledModal = styled.div`
  width: 480px;
  background-color: white;
  border-radius: 8px;
`;

const ModalOverlay = (props) => {
  const overlayEl = useRef(null);

  useEffect(() => {
    overlayEl.current.focus();
  });
  return <div {...props} ref={overlayEl} />;
};

const StyledModalOverlay = styled(ModalOverlay)`
  z-index: 99;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const useModal = () => useContext(ModalContext);

export const withModal = (Component) => (props) => {
  const context = useContext(ModalContext);

  return <Component {...props} modal={context} />;
};

function Modal(props) {
  useContext(ModalContext);
  const [isOpen, setIsOpen] = useState(false);
  const [content = {}, setContent] = useState({});
  const show = (content = {}) => {
    const { body, header, footer } = content;
    if (!body && !header && !footer) {
      setContent({ content });
    } else {
      setContent({ body, header, footer });
    }
    setIsOpen(true);
  };
  const hide = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);
  const getModalPropsOnClick = (onClick) => ({
    'aria-controls': 'target',
    'aria-expanded': Boolean(isOpen),
    onClick,
  });
  const getToggleModalProps = getModalPropsOnClick(toggle);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        show,
        hide,
        toggle,
        getModalPropsOnClick,
        getToggleModalProps,
      }}
    >
      {isOpen && (
        <StyledModalOverlay
          {...props}
          onClick={callAll(props.onClick, toggle)}
          onKeyDown={callAll(
            props.onKeyDown,
            ({ keyCode }) => keyCode === 27 && hide()
          )}
          aria-modal="true"
          tabIndex="-1"
          isOpen={isOpen}
        >
          <StyledModal onClick={stopPropagation}>
            {content.content}
            {content.header && <Header>{content.header}</Header>}
            {content.body && <Header>{content.body}</Header>}
            {content.footer && <Footer>{content.footer}</Footer>}
          </StyledModal>
        </StyledModalOverlay>
      )}
      {props.children}
    </ModalContext.Provider>
  );
}

export default Modal;
