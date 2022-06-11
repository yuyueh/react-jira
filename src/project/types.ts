export interface SearchParams {
    name?: string;
    ownerId?: number;
}

export interface User {
    id: number;
    name: string;
}

export interface Project {
    id: number;
    name: string;
    ownerId: number;
    organization: string;
    created: Date;
}
