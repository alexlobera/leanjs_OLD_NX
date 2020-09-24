type RequiredTypes = string | [];

export const required = (value: RequiredTypes) => {
  return value === '' ||
    value === null ||
    value === undefined ||
    (Array.isArray(value) && !value.length)
    ? 'Required'
    : undefined;
};
interface RequiredTimeTypes {
  value: string | number;
  hour: number;
  minute: number;
  length: number;
}

export const requiredTime = (value: RequiredTimeTypes) =>
  !value ||
  !value.hour ||
  !(value.minute && value.minute.toString().length === 2)
    ? 'Required'
    : undefined;

export const mustBeEmail = (value: string) => {
  const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return reEmail.test(value) ? undefined : 'Email format is not correct';
};

export const atLeastFiveCharacters = (value: number[]) =>
  value && value.length > 5 ? undefined : 'Please use minimum of 6 characters';

export const onlyAlphanumeric = (value: string) => {
  const alphanumeric = /^[a-z0-9]+$/i;
  return alphanumeric.test(value)
    ? undefined
    : 'Please use only letters or numbers';
};

export const onlyAmounts = (value: any) => {
  const amounts = /^\d+(\.\d{1,2})?$/;
  return amounts.test(value) && value > 0
    ? undefined
    : 'A discount amount is required';
};

export const onlyPositiveNumbers = (value: string) => {
  const numbers = /^[0-9]+$/;
  return !value || (numbers.test(value) && parseInt(value, 10) > 0)
    ? undefined
    : 'Please use positive numbers only';
};

export const twoDecimals = (value: string) => {
  if (!value) return;
  if (value === '0' + '') return;

  const priceRegex = /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/;

  return priceRegex.test(value) ? undefined : 'Maximum 2 decimals allowed.';
};

export const mustBeUrl = (value: string) => {
  const urlRegex = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+@]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );

  if (!value) {
    return undefined;
  }

  return urlRegex.test(value) ? undefined : 'URL is not correct.';
};

export const minAmount = (minimum: number) => (amount: any) =>
  amount && (isNaN(amount) || Number(amount) < minimum)
    ? `Minimum amount is ${minimum}`
    : undefined;

export const onlyNumbers = (value: string) => {
  const numbers = /^[0-9]+$/;
  return !value || numbers.test(value) ? undefined : 'Please use numbers only';
};

type ValidatorError = undefined | string;

type ValidatorFunction = (value: string) => string | undefined;

export const composeValidators = (...validators: any) => (value: string) =>
  validators.reduceRight(
    (error: ValidatorError, validator: ValidatorFunction) =>
      error || validator(value),
    undefined
  );

interface ValidatorFactorArg {
  name: string;
}
export const validatorFactory = (validator: ValidatorFactorArg) => {
  switch (validator.name) {
    case 'required':
      return required;
  }
  throw Error(`validator ${validator} does not exist`);
};

export const composeValidatorsFactory = (validators: [ValidatorFactorArg]) => {
  if (!validators || !validators.length) {
    return undefined;
  }

  return composeValidators(...validators.map(validatorFactory));
};

export const priceValidator = composeValidators(
  minAmount(0.5),
  twoDecimals,
  required
);
