interface RequiredTypes {
  value: string | number;
  length: number;
}

export const required = (value: RequiredTypes) => {
  return !value || (Array.isArray(value) && !value.length)
    ? "Required"
    : undefined;
};
