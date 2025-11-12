export interface ProfileLocation {
    city: string;
    country: string;
    latitude: string;
    longitude: string;
}

export interface ProfilePictures {
    id: number;
    url: string;
    is_primary: boolean;
}

export interface Profile {
    id: string;
    name: string;
    age: number;
    pictures: ProfilePictures[];
    location: ProfileLocation;
}
