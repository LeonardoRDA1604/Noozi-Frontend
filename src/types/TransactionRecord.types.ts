export type RecordType = "entrada" | "saida" | "ajuste" | "perda";

export interface TransactionRecord {
  id_record: string;
  id_product: string;
  record_type: RecordType;
  quantity: number;
  source_destination?: string;
  observation?: string;
  recorded_at: string;
}

// Payload para POST — id_record e recorded_at são gerados pelo servidor
export type CreateTransactionDTO = Omit<TransactionRecord, "id_record" | "recorded_at">;