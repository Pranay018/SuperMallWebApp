# Super Mall App

A full-stack web application for managing a shopping mall's shops, products, offers, and locations.

---

## Features

- User authentication (Admin & Shop Owner roles)
- Shop, Product, Offer, and Location management
- RESTful API backend (Express, MongoDB)
- Modern React frontend with Tailwind CSS
- Responsive UI for dashboard and public pages

---

## Project Structure

```
Super-Mall-App/
  backend/    # Express.js API, MongoDB models, controllers, routes
  frontend/   # React app, Tailwind CSS, Vite
  docs/       # Architecture, LLD, deployment, and flow docs
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB database (local or Atlas)

### Backend Setup

```sh
cd backend
npm install
cp .env.example .env   # Edit .env with your MongoDB URI and JWT secret
npm run dev            # Start backend server (nodemon)
```

### Frontend Setup

```sh
cd frontend
npm install
npm run dev            # Start frontend (Vite)
```

Visit [http://localhost:5173](http://localhost:5173) (or the port shown) in your browser.

---

## API Endpoints

- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/products` - List products
- `GET /api/shops` - List shops
- `GET /api/offers` - List offers
- `GET /api/locations` - List locations

See [docs/LLd.md](docs/LLd.md) for more details.

---

## Deployment

- Backend: Deploy to [Render](https://render.com/)
- Frontend: Deploy to [Netlify](https://netlify.com/)

See [docs/Deployment.md](docs/Deployment.md) for step-by-step instructions.

---

## Documentation

- [Architecture](docs/Architecture.md)
- [Low Level Design](docs/LLd.md)
- [Execution Flow](docs/ExecutionFlow.md)
- [Deployment Guide](docs/Deployment.md)

---

## License

MIT

---