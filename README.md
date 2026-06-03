# Project Name

CRUD APPLICATION 

## 🏗️ Architecture: Model-View-Controller (MVC)

This project is built using the **MVC (Model-View-Controller)** design pattern. This structural separation ensures a clean **Separation of Concerns**, making the codebase modular, highly maintainable, and scalable.

### Project Directory Layout
```text
├── config/             # Configuration files (Database, Passport, etc.)
├── controllers/        # Request handlers and core business logic
├── models/             # Database schemas and data models
├── routes/             # Express route definitions mapped to controllers
├── views/              # UI templates or server-rendered pages (Pug/EJS)
├── middlewares/        # Custom Express middleware (Auth, validation)
├── public/             # Static assets (images, CSS, frontend JS)
├── .env.example        # Template for environment configuration vars
├── app.js              # Entry point of the Express application
└── package.json        # Node.js dependencies and project metadata
```

---

## 📁 Layer Responsibilities

### 📦 Models (`/models`)
* Handles the **data layer** and application state.
* Defines database schemas (e.g., Mongoose models, Sequelize definitions).
* Performs data validation and directly interacts with the database.

### ⚙️ Controllers (`/controllers`)
* Houses the **business logic** connecting the data layer to the presentation layer.
* Receives HTTP requests from the routing layer, processes data via models, and returns responses.
* *Example code function names:* `getAllUsers`, `createUser`, `updateUser`.

### 🎨 Views (`/views`)
* Represents the **presentation layer** (UI).
* Renders templates (like EJS, Pug, or Handlebars) using data provided by the controllers.
* *Note:* If you are building a pure **REST API**, explicitly state here that the View layer is offloaded to a client application (e.g., React, Vue, or Postman).

### 🛣️ Routes (`/routes`)
* Acts as the application's **traffic controller**.
* Listens for specific incoming URLs and HTTP methods (`GET`, `POST`, `PUT`, `DELETE`).
* Forwards requests directly to the corresponding Controller functions.

### 🛡️ Middlewares (`/middlewares`)
* Functions that execute sequentially **during** the request-response lifecycle.
* Handles cross-cutting logic like User Authentication (JWT), Error Handling, Logging (Morgan), and Request Validation.

---

## 🛠️ Getting Started

### Prerequisites
* Node.js (v18+ recommended)
* npm or yarn

### Installation Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   * Duplicate `.env.example` and rename it to `.env`.
   * Fill out the necessary fields:
   ```env
   PORT=3000
   MONGO_URI=your_database_connection_string
   ```

4. **Run the development environment:**
   ```bash
   npm run dev
   ```
   *The server will start spinning up locally at `http://localhost:3000`*.
