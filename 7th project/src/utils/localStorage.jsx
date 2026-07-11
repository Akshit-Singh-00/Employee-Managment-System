export const employees = [
  {
    id: 1,
    email: "rahul@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page using React and Tailwind CSS.",
        taskDate: "2026-07-12",
        category: "Design"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve responsive issues in the navigation bar.",
        taskDate: "2026-07-13",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Footer",
        taskDescription: "Build a reusable footer component.",
        taskDate: "2026-07-10",
        category: "Development"
      }
    ]
  },

  {
    id: 2,
    email: "priya@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database Schema",
        taskDescription: "Design MongoDB collections for the project.",
        taskDate: "2026-07-12",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "API Testing",
        taskDescription: "Test authentication APIs using Postman.",
        taskDate: "2026-07-09",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Backend",
        taskDescription: "Deploy Node.js backend to Render.",
        taskDate: "2026-07-08",
        category: "Deployment"
      }
    ]
  },

  {
    id: 3,
    email: "aman@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Search",
        taskDescription: "Add employee search functionality.",
        taskDate: "2026-07-14",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Profile Page",
        taskDescription: "Create employee profile UI.",
        taskDate: "2026-07-13",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixes",
        taskDescription: "Fix reported UI bugs.",
        taskDate: "2026-07-10",
        category: "Maintenance"
      }
    ]
  },

  {
    id: 4,
    email: "neha@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Landing Page",
        taskDescription: "Develop the landing page.",
        taskDate: "2026-07-09",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Dashboard UI",
        taskDescription: "Create employee dashboard components.",
        taskDate: "2026-07-12",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize Images",
        taskDescription: "Compress images for faster loading.",
        taskDate: "2026-07-08",
        category: "Optimization"
      }
    ]
  },

  {
    id: 5,
    email: "arjun@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Admin Panel",
        taskDescription: "Develop admin dashboard interface.",
        taskDate: "2026-07-15",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Authentication",
        taskDescription: "Implement JWT authentication.",
        taskDate: "2026-07-10",
        category: "Security"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Notification System",
        taskDescription: "Add task notification feature.",
        taskDate: "2026-07-13",
        category: "Feature"
      }
    ]
  }
];

export const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
]

export const setLocalStorag=()=>{
      localStorage.setItem('employees', JSON.stringify(employees) )                  
      localStorage.setItem('admin', JSON.stringify(admin) )                  
}
export const getLocalStorag=()=>{
// const data=localStorage.getItem('employees',employees)
    //  console.log(data)
    // console.log(JSON.parse(data))
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    console.log(employees)
    console.log(admin)

}