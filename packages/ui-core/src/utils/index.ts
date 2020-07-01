export const getVariantProps = (variants, variantProps) =>
  variants && variants.reduce
    ? variants.reduce(
        (acc, variant) => ({
          ...acc,
          ...(variantProps[variant] || {}),
        }),
        {}
      )
    : variantProps[variants || 'default'] || {};
