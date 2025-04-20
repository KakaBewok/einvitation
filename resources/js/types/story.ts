export interface Story {
    id: number;
    title: string;
    content: string;
    image_url: string;
    total_guest: number;
    story_date: string; // Format: 'YYYY-MM-DD' or ISO string
    order_number: number;
}
