export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image_url: string;
  site_url: string;
  category: string;
  created_at: string;
}

export interface Client {
  id: string;
  name: string;
  description: string;
  category: string;
  instagram_logo_url: string;
  instagram_handle: string;
  created_at: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  created_at: string;
}
