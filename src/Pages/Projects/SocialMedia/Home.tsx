import React, { useState } from "react";
import Site from "../../../Layouts/SiteLayout";

interface Post {
    id: number;
    author: string;
    content: string;
    likes: number;
}

export default function SocialMedia() {
    const [posts, setPosts] = useState<Post[]>([
        { id: 1, author: "Alice", content: "Hello world!", likes: 0 },
        { id: 2, author: "Bob", content: "This is a sample post.", likes: 0 },
    ]);
    const [newPostContent, setNewPostContent] = useState("");

    const addPost = () => {
        if (newPostContent.trim() === "") return;
        const newPost: Post = {
            id: Date.now(),
            author: "CurrentUser",
            content: newPostContent,
            likes: 0,
        };
        setPosts([newPost, ...posts]);
        setNewPostContent("");
    };

    const likePost = (id: number) => {
        setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
    };

    return (
        <Site>
            <div className="max-w-3xl mx-auto p-4 pt-24">
                <h1 className="text-3xl font-bold mb-4">Social Media Feed</h1>
                <div className="mb-4 text-black">
                    <textarea
                        placeholder="What's on your mind?"
                        value={newPostContent}
                        onChange={e => setNewPostContent(e.target.value)}
                        className="w-full border p-2 rounded mb-2"
                        rows={3}
                    />
                    <button
                        onClick={addPost}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Post
                    </button>
                </div>
                <div>
                    {posts.length === 0 ? (
                        <p>No posts yet.</p>
                    ) : (
                        posts.map(post => (
                            <div key={post.id} className="border p-3 rounded mb-4">
                                <div className="font-semibold mb-1">{post.author}</div>
                                <div className="mb-2">{post.content}</div>
                                <button
                                    onClick={() => likePost(post.id)}
                                    className="text-blue-600 hover:underline"
                                >
                                    Like ({post.likes})
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </Site>
    );
}
