import React from "react";
import { css, ThemeProps, DefaultTheme } from "styled-components";
import { flexbox } from "styled-system";
import Box, { BoxProps } from "@leanui/box";

interface FlexProps extends BoxProps {
  css?: any; // TODO REPLACE ANY WITH TYPE
}

interface CssProps extends ThemeProps<DefaultTheme> {
  sx: any; // TODO REPLACE ANY WITH TYPE
}

const Flex = ({ sx = {}, ...rest }: FlexProps) => (
  <Box
    css={css`
      ${({ theme, sx }: CssProps) => flexbox({ theme, ...sx })}
    `}
    sx={{ display: "flex", ...sx }}
    {...rest}
  />
);

export default React.memo(Flex);
