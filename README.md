# AnyBlog 📝

### A Full-Stack MERN Blogging Platform

![License](https://img.shields.io/github/license/sanirukumarapeli/ANYBLOG?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/sanirukumarapeli/ANYBLOG?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/sanirukumarapeli/ANYBLOG?style=for-the-badge)
![Repo Size](https://img.shields.io/github/repo-size/sanirukumarapeli/ANYBLOG?style=for-the-badge)

![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Build-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Framework-Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

---

## 📖 About

**AnyBlog** is a full-stack blogging platform built using the **MERN stack** (MongoDB, Express, React, Node.js).

It features a modern admin dashboard for managing blog posts and comments, AI-powered content generation using Google Gemini, and image uploads via ImageKit.

This project is designed as a **real-world full-stack application** and is ideal for portfolio and learning purposes.

---

## ✨ Features

- 🔐 **Admin Authentication** - Secure JWT-based login
- 📝 **Blog Management** - Create, edit, publish/unpublish, and delete posts
- 💬 **Comment System** - Users can comment, admins can approve/delete
- 🤖 **AI Content Generation** - Generate blog content using Google Gemini AI
- 🖼️ **Image Uploads** - Upload and manage images via ImageKit
- 📊 **Admin Dashboard** - Overview of blogs, comments, and statistics
- 🌐 **RESTful API** - Clean API architecture
- ⚛️ **Modern React Frontend** - Built with Vite and Tailwind CSS
- 📱 **Responsive Design** - Works on all devices

---

## 🛠️ Tech Stack

| Layer        | Technologies                               |
| ------------ | ------------------------------------------ |
| **Frontend** | React 19, Vite, Tailwind CSS, React Router |
| **Backend**  | Node.js, Express 5                         |
| **Database** | MongoDB, Mongoose                          |
| **Auth**     | JWT (JSON Web Tokens)                      |
| **AI**       | Google Gemini AI                           |
| **Storage**  | ImageKit                                   |
| **Editor**   | Quill Rich Text Editor                     |
| **Styling**  | Tailwind CSS, Motion (animations)          |

---

## 📂 Project Structure

```
ANYBLOG/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context
│   │   └── assets/         # Static assets
│   ├── vercel.json         # Vercel deployment config
│   └── package.json
│
├── server/                 # Node.js backend
│   ├── configs/            # Database, ImageKit, Gemini configs
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Auth & file upload middleware
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── vercel.json         # Vercel deployment config
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- [ImageKit](https://imagekit.io/) account
- [Google AI Studio](https://aistudio.google.com/) API key

### Installation

```bash
# Clone the repository
git clone https://github.com/sanirukumarapeli/ANYBLOG.git
cd ANYBLOG
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory (see `.env.example`):

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id
GEMINI_API_KEY=your_gemini_api_key
```

Start the backend server:

```bash
npm run server    # Development with nodemon
# or
npm start         # Production
```

### Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file in the `client` directory:

```env
VITE_BASE_URL=http://localhost:3000
```

Start the frontend:

```bash
npm run dev
```

| Service  | URL                   |
| -------- | --------------------- |
| Frontend | http://localhost:5173 |
| Backend  | http://localhost:3000 |

---

## 📡 API Endpoints

### Admin Routes (`/api/admin`)

| Method | Endpoint           | Description           | Auth |
| ------ | ------------------ | --------------------- | ---- |
| POST   | `/login`           | Admin login           | ❌   |
| GET    | `/blogs`           | Get all blogs (admin) | ✅   |
| GET    | `/comments`        | Get all comments      | ✅   |
| GET    | `/dashboard`       | Get dashboard stats   | ✅   |
| POST   | `/delete-comment`  | Delete a comment      | ✅   |
| POST   | `/approve-comment` | Approve a comment     | ✅   |

### Blog Routes (`/api/blog`)

| Method | Endpoint          | Description             | Auth |
| ------ | ----------------- | ----------------------- | ---- |
| GET    | `/all`            | Get all published blogs | ❌   |
| GET    | `/:blogId`        | Get blog by ID          | ❌   |
| POST   | `/add`            | Create a new blog       | ✅   |
| POST   | `/delete`         | Delete a blog           | ✅   |
| POST   | `/toggle-publish` | Toggle publish status   | ✅   |
| POST   | `/add-comment`    | Add comment to blog     | ❌   |
| POST   | `/comments`       | Get blog comments       | ❌   |
| POST   | `/generate`       | AI generate content     | ✅   |

---

## 🚀 Deployment

This project is configured for **Vercel** deployment.

### Deploy Frontend

1. Import `client` folder to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variable: `VITE_BASE_URL`

### Deploy Backend

1. Import `server` folder to Vercel
2. Add all environment variables from `.env.example`

---

## 🔐 Security

- ✅ JWT-based authentication for admin routes
- ✅ Protected API endpoints with auth middleware
- ✅ Environment variables for sensitive data
- ✅ CORS enabled for cross-origin requests

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Saniru Dewmina**

[![GitHub](https://img.shields.io/badge/GitHub-sanirukumarapeli-181717?style=for-the-badge&logo=github)](https://github.com/sanirukumarapeli)

---

<p align="center">
  Made with ❤️ using the MERN Stack
</p>
