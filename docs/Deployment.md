# Deployment Guide

This document explains how to deploy the Super Mall App backend and frontend.

## Backend Deployment (Render)

1. **Push your backend code to GitHub.**
2. **Create a new Web Service on [Render](https://render.com/):**
    - Connect your GitHub repository.
    - Set the build and start commands (e.g., `npm install` and `npm start`).
    - Add environment variables as needed.
3. **Deploy and monitor logs for errors.**
4. **Copy the Render service URL** (e.g., `https://your-backend.onrender.com`).

## Frontend Deployment (Netlify)

1. **Push your frontend code to GitHub.**
2. **Go to [Netlify](https://netlify.com/) and create a new site:**
    - Connect your GitHub repository.
    - Set the build command (e.g., `npm run build`) and publish directory (e.g., `build` or `dist`).
    - Add environment variables (e.g., `REACT_APP_API_URL` pointing to your Render backend URL).
3. **Deploy the site.**
4. **Test your deployed frontend.**

---

**Tip:**  
Update CORS settings on your backend to allow requests from your Netlify domain.
