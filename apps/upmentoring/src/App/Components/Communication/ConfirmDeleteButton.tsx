import React from 'react';

import { useModal } from './Modal';
import Button from '../Buttons/Button';
import Heading from '../Text/Heading';
import { P } from '../Text/P';

interface ConfirmDeleteButtonProps {
  onConfirm: () => void;
  ml?: number;
}

const ConfirmDeleteButton: React.FC<ConfirmDeleteButtonProps> = ({
  onConfirm,
  ...rest
}) => {
  const { getModalPropsOnClick, show, hide }: any = useModal();
  const confirmAndHide = () => {
    onConfirm();
    hide();
  };
  return (
    <Button
      {...getModalPropsOnClick(() =>
        show({
          header: (
            <Heading variant="h3">Are you sure you want to delete it?</Heading>
          ),
          footer: (
            <>
              <Button mr={2} onClick={confirmAndHide}>
                <P>yes</P>
              </Button>
              <Button {...getModalPropsOnClick(hide)}>
                <P>no</P>
              </Button>
            </>
          ),
        })
      )}
      {...rest}
    >
      Delete
    </Button>
  );
};

export default ConfirmDeleteButton;
