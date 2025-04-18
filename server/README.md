
# Portfolio Contact Server

This is a Node.js server for handling contact form submissions from the portfolio website.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the server directory with the following content:
   ```
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   PORT=5000
   ```

   **Note:** If using Gmail, you'll need to generate an App Password:
   - Go to your Google Account > Security > 2-Step Verification
   - Scroll down and click on "App passwords"
   - Select "Mail" and "Other" (Name it "Portfolio Contact")
   - Copy the generated password to your .env file

3. Start the server:
   ```
   npm start
   ```

## API Endpoints

- **POST /api/contact** - Sends emails based on contact form submissions
  - Requires: `name`, `email`, `subject`, `message` in the request body
  - Returns: `{ success: true, message: 'Message sent successfully!' }` on success

## Development

For development with auto-restart:
```
npm run dev
```
