# Learning Management System

## Overview

This repository contains a full-stack Learning Management System with separate frontend, admin, and backend applications.

- `backend`: Express API with MongoDB, Clerk authentication middleware, Stripe payment integration, and file upload support.
- `frontend`: Public user experience for browsing courses, booking classes, viewing enrolled courses, and rating content.
- `admin`: Admin dashboard for managing courses, viewing bookings, and checking analytics.

## Tech Stack

- Backend: `Node.js`, `Express`, `MongoDB`, `Mongoose`, `Clerk`, `Stripe`, `multer`
- Frontend / Admin: `React`, `Vite`, `Tailwind CSS`, `React Router`, `Clerk`, `React Hot Toast`, `React Toastify`

## Key Features

- Course catalog with public and top-course filters
- Course detail pages with structured lecture and chapter data
- Image upload and course creation via admin panel
- Booking system with free enrollment and Stripe checkout for paid courses
- Payment confirmation and booking status management
- Clerk authentication for user sessions and secure API authorization
- Ratings and comments per course
- Admin dashboard with booking and revenue statistics
- File uploads served from `/uploads`

## Repository Structure

- `backend/`
  - `server.js`: Express server setup and middleware
  - `config/db.js`: MongoDB connection
  - `controllers/`: Course and booking API logic
  - `models/`: Mongoose schemas for Course and Booking
  - `routes/`: API router definitions
  - `uploads/`: Static storage for course images
- `frontend/`
  - React app for students and course discovery
- `admin/`
  - React admin app for course and booking management

## Environment Setup

### Backend

Create a `.env` file inside `backend/` with:

```env
MONGODB=<your-mongodb-connection-string>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
FRONTEND_URL=http://localhost:5173
```

### Frontend and Admin

Each frontend app can use a `.env` file at the project root (`frontend/.env`, `admin/.env`):

```env
VITE_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
VITE_API_BASE=https://learning-management-system-3-llud.onrender.com
```

- `VITE_CLERK_PUBLISHABLE_KEY` is required for Clerk authentication.
- `VITE_API_BASE` points the React apps at the deployed backend API.

## Running Locally

### 1. Backend

```bash
cd backend
npm install
npm run dev
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Admin

```bash
cd admin
npm install
npm run dev
```

## API Endpoints

### Course API

- `GET /api/course/public` - public courses
- `GET /api/course` - all courses
- `GET /api/course/:id` - single course by ID
- `POST /api/course` - create course with image upload
- `DELETE /api/course/:id` - delete course
- `POST /api/course/:courseId/rate` - submit course rating
- `GET /api/course/:courseId/my-rating` - get current user rating

### Booking API

- `POST /api/booking/create` - create a booking / Stripe checkout session
- `GET /api/booking/check` - check existing booking/enrollment
- `GET /api/booking/confirm` - confirm Stripe payment
- `GET /api/booking/my` - fetch current user bookings
- `GET /api/booking` - admin booking list with search/pagination
- `GET /api/booking/stats` - admin booking and revenue metrics

## Deployment

- Backend is deployable on platforms like Render or Heroku.
- Frontend and admin apps are Vite apps and can be deployed to Netlify, Vercel, or similar.
- Ensure `VITE_API_BASE` is set to the deployed backend URL.

## Notes

- The backend CORS config allows `http://localhost:5173`, `http://localhost:5174`, and the configured `FRONTEND_URL`.
- Uploaded course images are served from the `uploads` folder.
- The backend uses Clerk middleware to validate user identity before protected bookings and ratings.

## Contact

For setup questions or extension ideas, use this repository as the foundation for a modern LMS implementation.
