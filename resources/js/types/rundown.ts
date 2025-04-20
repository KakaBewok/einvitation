export interface Rundown {
    id: number;
    title: string;
    start_time: string; // Format: 'YYYY-MM-DD HH:mm:ss' or ISO string
    end_time: string; // Format: 'YYYY-MM-DD HH:mm:ss' or ISO string
    image_url: string; // URL to the image
    description: string; // Description of the rundown
    order_number: number; // Order number for sorting
}
