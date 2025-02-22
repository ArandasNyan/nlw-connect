# Projeto Server

## Visão Geral
Este projeto é uma api de inscrições e indicações de pessoas/amigos/familiares para eventos, onde fornece um sistema simples de convite e ranking de convites.

## Tecnologias Utilizadas
- **Node.js** - Ambiente de execução JavaScript
- **TypeScript** - Superset de JavaScript com tipagem estática
- **Drizzle ORM** - Gerenciador de banco de dados
- **Redis** - Armazenamento em cache e filas de mensagens
- **Docker** - Containerização do ambiente

## Estrutura de Diretórios
```
nlw-connect/                   
├── .vscode/                # Configurações de projeto
├── src/                    # Código-fonte principal
│   ├── config/             # Configurações gerais
│   │   ├── env.ts          # Configurações de variáveis de ambiente
│   ├── drizzle/            # Configuração do Drizzle ORM
│   │   ├── client.ts       # Cliente de banco de dados
│   │   ├── schema/         # Esquema do banco de dados
│   │       ├── subscriptions.ts
│   ├── functions/          # Funções de negócios principais
│   │   ├── acess-invite-link.ts
│   │   ├── get-ranking.ts
│   │   ├── get-subscriber-invite-clicks.ts
│   │   ├── get-subscriber-invite-count.ts
│   │   ├── get-subscriber-ranking-position.ts
│   │   ├── subscribe-to-event.ts
│   ├── redis/              # Configuração do Redis
│   │   ├── client.ts
│   ├── routes/             # Rotas da API
│   │   ├── acess-invite-link-route.ts
│   │   ├── get-raking-route.ts
│   │   ├── get-subscriber-invite-clicks-route.ts
│   │   ├── get-subscriber-invites-count-route.ts
│   │   ├── get-subscriber-ranking-position-route.ts
│   │   ├── subscribe-to-event-route.ts
│   ├── server.ts           # Ponto de entrada do servidor
├── .env.example            # Clone do arquivo .env de variaveis de ambiente
├── biome.json              # Formatador de código
├── drizzle.config.ts       # Configuração de funcionamento do Drizzle ORM
├── docker-compose.yml      # Configuração de containers
├── package.json            # Dependências do projeto
├── tsconfig.json           # Configuração do TypeScript
```

## Instalação e Configuração
1. **Clone o repositório:**
   ```sh
   git clone https://github.com/ArandasNyan/nlw-connect.git
   cd .\nlw-connect
   ```
2. **Instale as dependências:**
   ```sh
   npm install
   ```
3. **Configure as variáveis de ambiente:**
   - Crie um arquivo `.env` ou retire 'example' do arquivo `.env.example` com as configurações necessárias (baseado em `src/config/env.ts`)
4. **Execute o servidor:**
   ```sh
   npm run dev
   ```

## Rotas da API
A API expõe as seguintes rotas:

### `GET /subscriptions`
**Descrição:** faz a inscrição de novos usuários.

### `GET /ranking`
**Descrição:** trás 3 usuários que mais convidaram pessoas.

### `GET /invites/:subscriberId`
**Descrição:** Gera um link de convite e redirecionamento do usuário.

### `GET /subscribers/:subscriberId/ranking/clicks`
**Descrição:** Obtém o ranking de usuários com mais click no link.

### `POST /subscribers/:subscriberId/ranking/count`
**Descrição:** Obtém um contador com a quantidade de clicks feitas no link de um usuário.

### `GET /subscribers/:subscriberId/ranking/position`
**Descrição:** Retorna a posição do usuário no ranking.

## Licença
Este projeto está licenciado sob a MIT License.
