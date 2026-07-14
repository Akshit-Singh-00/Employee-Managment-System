# Employee Management System

A modern Employee Management System built using **React.js**, **Tailwind CSS**, and **LocalStorage**. This application provides separate dashboards for Admin and Employees, allowing task management with a clean and responsive user interface.

---

## Features

### 👨Admin
- Admin Login
- Create new tasks
- Assign tasks to employees
- View all employees
- View task statistics (Active, New, Completed, Failed)
- Employee-wise task count dashboard
- Data stored using LocalStorage

### Employee
- Employee Login
- View assigned tasks
- View Active Tasks
- View New Tasks
- View Completed Tasks
- View Failed Tasks
- Mark tasks as Completed
- Mark tasks as Failed

---

## Project Structure

```
src
│
├── Components
│   ├── Auth
│   │     └── Login.jsx
│   │
│   ├── Dashboard
│   │     ├── AdminDashboard.jsx
│   │     └── EmployeeDashboard.jsx
│   │
│   ├── Other
│   │     ├── Header.jsx
│   │     ├── CreateTask.jsx
│   │     ├── TaskListNumber.jsx
│   │     └── AllTask.jsx
│   │
│   └── TaskList
│         ├── AcceptTask.jsx
│         ├── NewTask.jsx
│         ├── CompleteTask.jsx
│         ├── FailedTask.jsx
│         └── TaskList.jsx
│
├── context
│     └── AuthProvider.jsx
│
├── utils
│     └── localStorage.jsx
│
├── App.jsx
└── main.jsx
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend Library |
| Tailwind CSS | Styling |
| JavaScript (ES6+) | Logic |
| Context API | State Management |
| LocalStorage | Data Persistence |
| Vite | Development Environment |

---

## Functionalities

### Admin Dashboard

- Login as Admin
- Create Tasks
- Assign Tasks
- View Employee Task Count
- Manage Employees

### Employee Dashboard

- Login
- View Assigned Tasks
- Complete Tasks
- Failed Tasks
- Active Tasks
- New Tasks

---

## Task Status

Each task contains the following properties:

```javascript
{
    active: true,
    newTask: false,
    completed: false,
    failed: false,
    taskTitle: "",
    taskDescription: "",
    taskDate: "",
    category: ""
}
```

---

## Employee Data Structure

```javascript
{
    id: 1,
    firstName: "Rahul",
    email: "rahul@example.com",
    password: "123",

    taskCounts:{
        active:1,
        newTask:1,
        completed:1,
        failed:0
    },

    tasks:[]
}
```

---

## Login Credentials

### Admin

```
Email : admin@example.com
Password : 123
```

### Employees

```
Rahul
Email : rahul@example.com
Password : 123
```

```
Priya
Email : priya@example.com
Password : 123
```

```
Aman
Email : aman@example.com
Password : 123
```

```
Neha
Email : neha@example.com
Password : 123
```

```
Arjun
Email : arjun@example.com
Password : 123
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/Akshit-Singh-00/Employee-Management-System.git
```

Go to the project folder

```bash
cd Employee-Management-System
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```


---

## What I Learned

- React Components
- React Hooks
- Context API
- State Management
- LocalStorage
- Tailwind CSS
- Conditional Rendering
- Form Handling
- CRUD Operations
- Responsive UI Design


---

## Live Demo

Adding Soon