# TodoApp

TodoApp is a web application for managing your tasks. It provides a simple and intuitive interface for creating, editing, and deleting tasks.

## Features

- Create new tasks with description.
- Mark tasks as completed or pending.
- Edit existing tasks.
- Delete tasks.


## Technologies Used

- **Frontend:**
  - React.js - JavaScript library for building user interfaces.
  - Vite - Next-generation frontend tooling for modern web development.
  - Tailwind CSS - A utility-first CSS framework for building custom designs quickly.
  - Axios - Promise-based HTTP client for making requests to the backend API.

- **Backend:**
  - Django - High-level Python web framework for rapid development and clean, pragmatic design.
  - Django REST Framework - A powerful and flexible toolkit for building Web APIs in Django.
  - Django CORS Headers - A Django application for handling the server headers required for Cross-Origin Resource Sharing (CORS).
  - SQLite (or your preferred database) - Lightweight and easy-to-use relational database management system.

### Prerequisites

- Node.js and npm (or yarn) installed on your system.
- Python and pip installed on your system.

### Installation

**Clone the repository:**

   ```bash
   git clone https://github.com/your_username/todoapp.git

**# Navigate to the frontend directory**
cd todoapp/frontend
npm install

# Navigate to the backend directory
cd ../backend
pip install django
python manage.py migrate
python manage.py runserver
Your Django backend server should now be running on http://localhost:8000.

cd ../frontend
npm run dev
Your React-Vite frontend development server should now be running on http://localhost:3000.


