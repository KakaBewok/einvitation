import { GiftInfo } from './gift-info';
import { Guest } from './guest';
import { Image } from './image';
import { Music } from './music';
import { Rsvp } from './rsvp';
import { Rundown } from './rundown';
import { Story } from './story';
import { Theme } from './theme';
import { User } from './user';
import { Video } from './video';

export interface Invitation {
    id: number;
    // host
    host_one_name: string;
    host_two_name: string;
    host_one_nickname: string;
    host_two_nickname: string;
    host_one_additional_info: string;
    host_two_additional_info: string;
    host_one_social_media: string;
    host_two_social_media: string;
    phone_number?: string;
    // event
    event_title: string;
    event_date: Date;
    event_type: string;
    location: string;
    greetings?: string;
    message?: string;
    // etc.
    slug: string;
    is_active?: boolean;
    activated_at?: Date; // ISO Date string
    expired_at?: Date; // ISO Date string
    // relationships
    user?: User;
    theme?: Theme;
    music?: Music;
    images?: Image[];
    videos?: Video[];
    giftInfo?: GiftInfo[];
    rsvps?: Rsvp[];
    guests?: Guest[];
    stories?: Story[];
    rundowns?: Rundown[];
}
