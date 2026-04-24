# Student Team Members Management System

A full-stack MERN web application to manage student team members with a modern glassmorphism UI.

## Features

- Add new team members with image upload and preview
- View all members in a responsive card grid
- View individual member details
- Graceful loading, empty states, error alerts, and success toast
- Responsive UI for mobile, tablet, and desktop

## Tech Stack

- Frontend: React, React Router DOM, Axios
- Backend: Node.js, Express.js, MongoDB (Mongoose), Multer, CORS

## Project Structure

```
frontend/
backend/
.gitignore
README.md
```

## Backend Structure

```
backend/
├── controllers/
├── models/
├── routes/
├── uploads/
└── server.js
```

## Frontend Structure

```
frontend/src/
├── components/
├── pages/
├── services/
├── App.js
└── index.js
```

## Installation

### 1. Clone repository

```bash
git clone <your-public-repo-url>
cd <repo-folder>
```

### 2. Setup backend

```bash
cd backend
npm install
copy .env.example .env
```

Update `backend/.env` with your MongoDB connection string if needed:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/student_team_members
```

### 3. Setup frontend

```bash
cd ../frontend
npm install
copy .env.example .env
```

Optionally edit `frontend/.env`:

```
REACT_APP_API_URL=http://localhost:5000/api
```

## Run the Application

### Start backend

```bash
cd backend
npm run dev
```

### Start frontend

```bash
cd frontend
npm start
```

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## API Endpoints

### 1. Add member

- Method: `POST`
- URL: `/api/members`
- Content-Type: `multipart/form-data`
- Fields:
  - `name` (string, required)
  - `role` (string, required)
  - `email` (string, required)
  - `contact` (string, required)
  - `additionalDetails` (string, optional)
  - `image` (file, optional)

### 2. Get all members

- Method: `GET`
- URL: `/api/members`

### 3. Get member by id

- Method: `GET`
- URL: `/api/members/:id`

## Testing APIs

Use browser/Postman to test:

- `GET http://localhost:5000/api/members`
- `GET http://localhost:5000/api/members/:id`

## UI/UX Notes

- Color system follows project brief
- Glassmorphism cards and gradient accents
- Animated background orbs and SVG-like grid overlay
- Clean typography, subtle transitions, and soft shadows

## GitHub Submission Checklist

- [ ] Create a public repository (team name)
- [ ] Push full code: `frontend/`, `backend/`, `.gitignore`, `README.md`
- [ ] Verify setup instructions work on clean clone
