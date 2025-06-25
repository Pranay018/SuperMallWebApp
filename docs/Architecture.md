# Architecture

## Overview

Super Mall App is a full-stack web application for managing shops, products, offers, and locations in a shopping mall. It uses a modular, layered architecture with a clear separation between frontend and backend.

---

## High-Level Architecture

```
+-------------------+        HTTP/REST        +-------------------+        MongoDB        +-------------------+
|    Frontend       |  <------------------->  |     Backend       |  <--------------->   |    Database       |
|  (React + Vite)   |                        | (Express, Node.js)|                      |   (MongoDB)       |
+-------------------+                        +-------------------+                      +-------------------+
```

---

## Components

### 1. Frontend (`/frontend`)
- **Framework:** React (with Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **State Management:** Context API (for authentication)
- **Structure:**
  - `src/pages/` — Page-level components (Home, Login, Register, Dashboard, etc.)
  - `src/components/` — Reusable UI components (Navbar, Sidebar, ProductCard, OfferCard, etc.)
  - `src/layouts/` — Layout wrappers for public, admin, and shop views
  - `src/services/` — API service modules (e.g., `authService.js`)
  - `src/context/` — Context providers (e.g., `AuthContext`)
  - `public/assets/` — Static assets (images, icons)

### 2. Backend (`/backend`)
- **Framework:** Express.js (Node.js)
- **Database:** MongoDB (via Mongoose ODM)
- **Structure:**
  - `server.js` — Entry point, sets up Express app, middleware, and routes
  - `config/` — Database connection config (`db.js`)
  - `controllers/` — Business logic for each resource (auth, shop, product, offer, location)
  - `models/` — Mongoose models for MongoDB collections (User, Shop, Product, Offer, Location)
  - `routes/` — Express routers for API endpoints (authRoutes, shopRoutes, productRoutes, etc.)
  - `middleware/` — Custom middleware (auth, error handling, logging)
  - `utils/` — Utility functions (e.g., JWT token generation)
  - `logs/` — Application logs
  - `.env` — Environment variables (DB URI, JWT secret, etc.)

---

## Data Flow

1. **User Interaction:**  
   Users interact with the React frontend (e.g., register, login, browse shops/products/offers/locations).

2. **API Requests:**  
   The frontend makes HTTP requests to the backend REST API (e.g., `/api/auth/register`, `/api/products`).

3. **Backend Processing:**  
   Express routes receive requests, invoke controllers, interact with MongoDB via Mongoose models, and return JSON responses.

4. **Authentication:**  
   JWT-based authentication is used. Protected routes require a valid token.

5. **Frontend State:**  
   Auth state is managed via Context API and persisted in `localStorage`.

---

## Deployment

- **Frontend:** Can be deployed on Netlify, Vercel, or similar static hosting.
- **Backend:** Can be deployed on Render, Heroku, or any Node.js-compatible server.
- **Database:** MongoDB Atlas or self-hosted MongoDB.

---

## Extensibility

- Add new resources by creating new models, controllers, and routes.
- Add new frontend pages and components as needed.
- Easily integrate third-party services (e.g., payment, notifications).

---

## Security

- Passwords are hashed before storage.
- JWT tokens are used for authentication.
- CORS is enabled and configurable.

---

## References

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

*For detailed API and flow, see `LLD.md` and `ExecutionFlow.md`.*