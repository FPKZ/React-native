import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const empresa = sqliteTable("empresa", {
  id: text("id").primaryKey(),
  nome: text("nome").notNull(),
  cnpj: text("cnpj"),
  contatos: text("contatos", { mode: "json" }),
  endereco: text("endereco"),
  updatedAt: integer("updated_at", { mode: "timestamp" }),
});

export const funcionario = sqliteTable("funcionario", {
  id: text("id").primaryKey(),
  nome: text("nome").notNull(),
  email: text("email").notNull(),
  empresaId: text("empresa_id").references(() => empresa.id),
  turnoId: text("turno_id"), // Can be null for managers
  localTrabalho: text("local_trabalho"),
  updatedAt: integer("updated_at", { mode: "timestamp" }),
});

export const turno = sqliteTable("turno", {
  id: text("id").primaryKey(),
  nomeTurno: text("nome_turno").notNull(),
  tipo: text("tipo").notNull(), // 'diurno' | 'noturno'
  inicio: text("inicio").notNull(),
  fim: text("fim").notNull(),
  descricao: text("descricao"),
  updatedAt: integer("updated_at", { mode: "timestamp" }),
});

export const escala = sqliteTable("escala", {
  id: text("id").primaryKey(), // Composite key simulation or unique ID
  funcionarioId: text("funcionario_id")
    .references(() => funcionario.id)
    .notNull(),
  data: text("data").notNull(), // ISO date string
  turnoId: text("turno_id")
    .references(() => turno.id)
    .notNull(),
  confirmado: integer("confirmado", { mode: "boolean" }).default(false),
  updatedAt: integer("updated_at", { mode: "timestamp" }),
});

export const troca = sqliteTable("troca", {
  id: text("id").primaryKey(),
  solicitanteId: text("solicitante_id")
    .references(() => funcionario.id)
    .notNull(),
  solicitadoId: text("solicitado_id")
    .references(() => funcionario.id)
    .notNull(),
  dataSolicitante: text("data_solicitante").notNull(),
  dataSugerida: text("data_sugerida"),
  status: text("status").notNull(), // 'pendente', 'aceito', 'recusado', 'sugestao'
  justificativa: text("justificativa"),
  updatedAt: integer("updated_at", { mode: "timestamp" }),
});

export const notificacao = sqliteTable("notificacao", {
  id: text("id").primaryKey(),
  funcionarioId: text("funcionario_id")
    .references(() => funcionario.id)
    .notNull(),
  tipo: text("tipo").notNull(),
  mensagem: text("mensagem").notNull(),
  motivoRecusa: text("motivo_recusa"),
  lida: integer("lida", { mode: "boolean" }).default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).default(new Date()),
});
