# 🛡️ Authentication Backend API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge\&logo=express\&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge\&logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge\&logo=JSONwebtokens\&logoColor=white)

**A secure, modern backend for user authentication built with Node.js, Express, and MongoDB.**
Perfect for fullstack applications that require login, registration, and user management.

---

## 🚀 Features

* **User Registration & Login** ✅
* **JWT-Based Authentication** 🔑
* **Password Hashing with bcrypt** 🔒
* **Protected Routes** (Profile, Update Password)
* **Forgot & Reset Password Flow** ✉️
* **Clean Error Handling**

---

## 🛠️ Tech Stack

| Backend           | Database           | Authentication | Security |
| ----------------- | ------------------ | -------------- | -------- |
| Node.js + Express | MongoDB (Mongoose) | JWT            | bcrypt   |

---

## 📁 Project Structure

```
auth-backend/
├── src/
│   ├── config/
│   │   └── db.js             # MongoDB connection
│   ├── app/
│   │   └── app.js             # Express server configuration
│   ├── controller/
│   │   └── auth.controller.js # Auth logic (register, login, password reset)
│   ├── model/
│   │   └── user.model.js           # User schema
│   ├── middlewares /
│   │   └── authenticate.middleware.js           # Authorization
│   ├── router/
│   │   └── auth.js           # Authentication routes
│   └── server.js             # Express app entry point
├── .env                      # Environment variables (DB URI, JWT secret)
└── package.json

```

---

## 🔗 API Routes

| Route                    | Method | Description                            |
| ------------------------ | ------ | -------------------------------------- |
| `/register`              | POST   | Register a new user                    |
| `/login`                 | POST   | Login existing user                    |
| `/profile`               | GET    | Get logged-in user profile (protected) |
| `/update-password`       | PUT    | Update password (protected)            |
| `/forgot-password`       | POST   | Send reset password token via email    |
| `/reset-password/:token` | PUT    | Reset password using token             |

---

## ⚡ Getting Started

1. **Clone the repo**:

```bash
https://github.com/jafiruzzaman/authentication-backend.git
cd authentication-backend
```

2. **Install dependencies**:

```bash
npm install
```

3. **Create `.env` file**:

```
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
```

4. **Run the server**:

```bash
npm run dev
```

5. **Test APIs** with Postman/Insomnia

---

## 📌 Example Requests

**Register**

```
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

**Login**

```
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "123456"
}
```

---

## 🌟 Why This Project?

* Backend-first approach strengthens **DSA and problem-solving skills**
* Secure foundation for any **fullstack app**
* Ready to integrate with **React, Angular, or Vue frontend**
* Great **portfolio project** to show interviewers

---

## 📄 License

MIT License

---
