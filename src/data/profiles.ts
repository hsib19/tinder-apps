import { Profile } from "../types/profile";

export const initialProfiles: Profile[] = [
    {
        id: "1",
        name: "Ayu",
        age: 25,
        images: [
            "https://randomuser.me/api/portraits/women/1.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/women/3.jpg",
        ],
        location: {
            city: "Jakarta",
            country: "Indonesia",
        },
    },
    {
        id: "2",
        name: "Budi",
        age: 28,
        images: [
            "https://randomuser.me/api/portraits/men/2.jpg",
            "https://randomuser.me/api/portraits/men/3.jpg",
        ],
        location: {
            city: "Bandung",
            country: "Indonesia",
        },
    },
    {
        id: "3",
        name: "Sari",
        age: 24,
        images: [
            "https://randomuser.me/api/portraits/women/4.jpg",
            "https://randomuser.me/api/portraits/women/5.jpg",
        ],
        location: {
            city: "Bali",
            country: "Indonesia",
        },
    },
];
