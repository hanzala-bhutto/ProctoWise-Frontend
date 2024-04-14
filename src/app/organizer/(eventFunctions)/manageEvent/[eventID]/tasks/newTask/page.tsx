'use client'
import { useAppSelector } from '@/redux/store';
import { useAddUseCaseMutation, useDeleteTaskMutation, useDeleteUseCaseMutation, useEventCreateTaskMutation, useEventUpdateTaskMutation, useGetTaskQuery } from '@/services/event.service';
import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import {useRouter} from 'next/navigation';



interface UseCase {
  index: number;
  description: string;
}

const newTask = () => {
    const router = useRouter();
  const eventID = useAppSelector((state)=>state.tasks.eventID);
  const [updatedTask, setUpdatedTask]=useState({
    eventID: '',
    _id: '',
    description: '',
    usecases: [] as UseCase[]
  });

  const [task, setTask] = useState({
    eventID: '',
    _id: '',
    description: '',
    usecases: [] as UseCase[]
  });



  const [
    createTask,
  ] = useEventCreateTaskMutation()


  const [
    addUseCase,
  ]= useAddUseCaseMutation()

  
  var taskID: any;


  const addUsecase = () => {
    setTask((prevTask) => ({
      ...prevTask,
      usecases: [...prevTask.usecases, { index: prevTask.usecases.length + 1, description: '' }],
    }));
    console.log(task.usecases);
  };



  const updateNewTaskUsecase = (index, description) => {
    setTask((prevTask) => {
      const updatedUsecases = prevTask.usecases.map((usecase, i) => {
        if (i === index) {
          return { ...usecase, description: description }; // Update the description of the specific use case
        }
        return usecase;
      });
      return { ...prevTask, usecases: updatedUsecases };
    });
  };



  const removeUsecase = (index) => {
    if(updatedTask.usecases.length<2){
      alert("A Task should have atleast one usecase")
      return
    }
    setUpdatedTask((prevTask) => {
      const updatedUsecases = [...prevTask.usecases];
      updatedUsecases.splice(index, 1);
      return { ...prevTask, usecases: updatedUsecases };
    });
  };

  const formData={
    eventID:eventID,
    description:task.description,
    name:"Question 1"
  }


  const useCaseData={
    usecases:task.usecases,
    taskID:taskID
  }



  const saveChanges = async () => {
    if(task.description===''){
      alert("Task Cannot be empty")
      return
    }
    if(task.usecases.length<1){
      alert("No Usecases Specified")
      return
    }
    const response = await createTask(formData).unwrap(); // Creating the task
    const taskID = response.data._id; // Assigning the taskID from the response
    const updatedUseCases = task.usecases.map(usecase => ({
      index: usecase.index,
      description: usecase.description,
      taskID: taskID
    }));
  
    try {
      const response2 = await addUseCase(updatedUseCases).unwrap(); // Adding use case with updated taskID
      console.log(response2); // Logging the response
      console.log('Updated Task:', task.description);
      alert("Changes Saved");
      router.push('tasks')
      
    } catch (error) {
      console.error('Error adding use case:', error); // Logging any errors
    }
  };

  
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-semibold mb-4">Create Task</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Task {eventID} 
          </label>
          <textarea
            id="task"
            name="task"
            rows={4}
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
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
          <div key={usecase.index} className="mb-4">
            <label htmlFor={`usecase-${index}`} className="block text-sm font-medium text-gray-600">
              Usecase {index + 1}
            </label>
            <textarea
              id={`usecase-${index}`}
              name={`usecase-${index}`}
              rows={2}
              value={usecase.description}
              onChange={(e) => updateNewTaskUsecase(index, e.target.value)}
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

export default newTask;