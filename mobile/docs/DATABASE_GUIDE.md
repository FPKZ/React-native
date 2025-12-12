# 📚 Guia do Banco de Dados Local (Mobile)

Este projeto utiliza **Expo SQLite** com **Drizzle ORM** para gerenciamento de dados locais.
Esta combinação oferece alta performance, tipagem estática (TypeScript) e facilidade de uso similar ao SQL.

---

## 🚀 1. Visão Geral

- **Banco de Dados**: SQLite (nativo do dispositivo).
- **ORM**: Drizzle ORM (camada de abstração).
- **Migrations**: Drizzle Kit (gerenciamento de schema).
- **Arquivo de Configuração**: `mobile/drizzle.config.ts`.
- **Definição de Tabelas**: `mobile/src/database/schema.ts`.
- **Instância do Banco**: `mobile/src/database/db.ts`.

---

## 🛠️ 2. Como Usar (CRUD)

Importe o banco e as tabelas onde precisar:

```typescript
import { db } from "@/database/db";
import { funcionario, escala } from "@/database/schema";
import { eq, and } from "drizzle-orm";
```

### **Inserir Dados (Insert)**

```typescript
await db.insert(funcionario).values({
  id: "uuid-123",
  nome: "João Silva",
  email: "joao@empresa.com",
  empresaId: "empresa-1",
  turnoId: "turno-a",
});
```

### **Consultar Dados (Select)**

```typescript
// Buscar todos
const todosFuncionarios = await db.select().from(funcionario);

// Buscar com filtro (WHERE)
const joao = await db
  .select()
  .from(funcionario)
  .where(eq(funcionario.email, "joao@empresa.com"));

// Buscar com Join (ex: Escala com dados do Turno)
// Nota: Drizzle suporta joins, mas para SQLite local simples,
// muitas vezes fazemos duas queries ou usamos .leftJoin()
```

### **Atualizar Dados (Update)**

```typescript
await db
  .update(funcionario)
  .set({ nome: "João da Silva" })
  .where(eq(funcionario.id, "uuid-123"));
```

### **Deletar Dados (Delete)**

```typescript
await db.delete(escala).where(eq(escala.id, "escala-999"));
```

---

## ⚙️ 3. Alterando o Banco de Dados (Schema)

Sempre que você precisar criar uma nova tabela ou adicionar uma coluna, siga estes passos:

### **Passo 1: Editar o Schema**

Abra o arquivo `src/database/schema.ts` e faça as alterações.

**Exemplo: Adicionar campo telefone no funcionário**

```typescript
export const funcionario = sqliteTable("funcionario", {
  // ... campos existentes
  telefone: text("telefone"), // Novo campo
});
```

### **Passo 2: Gerar a Migration**

Rode o comando no terminal (dentro da pasta `mobile`):

```bash
npx drizzle-kit generate
```

Isso criará um arquivo SQL na pasta `drizzle/` com as instruções para atualizar o banco.

### **Passo 3: Aplicar Mudanças (Migrations)**

O Drizzle com Expo SQLite aplica as migrations automaticamente se configurado, ou você pode rodar manualmente na inicialização do app.
_Atualmente, o app está configurado para usar o banco, certifique-se de adicionar a lógica de migração no `_layout.tsx` ou `App.tsx` se necessário (usando `useMigrations` do drizzle-orm/expo-sqlite)._

---

## 🔄 4. Sincronização (SyncService)

O arquivo `src/services/SyncService.ts` centraliza a lógica de sincronia.

- **pullData()**: Baixa dados do backend (PostgreSQL/Sequelize) e salva no SQLite local.
- **pushData()**: Pega dados alterados localmente (ex: trocas de turno pendentes) e envia para o backend.

---

## 🔍 5. Comandos Úteis

| Comando                    | Descrição                                                                     |
| -------------------------- | ----------------------------------------------------------------------------- |
| `npx drizzle-kit generate` | Gera arquivos SQL baseados nas mudanças do `schema.ts`.                       |
| `npx drizzle-kit push`     | (Opcional) Tenta aplicar mudanças diretamente (cuidado em prod).              |
| `npx drizzle-kit studio`   | Abre uma interface visual no navegador para ver o banco local (se suportado). |

---

## ⚠️ Dicas Importantes

1. **Tipos**: O Drizzle infere os tipos automaticamente. Se você passar um número num campo de texto, o TypeScript vai reclamar.
2. **Async/Await**: Todas as operações de banco são assíncronas. Sempre use `await`.
3. **IDs**: Como é um banco distribuído (mobile + web), prefira usar **UUIDs** (strings) em vez de IDs numéricos incrementais para evitar conflitos.
