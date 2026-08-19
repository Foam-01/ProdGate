# ProdGate 🛡️📋

A modern **React + Vite** web application designed for production gate checklists, AI code review prompts, and maintainability guidelines for software engineers and development teams.

---

## 🌟 Overview

**ProdGate** equips developers with a comprehensive **41-point Production Gate & Code Review Checklist** formatted as ready-to-use AI prompts. Whether you are conducting manual code reviews or leveraging AI pair programmers (e.g., Gemini, Claude, ChatGPT), ProdGate ensures your software meets high production standards before deployment.

---

## ✨ Key Features

- 📋 **41 Master Review Checklist Cards**: Complete review dimensions covering UX, Security, Database, Architecture, Performance, Observability, Scalability, Disaster Recovery, Cost Optimization, ADR, and Production Readiness.
- 🎯 **Senior Developer AI Prompts**: Formatted prompts engineered to guide AI tools to *analyze first, propose solutions, request approval, and summarize changes*.
- ⚙️ **Master Rules (24 ข้อ)**: Core principles ensuring AI assistants preserve business logic, avoid unauthorized refactoring, and identify root causes.
- 🎛️ **Interactive Modal & One-Click Copy**: Inspect card details, toggle rule attachment on/off, and copy prompts directly to your clipboard.
- ⚡ **Fast & Lightweight**: Built with **React 18** and **Vite** for instantaneous loading and seamless interactivity.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS3 (Modern Glassmorphism, Responsive Grid, Smooth Micro-animations)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher) installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Foam-01/ProdGate.git
   cd ProdGate
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   Open your browser at `http://localhost:5173` (or the port specified in terminal).

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Runs the app in development mode |
| `npm run dev -- --port 3002` | Runs the app specifically on port 3002 |
| `npm run build` | Builds the application for production to `dist/` |
| `npm run preview` | Previews the production build locally |

---

## 📁 Project Structure

```text
ProdGate/
├── src/
│   ├── components/
│   │   ├── CardItem.jsx        # Individual Review Card Component
│   │   └── DetailModal.jsx     # Detail Modal with Copy Prompt functionality
│   ├── data/
│   │   └── checklistData.js    # Master Dataset (41 Review Cards + 24 Master Rules)
│   ├── App.jsx                 # Main Application Container & Grid View
│   ├── index.css               # Global Styles & Theme Variables
│   └── main.jsx                # Application Entry Point
├── index.html                  # HTML Template
├── package.json                # Project Dependencies & Scripts
├── vite.config.js              # Vite Configuration
└── README.md                   # Project Documentation
```

---

## 📄 License

This project is open source and available under the **MIT License**.
