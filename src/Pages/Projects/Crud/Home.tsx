import React, { useState, useEffect } from "react";
import Site from "../../../Layouts/SiteLayout";

interface Task {
    id: number;
    name: string;
    description: string;
    completed: boolean;
}

export default function CRUD() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
    const [editingTaskName, setEditingTaskName] = useState("");
    const [editingTaskDescription, setEditingTaskDescription] = useState("");
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        fetchTasks();
    }, []);

    async function fetchTasks() {
        try {
            const response = await fetch("http://localhost:4002/api/tasks");
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error("Failed to fetch tasks:", error);
        }
    }

    async function addTask() {
        if (taskName.trim() === "") return;
        try {
            if (!token) {
                alert("Please login to add a task.");
                return;
            }
            const response = await fetch("http://localhost:4002/api/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: taskName,
                    description: taskDescription,
                    completed: false
                }),
            });
            const newTask = await response.json();
            setTasks([...tasks, newTask]);
            setTaskName("");
            setTaskDescription("");
        } catch (error) {
            console.error("Failed to add task:", error);
        }
    }

    async function toggleTaskCompletion(id: number) {
        const task = tasks.find(t => t.id === id);
        if (!task) return;
        try {
            if (!token) {
                alert("Please login to update a task.");
                return;
            }
            const response = await fetch(`http://localhost:4002/api/tasks/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ ...task, completed: !task.completed }),
            });
            const updatedTask = await response.json();
            setTasks(tasks.map(t => t.id === id ? updatedTask : t));
        } catch (error) {
            console.error("Failed to update task:", error);
        }
    }

    async function deleteTask(id: number) {
        try {
            if (!token) {
                alert("Please login to delete a task.");
                return;
            }
            const response = await fetch(`http://localhost:4002/api/tasks/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            });
            if (response.ok) {
                setTasks(tasks.filter(t => t.id !== id));
            }
        } catch (error) {
            console.error("Failed to delete task:", error);
        }
    }

    function startEditing(task: Task) {
        setEditingTaskId(task.id);
        setEditingTaskName(task.name);
        setEditingTaskDescription(task.description);
    }

    function cancelEditing() {
        setEditingTaskId(null);
        setEditingTaskName("");
        setEditingTaskDescription("");
    }

    async function saveEditing() {
        if (editingTaskId === null) return;
        try {
            if (!token) {
                alert("Please login to update a task.");
                return;
            }
            const response = await fetch(`http://localhost:4002/api/tasks/${editingTaskId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    id: editingTaskId,
                    name: editingTaskName,
                    description: editingTaskDescription,
                    completed: tasks.find(t => t.id === editingTaskId)?.completed || false
                }),
            });
            const updatedTask = await response.json();
            setTasks(tasks.map(t => t.id === editingTaskId ? updatedTask : t));
            cancelEditing();
        } catch (error) {
            console.error("Failed to update task:", error);
        }
    }

    return (
        <Site>
            <div className="sm:w-11/12 max-w-3xl mx-auto pt-24">
                <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
                <div className="mb-4 text-black">
                    <input
                        type="text"
                        placeholder="Task Name"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        className="border p-2 mr-2 rounded w-1/3"
                    />
                    <input
                        type="text"
                        placeholder="Task Description"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className="border p-2 mr-2 rounded w-1/2"
                    />
                    <button
                        onClick={addTask}
                        className="bg-blue-600 text-white px-4 mt-2 py-2 rounded hover:bg-blue-700"
                    >
                        Add Task
                    </button>
                </div>
                <ul>
                    {tasks.map(task => (
                        <li key={task.id} className="mb-2 flex items-center justify-between border p-2 rounded">
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTaskCompletion(task.id)}
                                    className="mr-2"
                                />
                                {editingTaskId === task.id ? (
                                    <>
                                        <input
                                            type="text"
                                            value={editingTaskName}
                                            onChange={(e) => setEditingTaskName(e.target.value)}
                                            className="border p-1 rounded w-40  text-black"
                                        />
                                        <input
                                            type="text"
                                            value={editingTaskDescription}
                                            onChange={(e) => setEditingTaskDescription(e.target.value)}
                                            className="border p-1 rounded w-60  text-black"
                                        />
                                    </>
                                ) : (
                                    <span className={task.completed ? "line-through text-gray-500" : ""}>
                                        <strong>{task.name}</strong>: {task.description}
                                    </span>
                                )}
                            </div>
                            <div className="flex gap-2">
                                {editingTaskId === task.id ? (
                                    <>
                                        <button
                                            onClick={saveEditing}
                                            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={cancelEditing}
                                            className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                                        >
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => startEditing(task)}
                                            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteTask(task.id)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Site>
    );
}
