# Halleyx Workflow Engine

A Full Stack Workflow Engine built using **React, Node.js, Express, and MongoDB**.

This system allows users to create workflows, add steps, attach rules, and execute workflows dynamically.

---

# Features

* Create Workflow
* Add Workflow Steps
* Add Conditional Rules
* Execute Workflow Engine
* REST API based backend
* React UI for workflow management

---

# Tech Stack

Frontend

* React
* Axios
* React Router

Backend

* Node.js
* Express

Database

* MongoDB

---

# Project Architecture

```
client (React UI)
     |
     |  REST API
     v
server (Node.js + Express)
     |
     v
MongoDB Database
```

---

# Folder Structure

```
halleyx-workflow-engine
│
├── client
│   └── React frontend
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   └── server.js
│
└── README.md
```

---

# API Endpoints

### Create Workflow

POST /workflows

### Add Step

POST /steps

### Add Rule

POST /rules

### Execute Workflow

POST /executions

---

# How to Run Project

## 1 Clone Repository

```
git clone https://github.com/YOUR_USERNAME/halleyx1.git
```

## 2 Run Backend

```
cd server
npm install
npm run dev
```

Backend runs on

```
http://localhost:5000
```

## 3 Run Frontend

```
cd client
npm install
npm start
```

Frontend runs on

```
http://localhost:3000
```

---

# Screenshots

Add screenshots of the UI here.

Example:

* Workflow creation page
* Step builder
* Rule engine
* Execution result

---

# Future Improvements

* Drag and drop workflow builder
* Workflow visualization
* Execution logs
* Authentication system
