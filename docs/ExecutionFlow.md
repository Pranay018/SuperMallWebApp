# Execution Flow

This document describes the typical execution flow for key user actions in the Super Mall App, covering both frontend (React) and backend (Express/MongoDB) processes.

---

## 1. User Registration

**Frontend:**
- User fills out the registration form (`/register` page) and submits.
- `authService.register(userData)` sends a POST request to `/api/auth/register`.
- On success, user info and JWT token are saved to `localStorage` and context; user is redirected to the dashboard.

**Backend:**
- `POST /api/auth/register` is handled by `registerUser` in `authController.js`.
- Checks if the user already exists.
- Hashes the password and creates a new user in MongoDB.
- Returns user info and a JWT token.

---

## 2. User Login

**Frontend:**
- User submits login form (`/login` page).
- `authService.login(email, password)` sends a POST request to `/api/auth/login`.
- On success, user info and JWT token are saved to `localStorage` and context; user is redirected to the dashboard.

**Backend:**
- `POST /api/auth/login` is handled by `loginUser` in `authController.js`.
- Verifies user credentials.
- Returns user info and a JWT token.

---

## 3. Protected Route Access

**Frontend:**
- Protected routes (e.g., `/dashboard`) use `ProtectedRoute` component.
- Checks authentication status from context/localStorage.
- If not authenticated, redirects to `/login`.

**Backend:**
- Protected API endpoints use `protect` middleware (`authMiddleware.js`).
- Verifies JWT token from the `Authorization` header.
- If valid, attaches user info to `req.user` and allows access.

---

## 4. Fetching Shops, Products, Offers, Locations

**Frontend:**
- Pages like `/shops`, `/products`, `/offers`, `/locations` use `useEffect` to fetch data from respective endpoints (e.g., `/api/shops`).
- Data is displayed using components like `ShopCard`, `ProductCard`, `OfferCard`.

**Backend:**
- GET requests are routed to respective controllers (`shopController.js`, `productController.js`, etc.).
- Controllers fetch data from MongoDB and return as JSON.

---

## 5. Creating/Updating/Deleting Resources (Admin/Shop Owner)

**Frontend:**
- Admin/Shop Owner uses dashboard forms to create or edit shops, products, offers, or locations.
- Sends POST/PUT/DELETE requests to protected endpoints (e.g., `/api/products`).

**Backend:**
- Protected routes use `protect` (and optionally role-based) middleware.
- Controllers handle creation, update, or deletion in MongoDB.
- Returns updated resource or status.

---

## 6. Logout

**Frontend:**
- User clicks logout.
- `authService.logout()` removes user info from `localStorage` and context.
- User is redirected to `/login`.

---

## 7. Error Handling

**Frontend:**
- API errors are caught and displayed as messages in forms or pages.

**Backend:**
- Uses `errorHandler` middleware to send consistent error responses.

---

## 8. Static Assets

- Images and static files are served from `frontend/public/assets/`.
- Backgrounds and illustrations are referenced in page components.

---

## 9. Application Bootstrapping

**Frontend:**
- `main.jsx` wraps the app with `BrowserRouter` and `AuthProvider`.
- Loads global styles and renders the root component.

**Backend:**
- `server.js` loads environment variables, connects to MongoDB, sets up middleware and routes, and starts the Express server.

---

## 10. Deployment

- Frontend is built and deployed as static files (e.g., Netlify).
- Backend is deployed to a Node.js server (e.g., Render).
- Environment variables are set for production.

---

**See also:**  
- [Architecture.md](Architecture.md)  
- [LLD.md](LLD.md)