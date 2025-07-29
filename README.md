Sure, Mohit! Here's a complete and professional `README.md` file for your **Mohit's AI Chat App** — styled for GitHub, deploy-ready, and covering everything from setup to features.

---

### ✅ `README.md`

```markdown
# Mohit's AI 💬

**Mohit's AI** is a full-stack, responsive chat application where users can sign up, log in, and have interactive AI-powered conversations. The app includes session-based chat history, authentication, and clean UI built with modern technologies like React, Tailwind CSS, and Node.js.

---

## 🚀 Features

- 🔐 User Authentication (Login / Signup)
- 🧠 AI-Powered Chat Interface (OpenRouter / LLM API ready)
- 📜 Persistent Chat History (stored in localStorage)
- 🖥️ Responsive UI with Sidebar for chat navigation
- 📦 Fully functional backend integration via REST API
- 🧹 Logout & session cleanup

---

## 🖼️ Demo

> [🔗 Live Demo](https://mohits-ai.vercel.app)

---

## 🛠️ Tech Stack

### Frontend
- **React**
- **React Router DOM**
- **Tailwind CSS**
- **Lucide Icons**
- **Axios**

### Backend (assumed based on API usage)
- **Node.js / Express**
- **MongoDB / Mongoose**
- **JWT Auth & Cookies**

---

## 📁 Project Structure

```

Mohits-AI/
├── public/
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Home.jsx
│   │   ├── Sidebar.jsx
│   │   └── Chat.jsx
│   ├── context/
│   │   └── AuthContext.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── README.md

````

---

## 🧩 Setup Instructions

### 1. **Clone the Repository**

```bash
git clone https://github.com/mohitbhatt-dev/mohits-ai-generator.git
cd mohits-ai-generator
````

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Start the React App**

```bash
npm run dev
```

> ⚠️ Make sure your backend is running on `http://localhost:4002` as expected in the login API.

---

## 🔌 Environment Variables

No `.env` is required for frontend unless using `.env` for your API URL.

---

## 🧠 Backend API Routes Used

| Method | Endpoint              | Description       |
| ------ | --------------------- | ----------------- |
| POST   | `/api/v1/user/login`  | User Login        |
| POST   | `/api/v1/user/signup` | User Registration |
| GET    | `/api/v1/user/logout` | Logout            |

---

## 📦 LocalStorage Usage

* `user`: Logged-in user info
* `token`: Auth token
* `chatHistory`: Array of chat sessions

---

## ✅ TODO (Improvements)

* [ ] Integrate real-time OpenRouter API or LLM
* [ ] Store chat history in backend instead of localStorage
* [ ] Add message-level persistence
* [ ] Support chat renaming and deletion

---

## 📸 Screenshots

| Login Page                                         | Chat Dashboard                                   |
| -------------------------------------------------- | ------------------------------------------------ |


---

## 👨‍💻 Author

Made with ❤️ by **Mohit Bhatt**
[GitHub](https://github.com/mohitbhatt-dev) | [Portfolio](https://mohitbhatt.dev) *(if you have one)*

---

## 📄 License

This project is open-source and free to use for educational purposes.

```

---

