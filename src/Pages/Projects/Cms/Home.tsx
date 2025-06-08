import React, { useState } from "react";
import Site from "../../../Layouts/SiteLayout";

interface ContentItem {
    id: number;
    title: string;
    body: string;
}

export default function CMS() {
    const [contents, setContents] = useState<ContentItem[]>([]);
    const [editingContent, setEditingContent] = useState<ContentItem | null>(null);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const resetForm = () => {
        setTitle("");
        setBody("");
        setEditingContent(null);
    };

    const handleAddOrUpdate = () => {
        if (title.trim() === "" || body.trim() === "") {
            alert("Please fill in both title and body.");
            return;
        }
        if (editingContent) {
            // Update existing content
            setContents(contents.map(content =>
                content.id === editingContent.id ? { ...content, title, body } : content
            ));
        } else {
            // Add new content
            const newContent: ContentItem = {
                id: Date.now(),
                title,
                body,
            };
            setContents([...contents, newContent]);
        }
        resetForm();
    };

    const handleEdit = (content: ContentItem) => {
        setEditingContent(content);
        setTitle(content.title);
        setBody(content.body);
    };

    const handleDelete = (id: number) => {
        if (window.confirm("Are you sure you want to delete this content?")) {
            setContents(contents.filter(content => content.id !== id));
            if (editingContent && editingContent.id === id) {
                resetForm();
            }
        }
    };

    return (
        <Site>
            <div className="max-w-4xl mx-auto pt-24">
                <h1 className="text-3xl font-bold mb-4">Content Management System</h1>
                <div className="mb-6 text-black">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="border p-2 rounded w-full mb-2"
                    />
                    <textarea
                        placeholder="Body"
                        value={body}
                        onChange={e => setBody(e.target.value)}
                        className="border p-2 rounded w-full mb-2"
                        rows={5}
                    />
                    <button
                        onClick={handleAddOrUpdate}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        {editingContent ? "Update Content" : "Add Content"}
                    </button>
                    {editingContent && (
                        <button
                            onClick={resetForm}
                            className="ml-2 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                        >
                            Cancel
                        </button>
                    )}
                </div>
                <div>
                    {contents.length === 0 ? (
                        <p>No content available.</p>
                    ) : (
                        <ul>
                            {contents.map(content => (
                                <li key={content.id} className="border p-3 rounded mb-2">
                                    <h2 className="font-semibold text-lg">{content.title}</h2>
                                    <p className="mb-2">{content.body}</p>
                                    <button
                                        onClick={() => handleEdit(content)}
                                        className="mr-2 bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(content.id)}
                                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </Site>
    );
}
