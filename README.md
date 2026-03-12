# QuickHire - Job Board Platform

<div align="center">

![QuickHire Banner](https://img.shields.io/badge/QuickHire-Job%20Board-4540DB?style=for-the-badge)
![Status](https://img.shields.io/badge/status-production%20ready-success?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

**A modern, full-stack job board application connecting talent with opportunity**

[🌐 Live Demo](https://quick-hire-client-kappa.vercel.app/) · [💻 Frontend Repo](https://github.com/Jabirmahmud0/quickHire_client) · [⚙️ Backend Repo](https://github.com/Jabirmahmud0/quickHire_server)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Live Links](#-live-links)
- [Getting Started](#-getting-started)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Future Enhancements](#-future-enhancements)
- [Author](#-author)

---

## 🎯 Overview

QuickHire is a comprehensive job board platform that streamlines the connection between job seekers and employers. Built with modern web technologies, it offers a seamless experience for browsing, searching, and applying to jobs, while providing employers with powerful tools to manage their listings and applications.

### Key Highlights

- **🚀 Fast & Responsive** - Built with Vite for lightning-fast development and production builds
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop experiences
- **🔍 Advanced Search** - Filter jobs by keyword, location, and category
- **🏢 Company Browse** - Explore companies and their open positions
- **📊 Admin Dashboard** - Manage jobs and track applications
- **🎨 Modern UI** - Clean, professional design with Tailwind CSS

---

## ✨ Features

### For Job Seekers

| Feature | Description |
|---------|-------------|
| 🔍 **Smart Search** | Search jobs by title, keyword, or company name |
| 📍 **Location Filters** | Filter by remote, hybrid, or specific locations |
| 🏷️ **Category Browse** | Explore jobs by department (Tech, Design, Marketing, etc.) |
| 📄 **Detailed Listings** | View comprehensive job descriptions and requirements |
| 📤 **Easy Apply** | Submit applications with resume link and cover note |
| 🏢 **Company Explorer** | Discover companies and their open positions |

### For Employers (Admin)

| Feature | Description |
|---------|-------------|
| 📊 **Dashboard** | Overview of all job listings and applications |
| ➕ **Post Jobs** | Create detailed job listings with custom fields |
| ✏️ **Edit Listings** | Update job details in real-time |
| 🗑️ **Manage Jobs** | Delete or archive filled positions |
| 📥 **Track Applications** | View and manage candidate submissions |
| 👥 **Applicant Management** | Review resumes and contact information |

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Framework |
| **Vite** | Build Tool & Dev Server |
| **React Router DOM** | Client-side Routing |
| **Tailwind CSS 4** | Styling & Design System |
| **Axios** | HTTP Client |
| **Lucide React** | Icon Library |
| **React Icons** | Additional Icons |

### Backend

| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime Environment |
| **Express.js** | Web Framework |
| **MongoDB** | Database |
| **Mongoose** | ODM for MongoDB |
| **Express Validator** | Input Validation |
| **CORS** | Cross-Origin Resource Sharing |
| **dotenv** | Environment Configuration |

### Infrastructure

| Service | Purpose |
|---------|---------|
| **Vercel** | Frontend Hosting & CI/CD |
| **Render** | Backend Hosting |
| **MongoDB Atlas** | Cloud Database |
| **GitHub** | Version Control & Repository |

---

## 🔗 Live Links

| Component | URL | Repository |
|-----------|-----|------------|
| **Frontend** | [🌐 quick-hire-client-kappa.vercel.app](https://quick-hire-client-kappa.vercel.app/) | [GitHub](https://github.com/Jabirmahmud0/quickHire_client) |
| **Backend API** | [⚙️ quickhire-server-zjzw.onrender.com](https://quickhire-server-zjzw.onrender.com/api) | [GitHub](https://github.com/Jabirmahmud0/quickHire_server) |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **MongoDB Atlas** account - [Get Started](https://www.mongodb.com/cloud/atlas)
- **Git** - Version control

### Local Development Setup

#### 1. Clone the Repositories

```bash
# Clone Frontend
git clone https://github.com/Jabirmahmud0/quickHire_client.git
cd quickHire_client

# Clone Backend (in a separate terminal/location)
git clone https://github.com/Jabirmahmud0/quickHire_server.git
cd quickHire_server
```

#### 2. Install Dependencies

**Frontend:**
```bash
cd quickHire_client
npm install
```

**Backend:**
```bash
cd quickHire_server
npm install
```

#### 3. Configure Environment Variables

**Backend (.env):**
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=https://quick-hire-client-kappa.vercel.app
```

**Frontend (.env):**
```env
VITE_API_URL=https://quickhire-server-zjzw.onrender.com/api
```

#### 4. Seed the Database (Optional)

```bash
cd quickHire_server
node seed.js
```

#### 5. Run the Application

**Start Backend:**
```bash
cd quickHire_server
npm run dev
# Server runs on http://localhost:5000
```

**Start Frontend (new terminal):**
```bash
cd quickHire_client
npm run dev
# Frontend runs on http://localhost:5173
```

---

## 📚 API Documentation

### Base URL
```
https://quickhire-server-zjzw.onrender.com/api
```

### Jobs Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| `GET` | `/jobs` | Get all jobs | - | Array of jobs |
| `GET` | `/jobs/:id` | Get job by ID | - | Job object |
| `GET` | `/jobs?search=X&category=Y&location=Z` | Filter jobs | - | Filtered jobs |
| `POST` | `/jobs` | Create job | `{title, company, location, category, description, type, tags}` | Created job |
| `DELETE` | `/jobs/:id` | Delete job | - | Success message |

### Applications Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| `GET` | `/applications` | Get all applications | - | Array of applications |
| `POST` | `/applications` | Submit application | `{job_id, name, email, resume_link, cover_note}` | Created application |
| `DELETE` | `/applications/:id` | Delete application | - | Success message |

### Example Request

```javascript
// Fetch all jobs
const response = await fetch('https://quickhire-server-zjzw.onrender.com/api/jobs');
const jobs = await response.json();

// Submit an application
const application = await fetch('https://quickhire-server-zjzw.onrender.com/api/applications', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    job_id: '64abc123...',
    name: 'John Doe',
    email: 'john@example.com',
    resume_link: 'https://drive.google.com/...',
    cover_note: 'I am excited to apply...'
  })
});
```

---

## 🌐 Deployment

### Frontend (Vercel)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Import `quickHire_client` repository

2. **Configure Build Settings**
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

3. **Environment Variables**
   ```
   VITE_API_URL=https://quickhire-server-zjzw.onrender.com/api
   ```

4. **Deploy**
   - Click "Deploy" for automatic CI/CD on push

### Backend (Render)

1. **Create Web Service**
   - Go to [render.com](https://render.com)
   - New → Web Service
   - Connect `quickHire_server` repository

2. **Configure Service**
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`

3. **Environment Variables**
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   CORS_ORIGIN=https://quick-hire-client-kappa.vercel.app
   ```

4. **Deploy**
   - Automatic deployment on push to main branch

---

## 📁 Project Structure

```
quickHire_client/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── JobCard.jsx
│   │   ├── FeaturedJobs.jsx
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── LandingPage.jsx
│   │   ├── JobListingsPage.jsx
│   │   ├── JobDetailPage.jsx
│   │   ├── AdminPage.jsx
│   │   └── ...
│   ├── utils/              # Utilities
│   │   └── api.js          # Axios instance
│   ├── context/            # React context
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── .env                    # Environment variables
├── package.json            # Dependencies
├── vercel.json             # Vercel configuration
└── vite.config.js          # Vite configuration

quickHire_server/
├── models/                 # Mongoose models
│   ├── Job.js
│   └── Application.js
├── routes/                 # Express routes
│   ├── jobs.js
│   └── applications.js
├── .env                    # Environment variables
├── server.js               # Express server
├── seed.js                 # Database seeder
├── package.json            # Dependencies
└── render.yaml             # Render configuration
```

---

## 📸 Screenshots

### Landing Page
*Modern hero section with featured jobs and company logos*

### Job Listings
*Search, filter, and browse available positions*

### Job Details
*Comprehensive job information with application form*

### Admin Dashboard
*Manage jobs and track applications*

---

## 🚧 Future Enhancements

- [ ] **User Authentication** - JWT-based auth for employers and job seekers
- [ ] **Resume Upload** - Direct file upload with cloud storage
- [ ] **Email Notifications** - Application confirmations and updates
- [ ] **Application Tracking** - Status tracking for submitted applications
- [ ] **Company Profiles** - Dedicated pages for company information
- [ ] **Job Alerts** - Email subscriptions for new postings
- [ ] **Advanced Analytics** - Dashboard with application metrics
- [ ] **Social Sharing** - Share jobs on LinkedIn, Twitter, etc.
- [ ] **Saved Jobs** - Bookmark feature for job seekers
- [ ] **Premium Features** - Featured listings for employers

---

## 👨‍💻 Author

**Jabir Mahmud**

- GitHub: [@Jabirmahmud0](https://github.com/Jabirmahmud0)
- Email: jabirmahmud0@example.com

---

## 📄 License

This project is part of a technical assessment for QSL.

---

<div align="center">

**Built with ❤️ using React, Node.js, and MongoDB**

[Back to Top](#quickhire---job-board-platform)

</div>
