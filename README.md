# Movemento Front End
Movemento, a mobile application for users to mindfully log their exercise. Lots of exercise logging apps like Strava and Apple Fitness are focused on the quantitiative aspects of exercising. Movemento is intended to be a mindful exercise tracker where users can reflect on their exercise experiences from a mindfulness and wellness approach, focusing more on the qualitative benefits like improved mood, better sleep, and improved quality of life.

## Features
- Create a journal entry
- Read previous journal entries
- Update journal entries
- Delete journal entries
- Add photos to journal entries
- Track days where an entry was made and maintain a streak for creating entries on consecutive days

## Tech Stack
- Frontend: React Native, Expo
- Backend: [Custom REST API](https://github.com/rileydrellishak/back-end-movemento)
- Database: PostgreSQL on Supabase
- Cloud Storage: Oracle Cloud Infrastructure (OCI) Object Storage

## Dependencies
- Required
  - Node.js
  - Expo CLI
  - Expo Go (iOS or Andriod)
- Main Libraries
  - expo
  - react
  - react-native
  - axios
  - Expo APIs
    - expo-image-picker
    - expo-camera
    - expo-media-library

## Setup Instructions
1. Clone the repository
```
git clone https://github.com/rileydrellishak/front-end-movemento
cd front-end-movemento/movemento
```
2. Install dependencies
```
npm install
```
3. Create a .env file in the root directory and add required environment variables
```
EXPO_PUBLIC_OCI_READ_PAR=read_par_url
```
4. Start the Expo development server
```
npx expo start
```
5. Open the app using Expo Go on your mobile device or emulator.

## Potential Features
- User authentication and accounts.
- Increased usage of movement and mood attributes to allow users to visualize their moods and movements overtime.
- Receive push notifications at a time of the user's choosing to remind them to make their journal entry for the day.
