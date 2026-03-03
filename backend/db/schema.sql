
-- Users Table (Admin & Clients)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  full_name TEXT,
  role TEXT CHECK (role IN ('admin', 'client')) DEFAULT 'client',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Products Table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name_en TEXT NOT NULL,
  name_fr TEXT NOT NULL,
  latin_name TEXT,
  category TEXT CHECK (category IN ('essential-oil', 'cosmetic', 'spice', 'food', 'hair-oil')) NOT NULL,
  description_en TEXT,
  description_fr TEXT,
  benefits_en TEXT,
  benefits_fr TEXT,
  image_url TEXT,
  price_retail DECIMAL(10, 2), -- Nullable for B2B only items
  is_b2b BOOLEAN DEFAULT FALSE,
  is_b2c BOOLEAN DEFAULT FALSE,
  stock_status TEXT DEFAULT 'in_stock',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enquiries Table (Leads)
CREATE TABLE enquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id), -- Optional, if user is logged in
  full_name TEXT NOT NULL,
  company_name TEXT,
  country TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  products_interested TEXT[], -- Array of product IDs or names
  estimated_quantity TEXT,
  message TEXT,
  status TEXT CHECK (status IN ('new', 'quoted', 'paid', 'shipped', 'closed')) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Messages Table (Communication history for enquiries)
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  enquiry_id UUID REFERENCES enquiries(id),
  sender_role TEXT CHECK (sender_role IN ('admin', 'client')),
  content TEXT NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Downloads Table (Tracking PDF downloads)
CREATE TABLE downloads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_email TEXT, -- Capture email before download if required
  file_type TEXT CHECK (file_type IN ('general_catalogue', 'essential_oils_catalogue', 'spices_catalogue', 'product_sheet')),
  downloaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
