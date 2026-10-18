# Relay Ops App Demo

A React-based service operations workspace demo built with Vite.

## Requirements

- Node.js 18 or newer
- npm
- A modern browser

Check your environment:

```sh
node --version
npm --version
```

## Install and Run

From this directory, install dependencies and start the development server:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

To build and preview the production app:

```sh
npm run build
npm run preview
```

## Demo Pages

- **Sign in:** The root route redirects to `/login` until you sign in. This is a front-end demo; any valid email and non-empty password work.
- **Overview:** Displays service metrics, recent activity, and incident examples. The **New incident** button opens the service queue.
- **Service queue:** Shows sample incidents with status summaries, search, selection, and filters. Data is in memory and is not saved to a backend.

The app has no API, database, or real authentication. Some controls are representative demo interactions and may show placeholder notifications.

## Project Structure

```text
.
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```
