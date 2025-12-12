import { db } from "../database/db";
import {
  empresa,
  funcionario,
  turno,
  escala,
  troca,
  notificacao,
} from "../database/schema";
import { eq } from "drizzle-orm";
// import api from './api'; // Assuming you have an axios instance

export const SyncService = {
  async pullData() {
    try {
      console.log("Starting pull...");
      // 1. Fetch data from backend
      // const response = await api.get('/sync');
      // const data = response.data;

      // 2. Update local database
      // await db.transaction(async (tx) => {
      //   await tx.insert(empresa).values(data.empresa).onConflictDoUpdate(...);
      //   ...
      // });
      console.log("Pull finished");
    } catch (error) {
      console.error("Pull failed", error);
    }
  },

  async pushData() {
    try {
      console.log("Starting push...");
      // 1. Get pending changes from local DB (e.g. where synced = false)
      // const pending = await db.select().from(troca).where(eq(troca.synced, false));

      // 2. Send to backend
      // await api.post('/sync', pending);

      // 3. Mark as synced
      console.log("Push finished");
    } catch (error) {
      console.error("Push failed", error);
    }
  },

  async sync() {
    await this.pushData();
    await this.pullData();
  },
};
