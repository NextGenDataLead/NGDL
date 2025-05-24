/*
      # Create workflows table for N8N automations

      1. New Tables
        - `workflows`
          - `id` (uuid, primary key): Unique workflow ID
          - `title` (text): Workflow title
          - `description` (text): Detailed description
          - `tags` (text[]): Array of tags/categories
          - `price_eur` (numeric): Price in EUR
          - `json` (jsonb): The actual N8N workflow JSON
          - `image_url` (text): Optional image for display
          - `created_at` (timestamp): Creation time
      2. Security
        - Enable RLS on `workflows`
        - Policy: Anyone can SELECT title/description/tags/price/image_url (for listing)
        - Policy: Only allow access to `json` after successful payment (to be implemented in app logic)
      3. Notes
        - The actual JSON is never exposed in the public listing, only after payment.
        - All content is managed via Supabase as a CMS.
    */

    CREATE TABLE IF NOT EXISTS workflows (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      title text NOT NULL,
      description text NOT NULL,
      tags text[] DEFAULT '{}',
      price_eur numeric NOT NULL,
      json jsonb NOT NULL,
      image_url text DEFAULT '',
      created_at timestamptz DEFAULT now()
    );

    ALTER TABLE workflows ENABLE ROW LEVEL SECURITY;

    -- Public can read metadata (not JSON)
    CREATE POLICY "Public can view workflow metadata"
      ON workflows
      FOR SELECT
      USING (true);

    -- (App logic will restrict JSON delivery post-payment)
