# Project Name

# Node.js Express REST API (MVC Architecture)

A robust, multi-feature backend REST API built with Node.js, Express, and MongoDB. This application leverages the Model-View-Controller (MVC) design pattern to safely isolate routes, business logic, and database operations.

---

## 🏗️ Architecture Design (MVC)

This project strictly follows the **MVC** behavioral design pattern. Since this is a pure **REST API backend**, the "View" layer is offloaded to client-side consumer applications (e.g., your frontend running on port 3000).

### Project Layout
```text
├── Config/             # Core setups (Database initialization)
│   └── dbConnection.js # Database driver connection configuration
├── middleware/         # Application-wide pipeline interceptors
│   └── errorHandler.js # Standardized system-wide global error catches
├── models/             # Schema architecture and DB collection mappings
├── controllers/        # Business logic controllers tied to individual routes
├── routes/             # Exposed application URL routes and HTTP mappings
├── .env                # Private local environment configurations
├── app.js              # Application entry point & configuration pipeline
└── package.json        # Dependencies tracking list
```

---

## 🛠️ Deep Dive: Built-in Implementations

### 1. 🛡️ Configured Middlewares
Your backend features automated safety and monitoring steps on every request lifecycle:
* **CORS Protection:** Configured via `cors` to explicitly whitelist requests hailing from the local development client (`http://localhost:3000`) while allowing secure `credentials` handshakes.
* **Malformed JSON Prevention:** Intercepts incoming client payloads. If a client transmits a broken or malformed JSON payload, the app safely overrides it with a `400 Bad Request` payload message: `"Invalid JSON format in request body"`.
* **Traffic Logger:** A custom logging middleware outputs incoming traffic footprints directly to the console (`Method`, `URL`) for fast debugging.
* **Centralized Error Interceptor:** All uncaught routing runtime errors are automatically piped down directly into a single unified `errorHandler`.

---

## 🔌 API Route Ecosystem

The backend surfaces a modular suite of endpoints segmented across specialized sub-domains:


| Base Route Path | Purpose / Domain Feature |
| :--- | :--- |
| `/api/users` | Account access, user identities, profiles, and registration |
| `/api/contacts` | Address book records and secure personal contacts pipeline |
| `/api/todo` | Task lists, scheduling trackers, and todo CRUD updates |
| `/api/expense` | Budget tracking logs, finances, and microtransactions |
| `/api/student` | Educational records, student profiles, and management modules |
| `/api/playerinfo` | Gaming analytics or athlete registry records |
| `/api/socialIdentify` | Linked social authentication channels and profile ties |
| `/api/offices` | Corporate locations, workspaces, or office branch data |
| `/api/sports` | League updates, team categories, and athletic rosters |
| `/api/gymmember` | Fitness center enrollment, subscription tiers, and member profiles |
| `/api/bookpublish` | Literary collections, published volumes, and library catalogs |
| `/api/health` | Service monitoring status check endpoints |




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

## ⚙️ Quick Start Installation

### Prerequisites
* **Node.js** (v18.x or above)
* **npm** (v9.x or above)
* **MongoDB** instance (Local server or MongoDB Atlas URI cluster)

### Setup Steps

1. **Clone and Enter Repository:**
   ```bash
   git clone <your-repository-url>
   cd <your-repository-folder>
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a local file named `.env` in the root project folder directory and provide your setup configuration tokens:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mydatabase
   ACCESS_TOKEN_SECRET=your_jwt_access_token_secret_key_here
   ```

4. **Boot Up the API Server:**
   ```bash
   # Start standard node application
   node app.js

   # Alternative (If using nodemon for live hot reloading development)
   npm run dev
   ```
   The backend environment will activate. You will see confirmation logs reading `Server is running on port 5000` alongside successful MongoDB link-up connections.

   ```bash
   npm run dev
   ```
   *The server will start spinning up locally at `http://localhost:3000`*.
