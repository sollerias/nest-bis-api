export interface Transaction {
  id: string,
  addressFrom: string;
  addressTo: string;
  txHash: string;
  txHex: string;
  amount: string;
  isApproved: boolean;
  timeApproved: number;
  errors: string;
  coinId: number;
  serviceId: string;
}