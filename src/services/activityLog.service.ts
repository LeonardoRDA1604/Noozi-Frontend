import { api } from "@/lib/api";
import type { ActivityLog, CreateActivityLogDTO } from "@/types/ActivityLog.types";

export const activityLogService = {

  // Retorna todos os logs de atividade
  getAll: async (): Promise<ActivityLog[]> => {
    const { data } = await api.get("/activity_logs");
    return data;
  },

  // Cria um novo log — id_log gerado pelo servidor
  create: async (payload: CreateActivityLogDTO): Promise<ActivityLog> => {
    const { data } = await api.post("/activity_logs", payload);
    return data;
  },

  // Remove logs expirados — chamado automaticamente pelo useRecentActivities
  // Deleta registros cuja expires_at já passou
  purgeExpired: async (): Promise<void> => {
    const { data: logs } = await api.get("/activity_logs");
    const now = new Date();

    const expired = logs.filter((log: ActivityLog) => {
      if (!log.expires_at) return false;
      return new Date(log.expires_at) < now;
    });

    // Remove em paralelo
    await Promise.all(
      expired.map((log: ActivityLog) =>
        api.delete(`/activity_logs/${log.id}`)
      )
    );
  },
};