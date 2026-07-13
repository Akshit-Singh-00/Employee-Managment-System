import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto h-[55%] flex items-center justify-start gap-20 flex-nowrap w-full py-5 mt-10"
    >
      {data.tasks.map((task, index) => {
        if (task.active) {
          return <AcceptTask key={index} data={task} />;
        }

        if (task.newTask) {
          return <NewTask key={index} data={task} />;
        }

        if (task.completed) {
          return <CompleteTask key={index} data={task} />;
        }

        if (task.failed) {
          return <FailedTask key={index} data={task} />;
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;