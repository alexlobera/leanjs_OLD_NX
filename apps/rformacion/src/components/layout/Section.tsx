import React from 'react'
import {
    Section as LeanSection,
    ThemeProvider
} from '@leanjs/ui-core';
import { BoxProps, As } from '.';


export default function <T extends As = 'section'>({ variant, ...rest }: BoxProps<T>) {
    const section = <LeanSection {...rest} />

    return (variant === "secondary") ?
        <ThemeProvider theme={{
            bg: "secondary",
            py: [4, 9],
            color: "inverseText"
        }} >
            {section}
        </ThemeProvider > : section
}