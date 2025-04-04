# Farm2Fashion

A React Native mobile application that connects farmers with fashion designers.

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Xcode (for iOS development)
- Android Studio (for Android development)
- CocoaPods (for iOS development)

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd Farm2Fashion
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install iOS dependencies (iOS only):
```bash
cd ios
bundle install
bundle exec pod install
cd ..
```

### Running the App

#### iOS
```bash
npx react-native run-ios
# or
cd ios
xed -b ios
```

#### Android
```bash
npx react-native run-android
```

## Project Structure

```
Farm2Fashion/
├── android/          # Android native code
├── ios/             # iOS native code
├── src/             # React Native source code
│   ├── components/  # Reusable components
│   ├── screens/     # Screen components
│   ├── navigation/  # Navigation configuration
│   ├── services/    # API and other services
│   └── utils/       # Utility functions
└── App.tsx          # Root component
```

## Contributing

1. Create your feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add some amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 