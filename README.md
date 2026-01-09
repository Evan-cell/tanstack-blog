# 🌟 Daily Blog

A modern, responsive blogging platform built with **React**, **TanStack Start**, and **Material UI**.  
Users can create, edit, and delete posts, while admins can manage all posts. Includes **dark mode**, **like/bookmark functionality**, and **tags/categories**.  

![Blog Demo](https://picsum.photos/800/300?random=1)  

---

## 🚀 Features

- **Responsive Grid Layout:** 3–4 cards per row depending on screen size  
- **Create, Edit & Delete Posts:** Users manage their own posts; Admins manage all posts  
- **Material UI Cards:** Modern design with hover effects and placeholder images  
- **Dark & Light Mode Toggle:** Seamless theme switching  
- **Like & Bookmark UI:** Interact with posts visually  
- **Tags / Categories:** Each post can have tags displayed  
- **Delete Confirmation Dialog:** Prevent accidental deletions  
- **Mock API Integration:** Uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for demo data  

---

## 📦 Tech Stack

- **React 19** (latest features)  
- **TanStack Start** for routing, loaders, and actions  
- **Material UI** for styling and components  
- **React Context API** for authentication and theme management  
- **Axios** for API requests  

---

## 🖥️ Screenshots

**Home Page (Posts Grid)**  
![Home Page](https://picsum.photos/800/400?random=2)  

**Dashboard (Create/Edit Posts)**  
![Dashboard](https://picsum.photos/800/400?random=3)  

**Dark Mode Enabled**  
![Dark Mode](https://picsum.photos/800/400?random=4)  

---

## 📂 Folder Structure

src/
├── components/
│ ├── BlogCard.jsx
│ ├── PostForm.jsx
│ └── Header.jsx
├── context/
│ ├── AuthContext.jsx
│ └── ThemeContext.jsx
├── pages/
│ ├── Home.jsx
│ └── Dashboard.jsx
├── App.jsx
├── index.js
├── theme.js
└── index.css

yaml
Copy code

---

## ⚡ Getting Started

### 1️⃣ Install Dependencies

```bash
npm install
npm install @mui/material @mui/icons-material axios
2️⃣ Start the Development Server
bash
Copy code
npm start
Open http://localhost:3000 to view the app.
The page reloads automatically on changes.

3️⃣ Available Scripts
Command	Description
npm start	Runs the app in development mode
npm run build	Builds the app for production
npm test	Launches the test runner in watch mode
npm run eject	Ejects the project (one-way operation)

🔧 Features in Detail
📝 Create & Edit Posts
Users can create posts via the Dashboard

Editing updates the post immediately

💾 Delete Confirmation
Posts show a confirmation dialog before deletion

🌙 Dark / Light Mode
Toggle themes from the header

Forms, cards, and backgrounds adapt automatically

❤️ Like & Bookmark
Toggle post interactions visually without backend

🏷️ Tags / Categories
Posts display tags like Tech, AI, or Web

🌐 API
This project uses JSONPlaceholder as a mock backend:

bash
Copy code
GET https://jsonplaceholder.typicode.com/posts?_limit=12
Returns posts with id, title, body, and userId

Allows testing of create, edit, and delete features

📚 Learn More
React Documentation

Material UI Documentation

JSONPlaceholder

TanStack React Router

👨‍💻 Author
Evan Kimani – Full-Stack Developer & Innovator

GitHub

Portfolio

LinkedIn

yaml
Copy code

---

✅ **Instructions to use in VS Code:**

1. Open your project folder in VS Code.  
2. Create a file at the root of your project:  

DailyBlog/
├── README.md ← paste this content here
├── src/
└── package.json

yaml
Copy code


