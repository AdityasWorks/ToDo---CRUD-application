# ToDo CRUD Application

This is a full-stack **ToDo CRUD** (Create, Read, Update, Delete) application built using **Go**, **React**, and **MongoDB**, with deployment on **Railway**.

## Deployment

The application is deployed on **Railway**. You can access the live version here: [Live Demo](https://todo-crud-application-production.up.railway.app/).

## Features

- **Create** a new task
- **Read** or view tasks
- **Update** an existing task
- **Delete** a task
- **Light and Dark mode** user interface
- Real-time data fetching, caching, and updates using **TanStack Query**

## Tech Stack

- **Go**: Backend framework
- **Vite + React**: Frontend 
- **MongoDB**: NoSQL database for storing tasks
- **Railway**: Deployment platform

## Prerequisites

Ensure the following are installed on your system:

- **Go**
- **Node.js**
- **MongoDB**

## Environment Variables

Create a `.env` file in the root of your project with the following content:

```bash
PORT=4000
ENV=development
MONGODB_URI=your-mongodb-uri
```

Replace `your-mongodb-uri` with your actual MongoDB connection string.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AdityasWorks/ToDo-CRUD-application.git
```

2. Navigate to the project directory:

```bash
cd todo-crud-application
```

3. Install backend dependencies:

```bash
go mod tidy
```

4. Install frontend dependencies:

```bash
cd client
npm install
```

## Running the Application

1. Start the backend server (ensure you are in the main `todo-crud-application` folder):

```bash
air
```

This uses **Air** for live-reloading in Go. If you don’t have **Air** installed, you can install it with:

```bash
go install github.com/cosmtrek/air@latest
```

Alternatively, you can start the backend server without **Air**:

```bash
go run main.go
```

2. Start the frontend server:

```bash
cd client
npm run dev
```

3. Visit the application at `http://localhost:PORT`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [Railway](https://railway.app/)
- [Go](https://golang.org/)
- [React](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [TanStack Query](https://tanstack.com/query/v4)
