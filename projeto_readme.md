# README do Sistema de Gestão de Escalas, Turnos e Empresa

## 📌 Visão Geral
Este projeto unifica **mobile (React Native + Expo)** e **web (Vite + React)** em uma única base de código, oferecendo:
- Aplicativo mobile completo para funcionários.
- Aplicativo mobile com versão reduzida para responsáveis/gestores.
- Plataforma web empresarial completa (via Vite + React).
- Login empresarial acessível tanto no app quanto no web.
- Sincronização remota + cache local SQLite no mobile.
- Suporte total a Expo Web.

Abaixo está toda a documentação consolidada incluindo tabelas, fluxos, permissões, funcionalidades e exemplos visuais.

---

# 📱 Estrutura Geral do Projeto
```
project-root/
├── mobile/ (Expo + React Native + SQLite + Expo Web)
├── web/ (Vite + React)
├── shared/ (hooks, services, interfaces, schemas)
└── backend/ (API REST + autenticação + sincronização)
```

---

# 🔐 Autenticação
- **Funcionário** → login normal (email + senha).
- **Empresa/Responsável** → login empresarial.
- O app detecta automaticamente o tipo de usuário.
- Sessão permanece salva localmente com:
  - AsyncStorage (mobile)
  - IndexedDB/localStorage (web)

---

# 🧭 Fluxo de Acesso
## Mobile
- Tela: *Escolha o tipo de login → Funcional / Empresarial*.
- **Funcionário** → Dashboard, agenda, troca de turno, escalas, mensagens.
- **Empresa (mobile)** → Versão reduzida do painel empresarial para gestão básica.

## Web
- A página inicial **já abre diretamente no LOGIN EMPRESARIAL**.
- Apenas responsáveis e empresa acessam via web.

---

# 🗃️ Estrutura das Tabelas

## **Tabela Empresa**
| Campo | Tipo | Descrição |
|------|------|-----------|
| id | uuid | identificador |
| nome | string | nome da empresa |
| cnpj | string | documento |
| contatos | json | telefones, emails, etc |
| endereco | string | endereço |
| responsaveis | relação | usuários responsáveis |

---

## **Tabela Funcionário**
| Campo | Tipo |
| id | uuid |
| nome | string |
| email | string |
| empresa_id | uuid |
| turno_id | uuid (pode ser nulo para responsáveis) |
| local_trabalho | string |

---

## **Tabela Turno**
| Campo | Tipo |
| id | uuid |
| nome_turno | string (ex: A, B, Noturno 1) |
| tipo | enum (diurno/noturno) |
| inicio | time |
| fim | time |
| descricao | string |

---

## **Tabela Escala**
| Campo | Tipo |
| funcionário_id | uuid |
| data | date |
| turno_id | uuid |
| confirmado | boolean |

---

## **Tabela Troca de Turno**
| Campo | Tipo |
| solicitante_id | uuid |
| solicitado_id | uuid |
| data_solicitante | date |
| data_sugerida (opcional) | date |
| status | enum |
| justificativa | string |

Fluxo documentado abaixo.

---

## **Tabela Notificações**
| Campo | Tipo |
| id | uuid |
| funcionario_id | uuid |
| tipo | string |
| mensagem | string |
| motivo_recusa | string (opcional) |
| lida | boolean |

---

# 🔄 Fluxo da Troca de Turno (Exemplo Visual)

### **1. Funcionário A inicia a solicitação:**
```
[Funcionario A]
- Seleciona dia: 12/05
- Seleciona turno: B
- Escolhe Funcionário B para troca
```

### **2. Funcionário B recebe a solicitação:**
```
[Funcionário B]
Deseja aceitar?
  ✔ Aceitar troca direta
  🔁 Sugerir outro dia para troca
```

### **3. Se funcionário B sugerir um dia:**
```
B sugere: 16/05
```

### **4. Funcionário A recebe a sugestão:**
```
Funcionário A aceita a sugestão?
  ✔ Sim – troca confirmada
  ✘ Não – troca recusada
```

### **Resultado:**
```
Dia original A ↔ Dia sugerido B
Ambos trocam os turnos
```

---

# 🖥️ Painel Empresarial (Web)
Inclui:
- Cadastro de funcionários
- Gestão de turnos (A, B, diurno, noturno, etc)
- Criação e edição de escalas
- Envio de notificações
- Visão geral de trocas pendentes
- Histórico de recusas e motivos
- Mensagens com funcionários
- Gestão de responsáveis
- Dashboard com métricas

---

# 📱 Versão Mobile Empresarial (reduzida)
Permite:
- Visualizar escalas
- Receber solicitações críticas
- Aprovar trocas urgentes
- Enviar mensagens para funcionários
- Ver contatos da empresa
- Gerenciar pequenas alterações emergenciais

---

# 💾 Armazenamento Local (Mobile)
Utiliza **SQLite** para:
- Cache de escalas
- Dados dos turnos
- Perfil do usuário
- Logs de ações offline

Sincronização automática quando online.

---

# 🌐 Backend e Sincronização
- API REST
- JWT Auth
- Rotas para empresa e funcionários separadas
- Eventos de troca de turno
- Histórico de recusa/aceite

---

# 📦 Scripts de Desenvolvimento
### Mobile (Expo)
```
npm run mobile
```
### Web (Vite)
```
npm run web
```
### Iniciar ambos juntos
```
npm run dev
```
Isso inicia Expo e Vite simultaneamente.

---

# 🧪 Testes
- Jest + Testing Library (web)
- Jest + Expo Testing Library (mobile)

---

# 🛠️ Dependências Principais
- Expo SDK
- React Native
- Vite + React
- SQLite (mobile)
- Axios
- Zustand ou Redux Toolkit
- Express (backend)

---

# 📄 Licença
Uso privado e interno.

---

Caso deseje adicionar mais seções, exemplos ou diagramas, peça a próxima atualização!

