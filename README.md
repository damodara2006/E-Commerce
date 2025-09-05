### Live preview
You can view the live preview of this by clicking this link: [Cloudhut](https://e-commerce-jjp0.onrender.com)

# E-Commerce Application

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) e-commerce platform that provides a comprehensive shopping experience with category-based product browsing, cart management, and administrative functionality.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

### Customer Features
- **Product Categories**: Browse products across multiple categories including Men's, Women's, Kids', Electronics, Jewelry, Sports, Shoes, and Toys
- **Product Search and Filtering**: Find products efficiently with search functionality
- **Shopping Cart**: Add, remove, and manage items in the shopping cart
- **Product Details**: View detailed product information and images
- **Checkout Process**: Complete purchases with a streamlined checkout system
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS

### Administrative Features
- **Admin Dashboard**: Manage products, categories, and orders
- **Product Management**: Add, edit, and remove products from the catalog
- **Inventory Tracking**: Monitor stock levels and product availability

## Technology Stack

### Frontend
- **React.js 18.0.0**: Modern JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Material-UI**: React components library
- **Axios**: HTTP client for API requests
- **React Icons**: Icon library
- **React Toastify**: Notification system
- **Cloudinary**: Image management and optimization

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **Multer**: File upload handling
- **CORS**: Cross-origin resource sharing
- **Dotenv**: Environment variable management

## Project Structure

```
E-Commerce/
├── backend/
│   ├── controllers/          # Request handlers
│   ├── models/              # Database models
│   ├── mongoDB/             # Database configuration
│   ├── route/               # API routes
│   ├── src/                 # Application source code
│   └── utils/               # Utility functions
└── frontend/
    ├── public/              # Static assets
    ├── src/
    │   ├── assets/          # Images and media
    │   ├── Pages/           # React components/pages
    │   ├── App.jsx          # Main application component
    │   └── main.jsx         # Application entry point
    └── package.json
```

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (version 14.0 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/damodara2006/E-Commerce.git
   cd E-Commerce
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

## Configuration

1. **Backend Configuration**
   - Create a `.env` file in the backend directory
   - Add the following environment variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   NODE_ENV=development
   ```

2. **Frontend Configuration**
   - Create a `.env` file in the frontend directory
   - Add any necessary environment variables:
   ```env
   VITE_API_URL=http://localhost:5000
   VITE_CLOUDINARY_URL=your_cloudinary_url
   ```

## Usage

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Access the application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:8000`

## API Endpoints

The backend provides RESTful API endpoints for:

- **Products**: CRUD operations for product management
- **Categories**: Manage product categories
- **Cart**: Shopping cart operations
- **User Management**: Authentication and user profiles
- **Orders**: Order processing and management

## Available Scripts

### Backend Scripts
- `npm run dev`: Start the development server with nodemon
- `npm test`: Run tests (placeholder)

### Frontend Scripts
- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm run preview`: Preview the production build
- `npm run lint`: Run ESLint for code quality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
