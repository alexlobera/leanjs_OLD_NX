export const baseHeading = {
  lineHeight: 2,
  mt: 3,
};

export interface Variant {
  lineHeight: number;
  mt: number;
  width?: number;
  fontSize: number;
  fontWeight: string;
}

export interface HeadingVariantProps {
  h1: Variant;
  h2: Variant;
  h3: Variant;
  h4: Variant;
  h5: Variant;
  h6: Variant;
}

const headingVariantProps: HeadingVariantProps = {
  h1: {
    ...baseHeading,
    fontSize: 6,
    fontWeight: 'bold',
  },
  h2: {
    ...baseHeading,
    fontSize: 5,
    fontWeight: 'normal',
  },
  h3: {
    ...baseHeading,
    fontSize: 4,
    fontWeight: 'bold',
  },
  h4: {
    ...baseHeading,
    fontSize: 4,
    fontWeight: 'normal',
  },
  h5: {
    ...baseHeading,
    fontSize: 3,
    fontWeight: 'bold',
  },
  h6: {
    ...baseHeading,
    fontSize: 3,
    fontWeight: 'normal',
  },
};

export default headingVariantProps;
