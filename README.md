# OrderMGMT Frontend

A React-based web application for managing products and orders as part of the **OrderMGMT microservices project**.

The frontend is developed as an independent client application and communicates with the backend through the **API Gateway**, providing a single entry point to the Product and Order services.
> **Backend Repository:** Looking for the Backend? Check out the [Order-MGMT](https://github.com/EmiBarrientos/Order-MGMT) repository.

## 📋 Overview

OrderMGMT Frontend provides a web interface for interacting with the order management system.

The application allows users to:

* View and manage products
* View and manage orders
* Navigate between different sections of the application
* Interact with backend services through REST APIs

The frontend is decoupled from the business microservices and communicates exclusively through the API Gateway.

### Architecture

```text
┌─────────────────────┐
│       Browser       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  OrderMGMT Frontend │
│    React + Vite     │
└──────────┬──────────┘
           │ HTTP
           ▼
┌─────────────────────┐
│     API Gateway     │
└──────────┬──────────┘
           │
      ┌────┴────┐
      ▼         ▼
┌──────────┐ ┌──────────┐
│ Product  │ │  Order   │
│ Service  │ │ Service  │
└──────────┘ └──────────┘
```

## ✨ Features

### Products

* View products
* Manage products through forms
* Perform product-related actions
* Communicate with the Product Service through the API Gateway

### Orders

* View orders
* Manage orders
* Communicate with the Order Service through the API Gateway

### Navigation

The application uses **React Router** to manage navigation between:

* Home
* Products
* Orders

## 🛠️ Tech Stack

### Frontend

* React 19
* JavaScript
* Vite
* React Router
* Tailwind CSS

### UI & UX

* React Toastify
* SweetAlert2

### Development Tools

* ESLint
* PostCSS
* Autoprefixer
* npm

## 📁 Project Structure

```text
OrderMGMT-Frontend/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   └── products/
│   │       ├── ProductForm.jsx
│   │       └── ProductsActions.jsx
│   │
│   ├── pages/
│   │   ├── home/
│   │   ├── orders/
│   │   └── products/
│   │
│   ├── router/
│   │
│   ├── services/
│   │   ├── api/
│   │   ├── orders.js
│   │   └── products.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

The project structure separates:

* **Pages** — application views
* **Components** — reusable UI components
* **Router** — application navigation
* **Services** — communication with backend APIs
* **Assets** — static frontend resources

## 🔌 Backend Integration

The frontend is part of the larger **OrderMGMT** ecosystem, whose backend is based on a microservices architecture.

The backend includes:

* API Gateway
* Eureka Service Discovery
* Spring Cloud Config Server
* User Service
* Product Service
* Order Service

The frontend does **not communicate directly with the business microservices**.

All API requests are sent through the API Gateway:

```text
Frontend
   │
   │ HTTP Requests
   ▼
API Gateway
   │
   ├──────────────► Product Service
   │
   └──────────────► Order Service
```

This keeps the Gateway as the external entry point of the system and prevents the business services from being directly exposed to the frontend.

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* Git

You will also need the **OrderMGMT backend** running to use features that depend on the API.

### 1. Clone the repository

```bash
git clone https://github.com/EmiBarrientos/Order-MGMT-Frontend.git
cd Order-MGMT-Frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will start the development server and display the local URL in the terminal.

## 📦 Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Preview

```bash
npm run preview
```

Serves the production build locally for preview.

### Lint

```bash
npm run lint
```

Runs ESLint against the project.

## 🧩 Project Architecture

OrderMGMT is divided into independent frontend and backend repositories.

### Backend

```text
OrderMGMT
│
├── User Service
│   └── MongoDB
│
├── Product Service
│   └── MySQL
│
├── Order Service
│   └── PostgreSQL
│
├── API Gateway
├── Eureka Server
└── Config Server
```

### Frontend

```text
OrderMGMT-Frontend
│
├── React
├── Vite
├── React Router
└── Tailwind CSS
```

Both repositories are part of the same OrderMGMT application.

## 🎯 Project Goals

The main goal of OrderMGMT is to build an order management application while exploring a **microservices-based architecture** and technologies from the Java/Spring ecosystem.

This repository focuses specifically on the frontend layer, providing a React-based interface for consuming the APIs exposed by the backend.

## 🔮 Future Improvements

Potential improvements for the frontend include:

* Improve the overall user experience
* Add more comprehensive form validation
* Improve loading and error states
* Implement a complete authentication flow integrated with the backend security system
* Expand the order management interface
* Improve responsiveness and accessibility

## 👨‍💻 Author

**Emiliano Barrientos**

Java Backend Developer with complementary experience in React and full-stack development.

* GitHub: [@EmiBarrientos](https://github.com/EmiBarrientos)
* LinkedIn: [Emiliano Barrientos](https://linkedin.com/in/emiliano-barrientos)

## 🔗 Related Repository

### OrderMGMT Backend

The backend repository contains the microservices and infrastructure components that power this frontend application.
