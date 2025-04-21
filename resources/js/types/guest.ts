export interface Guest {
    id: number;
    name: string;
    phone_number: string;
    slug: string;
    is_attending: boolean;
    total_guest: number;
    notes?: string;
    address?: string;
}
