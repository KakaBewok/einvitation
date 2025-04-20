export interface Image {
    id: number;
    url: string;
    caption?: string;
    type: string; // 'preview', 'background', 'cover', 'gallery'
}
