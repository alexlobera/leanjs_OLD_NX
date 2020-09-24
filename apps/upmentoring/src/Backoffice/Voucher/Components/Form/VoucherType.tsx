import React from 'react';

import Heading from '../../../../App/Components/Text/Heading';
import Button from '../../../../App/Components/Buttons/Button';
import TickIcon from '../../../../App/Components/Icons/TickIcon';

export const CODE = 'code';
export const GLOBAL_CODE = 'globalCode';
export const GLOBAL_AUTO = 'globalAuto';
export const AUTO = 'auto';

interface VoucherTypeProps {
  onChange?: (value: string) => void;
  value: string;
  disabled?: boolean;
}

const VoucherType = ({
  onChange,
  value,
  disabled = false,
}: VoucherTypeProps) => (
  <>
    <Heading variant="h6">What type of discount is it?</Heading>

    <Button
      disabled={disabled}
      onClick={() => onChange && onChange(CODE)}
      iconElement={value === CODE ? <TickIcon /> : null}
      variant={value === CODE ? 'secondary' : 'tertiary'}
      mr={2}
    >
      Code
    </Button>

    <Button
      mr={2}
      disabled={disabled}
      onClick={() => onChange && onChange(AUTO)}
      iconElement={value === AUTO ? <TickIcon /> : null}
      variant={value === AUTO ? 'secondary' : 'tertiary'}
    >
      Automatic
    </Button>

    <Button
      mr={2}
      disabled={disabled}
      onClick={() => onChange && onChange(GLOBAL_CODE)}
      iconElement={value === GLOBAL_CODE ? <TickIcon /> : null}
      variant={value === GLOBAL_CODE ? 'secondary' : 'tertiary'}
    >
      Global Code
    </Button>

    <Button
      disabled={disabled}
      onClick={() => onChange && onChange(GLOBAL_AUTO)}
      iconElement={value === GLOBAL_AUTO ? <TickIcon /> : null}
      variant={value === GLOBAL_AUTO ? 'secondary' : 'tertiary'}
    >
      Global Auto
    </Button>
  </>
);

export default VoucherType;
