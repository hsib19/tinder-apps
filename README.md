# Tinder App - React Native

A simple Tinder-like mobile app built with **React Native**, using **Zustand** for state management and **Atomic Design** for component structure.

The app includes three main screens: **Splash Screen**, **Main Screen**, and **Like Screen**.

## Features

* **Splash Screen**: Shows a welcoming screen while the app loads.
* **Main Screen**: Displays a stack of profiles to swipe left (dislike) or right (like).
* **Like Screen**: Shows the list of profiles the user has liked.
* **State Management**: Uses Zustand to manage profiles and swipe actions.
* **Atomic Design**: Components structured in Atoms, Molecules, Organisms, Screens for better maintainability.
* **Cross-platform**: Works on Android and iOS devices.

## Screens

| Screen        | Description                                                            |
| ------------- | ---------------------------------------------------------------------- |
| Splash Screen | Appears on app launch with a welcome or loading animation.             |
| Main Screen   | Displays a swipeable deck of profiles with interactive swipe gestures. |
| Like Screen   | Shows profiles that the user has liked; can review or remove them.     |

## Atomic Design Structure

```
src/
├── components/
│   ├── atoms/        # Smallest components, e.g., Button, Text, Avatar
│   ├── molecules/    # Combinations of atoms, e.g., ProfileCard, SwipeButtons
│   ├── organisms/    # Combinations of molecules, e.g., ProfileDeck
│   └── screens/      # Complete screens: SplashScreen, MainScreen, LikeScreen
├── store/            # Zustand store for state management
├── utils/            # Helper functions
├── App.tsx           # App entry point
└── types/            # TypeScript interfaces
```

## State Management (Zustand)

The app uses **Zustand** for global state management:

```ts
import { create } from "zustand";
import { Profile } from "../types/profile";

interface LikedState {
    likedProfiles: Profile[];
    addLiked: (profile: Profile) => void;
    removeLiked: (id: string) => void;
    clearLiked: () => void;
}

export const useLikedStore = create<LikedState>((set) => ({
    likedProfiles: [],
    addLiked: (profile) =>
        set((state) => ({
            likedProfiles: [...state.likedProfiles, profile],
        })),
    removeLiked: (id) =>
        set((state) => ({
            likedProfiles: state.likedProfiles.filter((p) => p.id !== id),
        })),
    clearLiked: () => set({ likedProfiles: [] }),
}));

```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/hsib19/tinder_apps.git
cd tinder_apps
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start Metro bundler:

```bash
npm start
# or
yarn start
```

4. Run on Android:

```bash
npm run android
# or
yarn android
```

5. Run on iOS:

```bash
npm run ios
# or
yarn ios
```

# Environment Variables for Tinder App

Create a `.env` file in the root of your project with the following variables:

```
API_URL=https://your-api-url.com
AUTH_TOKEN=your-auth-token
```

### Notes

* `API_URL`: The base URL of your backend API.
* `AUTH_TOKEN`: Your authentication token for API requests.
