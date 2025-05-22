/*
  # Create workflows and payments tables

  1. New Tables
    - `workflows`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (numeric)
      - `image_url` (text)
      - `features` (text[])
      - `tags` (text[])
      - `workflow_json` (jsonb)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `payments`
      - `id` (uuid, primary key)
      - `workflow_id` (uuid, foreign key)
      - `mollie_payment_id` (text)
      - `amount` (numeric)
      - `status` (text)
      - `customer_email` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Create workflows table
CREATE TABLE IF NOT EXISTS workflows (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL,
  image_url text NOT NULL,
  features text[] NOT NULL DEFAULT '{}',
  tags text[] NOT NULL DEFAULT '{}',
  workflow_json jsonb NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create payments table
CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  workflow_id uuid REFERENCES workflows(id) ON DELETE CASCADE,
  mollie_payment_id text NOT NULL,
  amount numeric NOT NULL,
  status text NOT NULL,
  customer_email text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE workflows ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Create policies for workflows
CREATE POLICY "Anyone can view workflows"
  ON workflows
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Only authenticated users can modify workflows"
  ON workflows
  FOR ALL
  TO authenticated
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Create policies for payments
CREATE POLICY "Users can view their own payments"
  ON payments
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = customer_email);

CREATE POLICY "Service role can create payments"
  ON payments
  FOR INSERT
  TO service_role
  WITH CHECK (true);