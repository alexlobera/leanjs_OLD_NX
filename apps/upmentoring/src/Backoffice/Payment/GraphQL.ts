// import { Deleted } from 'src/App/Types/GraphQL';
// import { TrainingInstanceType } from 'src/Backoffice/Training/GraphQL';
// import { ConnectionData } from 'src/App/Types/GraphQL';

export enum CurrencyEnum {
  EUR = 'eur',
  GBP = 'gbp',
  USD = 'usd',
  AUD = 'aud',
}

// export interface PaymentItem {
//   eventId?: string;
//   event?: {
//     city: string;
//     title: string;
//     utcOffset: number;
//     startDate: string;
//   };
//   trainingInstanceId?: string;
//   trainingId?: string;
//   training?: {
//     title: string;
//   };
//   trainingInstance?: {
//     startDate: string;
//     utcOffset: number;
//     city: string;
//     title: string;
//   };
// }

// export interface PaymentType {
//   paymentId: string;
//   id: string;
//   createdAt: string;
//   amount: number;
//   email: string;
//   currency: CurrencyEnum;
//   item: PaymentItem;
// }

// export interface PaymentQueryResult {
//   payment: PaymentType;
// }

// export interface PaymentsConnection {
//   payments: ConnectionData<PaymentType>;
// }

// export interface VoucherType {
//   voucherId: string;
//   id: string;
//   code: string;
//   discountPercentage: number;
//   discountAmount: number;
//   redemptions: number;
//   description: string;
//   currency: CurrencyEnum;
//   trainingInstance: TrainingInstanceType;
//   trainingInstanceId: string;
//   trainingId: string;
//   eventId: string;
//   startsAt: string;
//   expiresAt: string;
//   type: string;
//   training: {
//     title: string;
//   };
//   event: {
//     title: string;
//   };
// }

// export interface DeleteVoucherMutation {
//   deleteVoucher: { voucher: Deleted };
// }

// export interface VoucherQueryResult {
//   voucher: VoucherType;
// }

// export interface VouchersConnection {
//   vouchers: ConnectionData<VoucherType>;
// }
