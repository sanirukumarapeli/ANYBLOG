# AnyBlog 📝
### A Full-Stack MERN Blogging Platform

![License](https://img.shields.io/github/license/sanirukumarapeli/ANYBLOG?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/sanirukumarapeli/ANYBLOG?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/sanirukumarapeli/ANYBLOG?style=for-the-badge)
![Repo Size](https://img.shields.io/github/repo-size/sanirukumarapeli/ANYBLOG?style=for-the-badge)

![React](https://img.shields.io/badge/Frontend-React-blue?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?style=for-the-badge)
![JWT](https://img.shields.io/badge/Auth-JWT-orange?style=for-the-badge)

---

## 📖 About

**AnyBlog** is a full-stack blogging platform built using the **MERN stack** (MongoDB, Express, React, Node.js).  
It allows users to securely authenticate and create, read, update, and delete blog posts through a RESTful API.

This project is designed as a **real-world full-stack application** and is ideal for portfolio and learning purposes.

---

## ✨ Features

- 🔐 User Authentication (JWT)
- 📝 Create, edit, and delete blog posts
- 📖 Public blog feed
- 🔒 Protected routes
- 🌐 RESTful API architecture
- ⚛ Modern React frontend
- 📁 Clean and scalable project structure

---

## 🛠 Tech Stack

### Frontend
- React
- Axios / Fetch API
- CSS / Tailwind (if applicable)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt

---

## 📂 Project Structure

ANYBLOG/
│── client/ # React frontend
│── server/ # Node.js + Express backend
│── README.md

yaml
Copy code

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/sanirukumarapeli/ANYBLOG.git
cd ANYBLOG
⚙️ Environment Variables
Create a .env file inside the server directory:

env
Copy code
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
(Optional) Frontend .env file:

env
Copy code
REACT_APP_API_URL=http://localhost:5000/api
▶️ Running the Project
Start Backend Server
bash
Copy code
cd server
npm install
npm run dev
Start Frontend Application
bash
Copy code
cd client
npm install
npm start
Frontend: http://localhost:3000

Backend: http://localhost:5000

📡 API Overview
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
GET	/api/posts	Get all blog posts
POST	/api/posts	Create a new post
PUT	/api/posts/:id	Update a post
DELETE	/api/posts/:id	Delete a post

🔐 Security
Passwords hashed using bcrypt

Authentication via JWT

Protected routes for authorized users

Secrets stored using environment variables

🚧 Future Improvements
💬 Comment system

❤️ Likes and reactions

🖼 Image uploads

✍ Rich text editor

👤 User profiles

🛡 Admin dashboard

📄 License
This project is licensed under the MIT License.

👤 Author
Saniru Dewmina
GitHub: https://github.com/sanirukumarapeli
