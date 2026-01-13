# Elevar Digital - Landing Page

Landing page moderna e profissional para agência de tecnologia e automação digital.

## 🚀 Tecnologias

- **Next.js 16** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização
- **Supabase** - Backend (Banco de dados e Autenticação)
- **Zod** - Validação de formulários
- **Lucide React** - Ícones

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta no Supabase (gratuita)
- pnpm/npm/yarn instalado

## 🛠️ Instalação

1. **Clone o repositório** (se aplicável)
   ```bash
   git clone <seu-repositorio>
   cd simple-bio-site/my-app
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   # ou
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente**
   
   Crie um arquivo `.env.local` na raiz do projeto:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
   ```

   Você encontra essas informações no dashboard do Supabase:
   - Acesse https://supabase.com/dashboard
   - Selecione seu projeto
   - Vá em Settings > API
   - Copie a URL e a anon key

## 🗄️ Configuração do Banco de Dados (Supabase)

### 1. Criar as Tabelas

1. Acesse o SQL Editor no Supabase Dashboard
2. Abra o arquivo `supabase-schema.sql` deste projeto
3. Copie todo o conteúdo e cole no SQL Editor
4. Execute o script (botão Run)

### 2. Estrutura das Tabelas

#### 📁 **portfolio**
Armazena projetos do portfólio com imagens e links.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | ID único (gerado automaticamente) |
| title | VARCHAR(255) | Título do projeto |
| description | TEXT | Descrição do projeto |
| image_url | TEXT | URL da imagem (Supabase Storage ou externa) |
| site_url | TEXT | URL do site em produção |
| category | VARCHAR(100) | Categoria do projeto |
| created_at | TIMESTAMP | Data de criação |
| updated_at | TIMESTAMP | Data de última atualização |

#### 👥 **clients**
Armazena informações dos clientes com logos do Instagram.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | ID único (gerado automaticamente) |
| name | VARCHAR(255) | Nome do cliente |
| description | TEXT | Descrição do cliente |
| category | VARCHAR(100) | Categoria do cliente |
| instagram_logo_url | TEXT | URL da logo do Instagram |
| instagram_handle | VARCHAR(100) | Handle do Instagram (@empresa) |
| created_at | TIMESTAMP | Data de criação |
| updated_at | TIMESTAMP | Data de última atualização |

#### 📧 **contacts**
Armazena mensagens do formulário de contato.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | ID único (gerado automaticamente) |
| name | VARCHAR(255) | Nome do contato |
| email | VARCHAR(255) | Email do contato |
| phone | VARCHAR(50) | Telefone (opcional) |
| message | TEXT | Mensagem |
| created_at | TIMESTAMP | Data de criação |

### 3. Políticas de Segurança (RLS)

O script SQL já configura as políticas de Row Level Security:

- **Portfolio e Clients**: Leitura pública, escrita apenas para usuários autenticados
- **Contacts**: Inserção pública (qualquer um pode enviar), leitura apenas para usuários autenticados

### 4. (Opcional) Armazenamento de Imagens

Para usar o Supabase Storage para imagens:

1. Vá em Storage no dashboard do Supabase
2. Crie um bucket chamado `portfolio-images` (público)
3. Crie um bucket chamado `client-logos` (público)
4. Configure as políticas de acesso conforme necessário

## 🔐 Autenticação

O projeto usa Supabase Auth para autenticação. Para criar usuários:

1. Vá em Authentication > Users no dashboard
2. Clique em "Add user"
3. Crie um usuário com email e senha
4. Use essas credenciais para fazer login em `/login`

## 🚀 Executar o Projeto

```bash
pnpm dev
# ou
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
my-app/
├── app/
│   ├── (dashboard)/          # Páginas do dashboard (protegidas)
│   ├── (landingpage)/        # Landing page pública
│   ├── (login)/              # Páginas de autenticação
│   ├── lib/                  # Utilitários e configurações
│   │   ├── supabase.ts       # Cliente Supabase
│   │   ├── validations.ts    # Schemas Zod
│   │   └── types.ts          # Tipos TypeScript
│   └── ...
├── components/               # Componentes React
│   ├── navbar/
│   ├── footer/
│   ├── heroSection/
│   ├── benefitsSection/
│   ├── contactFormSection/
│   ├── clientsSection/
│   ├── videoSection/
│   └── processSection/
├── public/                   # Arquivos estáticos
├── supabase-schema.sql       # Script SQL para criar tabelas
└── README.md                 # Este arquivo
```

## 📝 Páginas Disponíveis

- `/` - Landing page principal
- `/login` - Página de login
- `/dashboard` - Dashboard administrativo (requer autenticação)
- `/termos` - Termos de uso
- `/proposta` - Proposta comercial
- `/contratos` - Informações sobre contratos
- `/garantia` - Garantias e políticas

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Iniciar produção
pnpm start

# Linter
pnpm lint
```

## 📦 Dependências Principais

Para instalar todas as dependências necessárias:

```bash
pnpm add @supabase/supabase-js zod
```

## 🔒 Variáveis de Ambiente

Certifique-se de ter as seguintes variáveis no `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```

## 📚 Recursos Adicionais

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Supabase](https://supabase.com/docs)
- [Documentação Zod](https://zod.dev)
- [Documentação Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é privado e propriedade da Elevar Digital.

---

Desenvolvido com ❤️ por [Adrieldev](https://adrieldev.vercel.app/)
