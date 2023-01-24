enum Role {
  USER,
  ADMIN,
}
interface Database {
  public: {
    Tables: {
      products: {
        Row: {};
        Insert: {};
        Update: {};
      };
      profiles: {
        Row: {
          id: string;
          email: string | null;
          full_name: string | null;
          role: Role;
          avatar_url: string | null;
          created_at: string | null;
          updated_at: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

export type { Database };
