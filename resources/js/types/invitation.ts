export interface Invitation {
    id: number;
    user_id: number;
    theme_id: number;
    slug: string;
    event_title: string;
    host_one_name: string;
    host_two_name: string;
    host_one_nickname: string;
    host_two_nickname: string;

    bank_name_one?: string | null;
    account_number_one?: string | null;
    account_holder_one?: string | null;

    bank_name_two?: string | null;
    account_number_two?: string | null;
    account_holder_two?: string | null;

    gift_delivery_address?: string | null;

    event_date: string; // Format: 'YYYY-MM-DD' atau ISO string
    event_type: string;
    location: string;
    message?: string;

    is_active?: boolean;
    activated_at?: string | null; // ISO Date string
    expired_at?: string | null; // ISO Date string

    created_at?: string;
    updated_at?: string;
}
