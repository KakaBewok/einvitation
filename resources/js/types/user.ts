export interface User {
    id: number;
    name: string;
    email: string;
    package: string[] | null;
    permissions: string[] | null;
}
