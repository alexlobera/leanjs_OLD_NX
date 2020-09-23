import moment from 'moment';
import memoize from 'lodash.memoize';
import {
  FORM_VOUCHERS,
  DISCOUNT_PERCENTAGE,
  DISCOUNT_AMOUNT,
} from './VoucherForm';
import { GLOBAL_CODE, GLOBAL_AUTO } from './VoucherType';

export const transformSubmitValues = (
  onSubmit: any,
  { extraValues: { type } }: any,
) => ({ item, formVouchers = [] }: any) => {
  const itemId = item?.itemId;
  const vouchers = formVouchers.map((voucher: any) => {
    const {
      id,
      description,
      code,
      startsAt,
      expiresAt,
      maxRedemptions,
      voucherMode,
      voucherValue,
    } = voucher;

    return {
      id,
      description,
      code,
      startsAt: startsAt ? moment(startsAt) : undefined,
      expiresAt: expiresAt ? moment(expiresAt) : undefined,
      maxRedemptions: maxRedemptions ? maxRedemptions : null,
      [voucherMode]: voucherValue,
    };
  });

  const typeData =
    type === GLOBAL_CODE || type === GLOBAL_AUTO ? { type } : { itemId };

  return onSubmit({ ...typeData, type, vouchers });
};

export function createEmptyVoucher(
  formVouchers: any = null,
  momentFn = moment,
) {
  const previousVoucher =
    formVouchers && formVouchers.length && formVouchers.value
      ? formVouchers.value[formVouchers.length - 1]
      : null;

  if (previousVoucher) {
    const { expiresAt = {} } = previousVoucher;
    return {
      startsAt: expiresAt.add && expiresAt.clone().add('days', 1),
      expiresAt: expiresAt.add && expiresAt.clone().add('days', 7),
      voucherMode: DISCOUNT_PERCENTAGE,
    };
  } else {
    const startsAt = momentFn().startOf('day');
    return {
      startsAt,
      expiresAt: startsAt.clone().add('day', 7),
      voucherMode: DISCOUNT_PERCENTAGE,
    };
  }
}

export const formatInitialValues = memoize((values: any) => {
  if (!values) {
    return {
      [FORM_VOUCHERS]: [createEmptyVoucher()],
    };
  } else {
    const {
      trainingInstance,
      training,
      event,
      discountAmount,
      discountPercentage,
      __typename,
      ...restValues
    } = values;

    return {
      item: trainingInstance
        ? {
            ...trainingInstance,
            title: `Training Instance: ${trainingInstance.title}`,
          }
        : event
        ? { ...event.id, title: `Event: ${event.title}` }
        : training
        ? { ...training, title: `Training: ${training.title}` }
        : {},
      [FORM_VOUCHERS]: [
        {
          ...restValues,
          voucherValue: discountAmount || discountPercentage,
          voucherMode: discountAmount ? DISCOUNT_AMOUNT : DISCOUNT_PERCENTAGE,
        },
      ],
    };
  }
});
