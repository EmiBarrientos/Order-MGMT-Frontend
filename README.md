# OrderMGMT Frontend

Frontend web para **OrderMGMT**, una aplicación de gestión de productos y pedidos construida como parte de una arquitectura de microservicios.

Este proyecto funciona como cliente del ecosistema backend de OrderMGMT, interactuando con los servicios de productos y pedidos a través del **API Gateway**.

---

## 📋 Descripción

OrderMGMT Frontend proporciona una interfaz web para interactuar con el sistema de gestión de pedidos.

La aplicación permite consultar y gestionar productos y pedidos mediante una interfaz construida con React.

El frontend se encuentra desacoplado de los microservicios de negocio y se comunica con el sistema backend a través del **API Gateway**, manteniendo un único punto de entrada para las solicitudes.

```text
┌─────────────────────┐
│       Browser       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  OrderMGMT Frontend │
│   React + Vite      │
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

---

## ✨ Funcionalidades

### Productos

* Visualización de productos.
* Gestión de productos mediante formularios.
* Acciones relacionadas con productos.
* Integración con el Product Service del backend.

### Pedidos

* Visualización de pedidos.
* Gestión de pedidos.
* Integración con el Order Service del backend.

### Navegación

La aplicación utiliza **React Router** para manejar la navegación entre las diferentes secciones de la aplicación.

La estructura actual separa las páginas relacionadas con:

* Home
* Products
* Orders

---

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

### Tooling

* ESLint
* PostCSS
* Autoprefixer
* npm

---

## 📁 Estructura del proyecto

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

La separación entre `pages`, `components`, `router` y `services` permite mantener diferenciadas la presentación, los componentes reutilizables, la navegación y la comunicación con el backend.

---

## 🔌 Integración con el Backend

Este frontend forma parte del ecosistema **OrderMGMT** y está diseñado para trabajar junto con su backend basado en microservicios.

El backend utiliza:

* API Gateway.
* Eureka Server.
* Config Server.
* User Service.
* Product Service.
* Order Service.

El frontend **no se comunica directamente con los microservicios de negocio**. Las solicitudes se realizan a través del API Gateway.

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

Esto permite mantener al Gateway como punto de entrada externo del sistema y evita exponer directamente los microservicios de negocio.

---

## 🚀 Getting Started

### Requisitos

Para ejecutar el frontend localmente necesitás:

* Node.js
* npm
* Git

También es necesario tener disponible el backend de **OrderMGMT** para utilizar las funcionalidades que dependen de la API.

### Clonar el repositorio

```bash
git clone https://github.com/EmiBarrientos/OrderMGMT-Frontend.git
cd OrderMGMT-Frontend
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

Vite iniciará el servidor de desarrollo y mostrará en consola la URL local disponible.

---

## 📦 Scripts disponibles

### Desarrollo

```bash
npm run dev
```

Inicia el servidor de desarrollo de Vite.

### Build

```bash
npm run build
```

Genera la versión optimizada para producción.

### Preview

```bash
npm run preview
```

Permite visualizar localmente el build generado.

### Lint

```bash
npm run lint
```

Ejecuta ESLint sobre el proyecto.

---

## 🏗️ Relación con OrderMGMT

Este repositorio corresponde exclusivamente al frontend de **OrderMGMT**.

El backend se encuentra en un repositorio separado y está compuesto por diferentes microservicios.

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
│
├── Eureka Server
│
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

Ambos repositorios forman parte del mismo proyecto.

---

## 🎯 Objetivo del proyecto

El objetivo de OrderMGMT es construir una aplicación de gestión de pedidos utilizando una arquitectura basada en microservicios y diferentes tecnologías del ecosistema Java/Spring.

El frontend fue desarrollado como cliente independiente para consumir las APIs expuestas por el backend y proporcionar una interfaz de usuario para las operaciones del sistema.

---

## 🔮 Próximas mejoras

Algunas mejoras posibles para el frontend incluyen:

* Mejorar la experiencia de usuario.
* Incorporar validaciones más completas en formularios.
* Mejorar el manejo de estados de carga y errores.
* Implementar una experiencia de autenticación completa integrada con el sistema de seguridad del backend.
* Incorporar una interfaz más completa para la gestión de pedidos.
* Mejorar la responsividad y accesibilidad.

---

## 👨‍💻 Autor

**Emiliano Barrientos**

Backend Java Developer con experiencia complementaria en React y desarrollo full-stack.

---

## 🔗 Proyecto relacionado

**OrderMGMT Backend**

El frontend forma parte del proyecto principal de OrderMGMT y está diseñado para trabajar junto con su backend basado en microservicios.
