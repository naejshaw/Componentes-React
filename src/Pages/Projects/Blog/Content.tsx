import { Link, useParams } from "react-router-dom";
import Site from "../../../Layouts/SiteLayout";
import { useEffect, useState } from "react";
import Login from "../../../Components/MyComponents/Login";
import RichTextEditor from "../../../Components/MyComponents/RichTextEditor";

interface Comment {
    id: number;
    postId: number;
    author: string;
    content: string;
    date: string;
}

interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
}

export default function Content() {
    const { id } = useParams<{ id: string }>();
    const postId = id ? parseInt(id) : null;

    const [post, setPost] = useState<Post | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [token, setToken] = useState<string | null>(null);
    const [commentContent, setCommentContent] = useState("");
    const [editing, setEditing] = useState(false);
    const [editedContent, setEditedContent] = useState("");

    useEffect(() => {
        if (postId) {
            fetch(`http://localhost:4000/api/posts/${postId}`)
                .then(res => res.json())
                .then(data => {
                    setPost(data);
                    setEditedContent(data.content);
                });
            fetch(`http://localhost:4000/api/posts/${postId}/comments`)
                .then(res => res.json())
                .then(data => setComments(data));
        }
    }, [postId]);

    function handleLogin(token: string) {
        setToken(token);
    }

    function handleLogout() {
        setToken(null);
    }

    function handleAddComment() {
        if (!token || !commentContent.trim()) return;
        fetch(`http://localhost:4000/api/posts/${postId}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                author: "Current User",
                content: commentContent,
                date: new Date().toISOString()
            })
        })
            .then(res => res.json())
            .then(newComment => {
                setComments([...comments, newComment]);
                setCommentContent("");
            });
    }

    function handleSaveEdit() {
        if (!token || !post) return;
        fetch(`http://localhost:4000/api/posts/${post.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                ...post,
                content: editedContent
            })
        })
            .then(res => res.json())
            .then(updatedPost => {
                setPost(updatedPost);
                setEditing(false);
            });
    }

    if (!post) {
        return (
            <Site>
                <p className="text-red-500">Blog post not found.</p>
                <Link className="mt-8 text-site-bg bg-white rounded-md p-2 hover:text-primary" to="/blog">
                    VOLTAR
                </Link>
            </Site>
        );
    }

    return (
        <Site>
            <div className="container__content pt-8 w-full md:px-10 flex flex-col items-center justify-center gap-4">
                <div className="content_title">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                    <hr />
                </div>
                <div className="content_description">
                    {editing ? (
                        <RichTextEditor value={editedContent} onChange={setEditedContent} />
                    ) : (
                        <p>{post.content}</p>
                    )}
                </div>
                {token ? (
                    <div className="edit-controls">
                        {editing ? (
                            <>
                                <button onClick={handleSaveEdit} className="btn-primary mr-2">Save</button>
                                <button onClick={() => setEditing(false)} className="btn-secondary">Cancel</button>
                            </>
                        ) : (
                            <button onClick={() => setEditing(true)} className="btn-primary">Edit Post</button>
                        )}
                    </div>
                ) : (
                    <Login onLogin={handleLogin} />
                )}
                <div className="comments-section w-full mt-8">
                    <h2 className="text-xl font-semibold mb-4">Comments</h2>
                    {comments.map(comment => (
                        <div key={comment.id} className="comment mb-4 p-4 border rounded">
                            <p><strong>{comment.author}</strong> <em>{new Date(comment.date).toLocaleString()}</em></p>
                            <p>{comment.content}</p>
                        </div>
                    ))}
                    {token && (
                        <div className="add-comment mt-4">
                            <textarea
                                className="w-full p-2 border rounded"
                                rows={4}
                                value={commentContent}
                                onChange={e => setCommentContent(e.target.value)}
                                placeholder="Add a comment"
                            />
                            <button onClick={handleAddComment} className="btn-primary mt-2">Submit Comment</button>
                        </div>
                    )}
                </div>
                <Link className="mt-8 text-site-bg bg-white rounded-md p-2 hover:text-primary" to="/blog">
                    VOLTAR
                </Link>
                {token && <button onClick={handleLogout} className="btn-secondary mt-4">Logout</button>}
            </div>
        </Site>
    );
}
