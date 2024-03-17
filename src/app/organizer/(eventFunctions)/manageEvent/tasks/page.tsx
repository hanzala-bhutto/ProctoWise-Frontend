'use client'
import { useState } from 'react';
import { useAppSelector } from '@/redux/store';
import React, { useEffect } from 'react';
import { useGetAllTasksQuery } from '@/services/event.service';

interface TaskDisplay  {
_id:string,
description:string
}


const Tasks = () => {
  const eventID = useAppSelector((state) => state.tasks.eventID);
  const { data }: any  = useGetAllTasksQuery(eventID);

  const [tasks, setTasks] = useState<TaskDisplay[]>([]);

  useEffect(() => {
    if (data && data.data) {
      console.log(data);
      setTasks(data.data);
    }
  }, [data]);

  const handleDeleteTask = async (taskId:string) => {
    // Implement deletion logic here
  };

  const TaskBox = ({ task }) => {
    return (
      <div className="border shadow-xl rounded-lg w-1/2 p-4 mb-4 h]ver:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
        <h2 className="text-lg font-bold mb-2">Task {task.index}</h2>
        <p>{task.description}</p>
        <div className="mt-4 flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700">
            Edit
          </button>
          <button
            onClick={() => handleDeleteTask(task._id)}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-semibold mb-4">Tasks for Event {eventID}</h1>

      <div className="flex flex-col items-center">
        {tasks ? (
          tasks.map((task:any, index) => (
            <TaskBox key={task._id} task={{ ...task, index: index + 1 }} />
          ))
        ) : (
          <div>error</div>
        )}
      </div>

      <button className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring focus:border-green-700">
        <h1><b>+</b></h1>
      </button>
    </div>
  );
};

export default Tasks;
