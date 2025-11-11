export interface ProfileLocation {
    city: string;
    country: string;
}

export interface Profile {
    id: string;
    name: string;
    age: number;
    images: string[];
    location: ProfileLocation;
}
