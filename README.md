# InvoiceFlow (React Native)

This is a React Native application for intelligent invoice management using OCR and AI features.

## Core Features:

- Document Upload: Allow users to upload invoice (Devis/Bon de commande) documents (PDF/Image).
- Intelligent Data Extraction: Use OCR and AI (potentially via a backend service) to extract key information like invoice number, dates, amounts, and vendor details.
- Data Presentation and Editing: Display the extracted invoice data in a user-friendly format within the mobile app. Allow users to edit and confirm the extracted information.

## Getting Started

**Prerequisites:**

*   Node.js (LTS version recommended)
*   npm or Yarn
*   React Native development environment setup (follow the [official React Native guide](https://reactnative.dev/docs/environment-setup))
*   Xcode (for iOS development)
*   Android Studio (for Android development)

**Installation:**

1.  Clone the repository:
    ```bash
    git clone https://github.com/iluvumua/proja.git
    cd proja
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Install iOS pods:
    ```bash
    cd ios && pod install && cd ..
    ```

**Running the App:**

*   **For iOS:**
    ```bash
    npm run ios
    # or
    yarn ios
    ```
*   **For Android:**
    ```bash
    npm run android
    # or
    yarn android
    ```
*   **Start Metro Bundler (if needed separately):**
    ```bash
    npm start
    # or
    yarn start
    ```

## Tech Stack

*   React Native
*   TypeScript
*   React Navigation (for routing)
*   (Potential Backend: Node.js, MongoDB for OCR/AI processing and data storage)

<!-- Acknowledged request to stop automatic error checking. -->
