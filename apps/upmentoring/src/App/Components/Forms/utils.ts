export function formatArrayToFirstArgument(value: any) {
  return Array.isArray(value) && value.length ? value[0] : value;
}

export const formatToNumber = (value: string): string => {
  const regex = /[^\d.]|\.(?=.*\.)/g;

  return value ? value.replace(regex, '') : value;
};

export const parseToInt = (value: string): number | '' =>
  isNaN(parseInt(value, 10)) ? '' : parseInt(value, 10);

interface IsOnlineArgs {
  isOnline: any;
}
export const isOnline = (values: IsOnlineArgs): boolean =>
  !!(
    values &&
    values.isOnline &&
    values.isOnline.find &&
    values.isOnline.find((v: any) => v === true)
  );
