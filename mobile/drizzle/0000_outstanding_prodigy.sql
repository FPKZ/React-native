CREATE TABLE `empresa` (
	`id` text PRIMARY KEY NOT NULL,
	`nome` text NOT NULL,
	`cnpj` text,
	`contatos` text,
	`endereco` text,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `escala` (
	`id` text PRIMARY KEY NOT NULL,
	`funcionario_id` text NOT NULL,
	`data` text NOT NULL,
	`turno_id` text NOT NULL,
	`confirmado` integer DEFAULT false,
	`updated_at` integer,
	FOREIGN KEY (`funcionario_id`) REFERENCES `funcionario`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`turno_id`) REFERENCES `turno`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `funcionario` (
	`id` text PRIMARY KEY NOT NULL,
	`nome` text NOT NULL,
	`email` text NOT NULL,
	`empresa_id` text,
	`turno_id` text,
	`local_trabalho` text,
	`updated_at` integer,
	FOREIGN KEY (`empresa_id`) REFERENCES `empresa`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `notificacao` (
	`id` text PRIMARY KEY NOT NULL,
	`funcionario_id` text NOT NULL,
	`tipo` text NOT NULL,
	`mensagem` text NOT NULL,
	`motivo_recusa` text,
	`lida` integer DEFAULT false,
	`created_at` integer DEFAULT '"2025-12-12T18:03:54.121Z"',
	FOREIGN KEY (`funcionario_id`) REFERENCES `funcionario`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `troca` (
	`id` text PRIMARY KEY NOT NULL,
	`solicitante_id` text NOT NULL,
	`solicitado_id` text NOT NULL,
	`data_solicitante` text NOT NULL,
	`data_sugerida` text,
	`status` text NOT NULL,
	`justificativa` text,
	`updated_at` integer,
	FOREIGN KEY (`solicitante_id`) REFERENCES `funcionario`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`solicitado_id`) REFERENCES `funcionario`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `turno` (
	`id` text PRIMARY KEY NOT NULL,
	`nome_turno` text NOT NULL,
	`tipo` text NOT NULL,
	`inicio` text NOT NULL,
	`fim` text NOT NULL,
	`descricao` text,
	`updated_at` integer
);
