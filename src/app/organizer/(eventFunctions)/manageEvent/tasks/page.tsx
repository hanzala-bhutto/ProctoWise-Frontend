'use client'
import React, { useState } from 'react';

const CreateTaskPage = () => {
  const [task, setTask] = useState({
    competition_id: '',
    taskId: '',
    taskDefinition: '',
    usecases: [],
  });

  const addUsecase = () => {
    setTask((prevTask) => ({
      ...prevTask,
      usecases: [...prevTask.usecases, { id: prevTask.usecases.length + 1, description: '' }],
    }));
    console.log(task.usecases);
  };

  const updateUsecase = (index, description) => {
    setTask((prevTask) => {
      const updatedUsecases = [...prevTask.usecases];
      updatedUsecases[index].description = description;
      return { ...prevTask, usecases: updatedUsecases };
    });
  };

  const removeUsecase = (index) => {
    setTask((prevTask) => {
      const updatedUsecases = [...prevTask.usecases];
      updatedUsecases.splice(index, 1);
      return { ...prevTask, usecases: updatedUsecases };
    });
  };

  const saveChanges = () => {
    // Implement the logic to save changes to your data file
    // For now, you can log the updated task object
    console.log('Updated Task:', task);
  };

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-semibold mb-4">Create Task</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Task
          </label>
          <textarea
            id="task"
            name="task"
            rows={4}
            value={task.taskDefinition}
            onChange={(e) => setTask({ ...task, taskDefinition: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
            placeholder="Enter task"
          ></textarea>
        </div>

        <div className="mb-4">
          <button
            type="button"
            onClick={addUsecase}
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-700"
          >
            Add Usecase
          </button>
        </div>

        {/* Display usecases */}
        {task.usecases.map((usecase, index) => (
          <div key={usecase.id} className="mb-4">
            <label htmlFor={`usecase-${index}`} className="block text-sm font-medium text-gray-600">
              Usecase {index + 1}
            </label>
            <textarea
              id={`usecase-${index}`}
              name={`usecase-${index}`}
              rows={2}
              value={usecase.description}
              onChange={(e) => updateUsecase(index, e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
              placeholder={`Enter usecase ${index + 1}`}
            ></textarea>
            <button
              type="button"
              onClick={() => removeUsecase(index)}
              className="text-red-500 mt-2"
            >
              Remove Usecase
            </button>
          </div>
        ))}

        <div className="mb-4">
          <button
            type="button"
            onClick={saveChanges}
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTaskPage;
