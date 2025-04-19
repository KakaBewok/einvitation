export interface User {
    id: number;
    name: string;
    email: string;
    roles: string[] | null;
    permissions: string[] | null;
}
