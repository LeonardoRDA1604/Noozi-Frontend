import { api } from "@/lib/api";
import type { TransactionRecord, CreateTransactionDTO } from "@/types/TransactionRecord.types";

export const transactionRecordService = {

  // Retorna todos os registros de transação
  getAll: async (): Promise<TransactionRecord[]> => {
    const { data } = await api.get("/transaction_records");
    return data;
  },

  // Retorna apenas os registros de um produto específico
  // json-server filtra via query string: ?id_product=123
  getByProduct: async (id_product: string): Promise<TransactionRecord[]> => {
    const { data } = await api.get(`/transaction_records?id_product=${id_product}`);
    return data;
  },

  // Cria um novo registro — id_record e recorded_at são gerados pelo servidor
  create: async (payload: CreateTransactionDTO): Promise<TransactionRecord> => {
    const { data } = await api.post("/transaction_records", payload);
    return data;
  },
};