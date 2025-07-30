# WahyuCare

## Description

WahyuCare is a web application designed to provide a comprehensive and user-friendly platform for a clinic specializing in maternal and child health. The application includes features such as service listings, patient registration, appointment booking, user authentication for administrators and midwives, and an AI-powered pregnancy tip generator.

## Features

- Homepage Greeting: Welcome message and clinic description.
- Service Listing: Details of services offered (KB, pregnancy checks, baby spa, childbirth, etc.).
- Patient Registration Form: Online registration for new patients.
- Appointment Booking Form: Schedule appointments for various services.
- Login Page: Secure access for admins and midwives.
- AI Pregnancy Tip Generator: Provides personalized tips for pregnant mothers.
- Main Navigation: Easy access to Home, Services, Registration, Booking, and Login/Logout.

## Installation

To run WahyuCare locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd WahyuCare
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Set up Firebase:**

    - Make sure you have a Firebase project set up.
    - Update the Firebase configuration in `src/lib/firebaseConfig.js` with your project details:

      ```javascript
      export const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
      };
      ```

5.  **Run the development server:**

    ```bash
    npm run dev
    ```

6.  Open your browser and visit `http://localhost:3000` to see the application.

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Firebase (Authentication, Realtime Database)
- Genkit (for AI features)

## Contributing

If you'd like to contribute to WahyuCare, please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
