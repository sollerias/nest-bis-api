import { Repository, EntityRepository } from "typeorm"
import { Transaction } from "./transaction.entity";
import { TransactionCreateDto } from "./dto/transaction-create.dto";
import { InternalServerErrorException } from "@nestjs/common";

@EntityRepository(Transaction)
export class TransactionRepository extends Repository<Transaction> {
  async createTransaction(transactionCreateDto: TransactionCreateDto): Promise<{
    isCoinAvailable: boolean,
    isCoinSent: boolean,
    addressTo: string,
    amountCoins: string,
    fee: string,
    txHash: string,
  }> {
    const { coin, addressFrom, addressTo, amountCoin } = transactionCreateDto;

    const transaction = new Transaction();

    const txHash = 'sdfsdfsdfsdfsfsdfsdfsf';
    const txHex = 'asdfdfffff';
    const isApproved = true;
    const approvedTime = Date.now();
    const errors = 'no errors';

    transaction.addressFrom = addressFrom;
    transaction.addressTo = addressTo;
    transaction.amount = amountCoin;
    transaction.txHash = txHash;
    transaction.txHex = txHex;
    transaction.isApproved = isApproved;
    transaction.timeApproved = approvedTime;
    transaction.errors = errors;

    try {
      await transaction.save();
      return {
        isCoinAvailable: true,
        isCoinSent: true,
        addressTo: transaction.addressTo,
        amountCoins: transaction.amount,
        fee: "1000",
        txHash: transaction.txHash
      }
    } catch (error) {
      console.log('TransactionRepositoryCreate/error: ', error);
      throw new InternalServerErrorException();
    }
  }
}