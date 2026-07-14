import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { userData, setUserData } = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const employees = [...userData.employees];

    const employeeIndex = employees.findIndex(
      (emp) =>
        emp.firstName.toLowerCase() === assignTo.toLowerCase()
    );

    if (employeeIndex === -1) {
      alert("Employee not found!");
      return;
    }

    const newTask = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDescription,
      taskDate,
      category,
    };

    employees[employeeIndex].tasks.push(newTask);
    employees[employeeIndex].taskCounts.newTask += 1;

    localStorage.setItem("employees", JSON.stringify(employees));

setUserData({
    employees,
    admin: userData.admin,
});

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (
  loggedInUser &&
  loggedInUser.role === "employee" &&
  loggedInUser.data.id === employees[employeeIndex].id
) {
  localStorage.setItem(
    "loggedInUser",
    JSON.stringify({
      role: "employee",
      data: employees[employeeIndex],
    })
  );
}

    alert("Task Created Successfully");

    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
  };

  return (
    <div className="p-6 bg-[#1c1c1c] mt-7 rounded-md">
      <form
        onSubmit={submitHandler}
        className="flex justify-between gap-10"
      >
        <div className="w-1/2 space-y-5">
          <div>
            <h3 className="text-sm text-gray-300 mb-2">Task Title</h3>

            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Task Title"
              className="w-full rounded border border-gray-600 bg-transparent px-3 py-2"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-2">Date</h3>

            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="w-full rounded border border-gray-600 bg-transparent px-3 py-2"
            />
          </div>

         <div>
  <h3 className="text-sm text-gray-300 mb-2">Assign To</h3>

  <select
    value={assignTo}
    onChange={(e) => setAssignTo(e.target.value)}
    className="w-full rounded border border-gray-600 bg-transparent px-3 py-2 text-sm outline-none focus:border-emerald-400"
  >
    <option value="">Select Employee</option>

    {userData?.employees.map((emp) => (
  <option key={emp.id} value={emp.firstName}>
    {emp.firstName}
  </option>
))}
  </select>
</div>

          <div>
            <h3 className="text-sm text-gray-300 mb-2">Category</h3>

            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Category"
              className="w-full rounded border border-gray-600 bg-transparent px-3 py-2"
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col">
          <h3 className="text-sm text-gray-300 mb-2">
            Description
          </h3>

          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            rows="8"
            placeholder="Description"
            className="w-full rounded border border-gray-600 bg-transparent p-3 resize-none"
          ></textarea>

          <button
            type="submit"
            className="mt-4 w-full rounded bg-emerald-500 py-3 font-semibold"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;