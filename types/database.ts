export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      workflows: {
        Row: {
          id: string
          name: string
          description: string
          price: number
          image_url: string
          features: string[]
          tags: string[]
          workflow_json: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          price: number
          image_url: string
          features?: string[]
          tags?: string[]
          workflow_json: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          price?: number
          image_url?: string
          features?: string[]
          tags?: string[]
          workflow_json?: Json
          created_at?: string
          updated_at?: string
        }
      }
      payments: {
        Row: {
          id: string
          workflow_id: string
          mollie_payment_id: string
          amount: number
          status: string
          customer_email: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          workflow_id: string
          mollie_payment_id: string
          amount: number
          status: string
          customer_email: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          workflow_id?: string
          mollie_payment_id?: string
          amount?: number
          status?: string
          customer_email?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}