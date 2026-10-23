# 🤖 React AI ChatBot

An interactive, responsive chat application built with **React 19**, **Vite**, and styled with clean, modular CSS. Features automated conversational responses, animated typing indicators, custom avatars, auto-scrolling, and timestamping.

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🌟 Live Demo

> 🔗 **Live Application:** [https://chatbot-project-livid.vercel.app](https://chatbot-project-livid.vercel.app)

---

## ✨ Features

- 💬 **Dynamic Chat Flow:** Send and receive conversational messages with automated intelligent replies.
- ⏳ **Loading State & Feedback:** Realistic loading spinner animations while waiting for bot responses.
- 📜 **Smart Auto-Scroll:** Custom `useAutoScroll` hook automatically scrolls the chat window to the newest message.
- 🕒 **Timestamp Integration:** Accurately formatted message delivery times powered by `dayjs`.
- ⌨️ **Keyboard Accessibility:** Press `Enter` to instantly send messages and `Escape` to clear inputs.
- 🎨 **Clean & Responsive UI:** Optimized layout with intuitive chat bubbles and distinct user/bot avatars.

---

## 🛠️ Tech Stack

- **Frontend Library:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **SDK:** [supersimpledev](https://www.npmjs.com/package/supersimpledev)
- **Utilities:** [Day.js](https://day.js.org/) for date and time formatting
- **Styling:** Modular CSS

---

## 📁 Project Structure

```
chatbot-project/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Avatars (robot, user), icons, and loaders
│   ├── components/         # Modular UI components
│   │   ├── ChatInput.jsx   # Message input bar and submit handling
│   │   ├── ChatMessage.jsx # Individual chat bubble with avatar & timestamp
│   │   ├── ChatMessages.jsx# Scrollable chat feed container
│   │   ├── Time.jsx        # Formatted timestamp component
│   │   └── Welcome.jsx     # Hero onboarding banner for new chats
│   ├── hooks/
│   │   └── useAutoScroll.jsx # Custom hook for automatic viewport scrolling
│   ├── App.jsx             # Root application orchestrator
│   ├── App.css
│   ├── main.jsx            # React root mount
│   └── index.css           # Global typography and base styles
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` (comes bundled with Node.js)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/agra-ankit/chatbot-project.git
   cd chatbot-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 📝 License

This project is licensed under the MIT License.
