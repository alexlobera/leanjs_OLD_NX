interface RequiredTypes {
  value: string | number;
  length: number;
}

export const required = (value: RequiredTypes) => {
  return !value || (Array.isArray(value) && !value.length)
    ? "Required"
    : undefined;
};

export const composeValidators = (...validators: any) => (value: string) =>
  validators.reduceRight(
    (error: string, validator: any) => error || validator(value),
    undefined
  );

export const mustBeEmail = (value: string) => {
  const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reEmail.test(value) ? undefined : "Email format is not correct";
};
