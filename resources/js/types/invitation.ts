import { Guest } from './guest';
import { Image } from './image';
import { ParentModel } from './parent-model';
import { Rsvp } from './rsvp';
import { Rundown } from './rundown';
import { Story } from './story';
import { Theme } from './theme';
import { User } from './user';

export interface Invitation {
    id: number;
    // host
    host_one_name: string;
    host_two_name: string;
    host_one_nickname: string;
    host_two_nickname: string;
    // gift
    bank_name_one?: string;
    account_number_one?: string;
    account_holder_one?: string;
    bank_name_two?: string;
    account_number_two?: string;
    account_holder_two?: string;
    gift_delivery_address?: string;
    // event
    event_title: string;
    event_date: string; // Format: 'YYYY-MM-DD' or ISO string
    event_type: string;
    location: string;
    message?: string;
    // etc.
    slug: string;
    is_active?: boolean;
    activated_at?: string | null; // ISO Date string
    expired_at?: string | null; // ISO Date string
    // relationships
    user?: User;
    theme?: Theme;
    parents?: ParentModel[];
    images?: Image[];
    rsvps?: Rsvp[];
    guests?: Guest[];
    stories?: Story[];
    rundowns?: Rundown[];
}
