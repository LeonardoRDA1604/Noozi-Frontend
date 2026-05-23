export type ActivityType = "created" | "updated" | "deleted";

export interface ActivityLog {
  id_log: string;
  id_product: string;
  product_name: string;       // snapshot do nome — preservado após o delete
  activity_type: ActivityType;
  occurred_at: string;        // ISO date string
  expires_at?: string;        // data limite para limpeza automática
}

// Payload para POST — id_log gerado pelo servidor
export type CreateActivityLogDTO = Omit<ActivityLog, "id_log">;

// O que o componente de atividades recentes exibe
export interface RecentActivity {
  id: string;
  id_product: string;
  product_name: string;
  activity_type: ActivityType;
  occurred_at: string;
}

export interface RecentActivitiesProps {
  limit?: number;             // quantos registros exibir — padrão 5
  deletedRetentionDays?: number; // dias para manter registros de delete — padrão 30
}