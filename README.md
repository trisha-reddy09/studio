# WAYN: We Are Your Neighbours

This is a community-based carpooling application built with Next.js, React, Tailwind CSS, and Genkit for AI-powered features.

## Getting Started with VS Code

To run this project on your local machine using Visual Studio Code, follow these steps.

### Prerequisites

- [Node.js](https://nodejs.org/en) (Version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- A Google AI Gemini API Key. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### 1. Set Up Your Environment Variables

The AI features in this app require a Google AI Gemini API key.

- In the root of your project, you'll find a file named `.env`.
- Open it and add your Gemini API key like this:

```
GEMINI_API_KEY=YOUR_API_KEY_HERE
```

Replace `YOUR_API_KEY_HERE` with your actual key.

### 2. Install Dependencies

Open the integrated terminal in VS Code (**View -> Terminal**) and run the following command to install all the necessary packages for the project:

```bash
npm install
```

### 3. Run the Development Servers

You need to run two separate processes in two different terminals for the app to work correctly.

**Terminal 1: Start the Next.js Frontend**

This command starts the main web application.

```bash
npm run dev
```

**Terminal 2: Start the Genkit AI Backend**

This command starts the AI service that provides route recommendations.

```bash
npm run genkit:dev
```

You can open a second terminal in VS Code by clicking the "+" icon in the terminal panel.

### 4. View Your Application

Once the `npm run dev` command has finished, it will show you a URL, typically `http://localhost:9002`. Open this link in your web browser to see and interact with your running application.
