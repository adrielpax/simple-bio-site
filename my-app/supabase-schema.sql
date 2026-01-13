-- ============================================
-- ELEVAR DIGITAL - SCHEMA DO BANCO DE DADOS
-- ============================================
-- Execute este SQL no SQL Editor do Supabase
-- https://supabase.com/dashboard/project/_/sql

-- ============================================
-- 1. TABELA: portfolio
-- ============================================
-- Armazena itens do portfólio com imagens e links dos sites

CREATE TABLE IF NOT EXISTS portfolio (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  site_url TEXT NOT NULL,
  category VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_portfolio_category ON portfolio(category);
CREATE INDEX IF NOT EXISTS idx_portfolio_created_at ON portfolio(created_at DESC);

-- Comentários
COMMENT ON TABLE portfolio IS 'Armazena projetos do portfólio com imagens e links';
COMMENT ON COLUMN portfolio.image_url IS 'URL da imagem do projeto (pode ser Supabase Storage ou URL externa)';
COMMENT ON COLUMN portfolio.site_url IS 'URL do site/projeto em produção';

-- ============================================
-- 2. TABELA: clients
-- ============================================
-- Armazena informações dos clientes com logos do Instagram

CREATE TABLE IF NOT EXISTS clients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  instagram_logo_url TEXT,
  instagram_handle VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_clients_category ON clients(category);
CREATE INDEX IF NOT EXISTS idx_clients_created_at ON clients(created_at DESC);

-- Comentários
COMMENT ON TABLE clients IS 'Armazena informações dos clientes';
COMMENT ON COLUMN clients.instagram_logo_url IS 'URL da logo do Instagram do cliente';
COMMENT ON COLUMN clients.instagram_handle IS 'Handle do Instagram (ex: @empresa)';

-- ============================================
-- 3. TABELA: contacts
-- ============================================
-- Armazena mensagens do formulário de contato

CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);

-- Comentários
COMMENT ON TABLE contacts IS 'Armazena mensagens do formulário de contato';

-- ============================================
-- 4. POLÍTICAS RLS (Row Level Security)
-- ============================================
-- Habilitar RLS nas tabelas

ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Políticas para PORTFOLIO (leitura pública, escrita apenas autenticada)
CREATE POLICY "Portfolio is viewable by everyone"
  ON portfolio FOR SELECT
  USING (true);

CREATE POLICY "Portfolio is insertable by authenticated users"
  ON portfolio FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Portfolio is updatable by authenticated users"
  ON portfolio FOR UPDATE
  USING (auth.role() = 'authenticated');

CREATE POLICY "Portfolio is deletable by authenticated users"
  ON portfolio FOR DELETE
  USING (auth.role() = 'authenticated');

-- Políticas para CLIENTS (leitura pública, escrita apenas autenticada)
CREATE POLICY "Clients is viewable by everyone"
  ON clients FOR SELECT
  USING (true);

CREATE POLICY "Clients is insertable by authenticated users"
  ON clients FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Clients is updatable by authenticated users"
  ON clients FOR UPDATE
  USING (auth.role() = 'authenticated');

CREATE POLICY "Clients is deletable by authenticated users"
  ON clients FOR DELETE
  USING (auth.role() = 'authenticated');

-- Políticas para CONTACTS (inserção pública, leitura/edição apenas autenticada)
CREATE POLICY "Contacts is insertable by everyone"
  ON contacts FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Contacts is viewable by authenticated users"
  ON contacts FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Contacts is updatable by authenticated users"
  ON contacts FOR UPDATE
  USING (auth.role() = 'authenticated');

CREATE POLICY "Contacts is deletable by authenticated users"
  ON contacts FOR DELETE
  USING (auth.role() = 'authenticated');

-- ============================================
-- 5. FUNÇÃO: updated_at trigger
-- ============================================
-- Função para atualizar automaticamente o campo updated_at

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para atualizar updated_at
CREATE TRIGGER update_portfolio_updated_at BEFORE UPDATE ON portfolio
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_clients_updated_at BEFORE UPDATE ON clients
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 6. DADOS DE EXEMPLO (OPCIONAL)
-- ============================================
-- Descomente para inserir dados de exemplo

/*
-- Portfolio de exemplo
INSERT INTO portfolio (title, description, image_url, site_url, category) VALUES
('E-commerce Moderno', 'Plataforma completa de e-commerce com painel administrativo', 'https://via.placeholder.com/800x600', 'https://exemplo.com', 'E-commerce'),
('Sistema de Gestão', 'Sistema completo para gestão empresarial', 'https://via.placeholder.com/800x600', 'https://exemplo2.com', 'Sistema');

-- Clientes de exemplo
INSERT INTO clients (name, description, category, instagram_handle) VALUES
('TechCorp Solutions', 'Startup de tecnologia que revolucionou o setor', 'Tecnologia', '@techcorp'),
('InnovateHub', 'Plataforma de inovação corporativa líder de mercado', 'Consultoria', '@innovatehub');
*/

-- ============================================
-- FIM DO SCRIPT
-- ============================================
