import { useEffect, useState } from "react";
import GalleryCard from "../../../Components/MyComponents/GalleryCard";
import Site from "../../../Layouts/SiteLayout";

interface GalleryItem {
    id: number;
    title: string;
    url: string;
}

export default function Gallery() {
    const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
    const [newTitle, setNewTitle] = useState("");
    const [newUrl, setNewUrl] = useState("");

    useEffect(() => {
        fetch("http://localhost:4017/api/gallery")
            .then(res => res.json())
            .then(data => setGalleryItems(data))
            .catch(err => console.error("Failed to fetch gallery items:", err));
    }, []);

    function handleAddItem() {
        if (!newTitle || !newUrl) {
            alert("Please provide both title and URL.");
            return;
        }
        fetch("http://localhost:4017/api/gallery", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: newTitle, url: newUrl }),
        })
            .then(res => res.json())
            .then(newItem => {
                setGalleryItems(prev => [...prev, newItem]);
                setNewTitle("");
                setNewUrl("");
            })
            .catch(() => alert("Failed to add gallery item."));
    }

    function handleDeleteItem(id: number) {
        fetch(`http://localhost:4017/api/gallery/${id}`, {
            method: "DELETE",
        })
            .then(res => {
                if (res.status === 204) {
                    setGalleryItems(prev => prev.filter(item => item.id !== id));
                } else {
                    alert("Failed to delete gallery item.");
                }
            })
            .catch(() => alert("Failed to delete gallery item."));
    }

    return (
        <Site>
            <section className="min-h-screen py-40 px-8 portfolio" id="portfolio">
                <h2 className="mb-16 text-center text-4xl md:text-5xl lg:text-7xl heading">
                    Latest <span className="text-[#0ef]">Project</span>
                </h2>

                <div className="mb-8 flex justify-center gap-4">
                    <input
                        type="text"
                        placeholder="Title"
                        value={newTitle}
                        onChange={e => setNewTitle(e.target.value)}
                        className="border p-2 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Image URL"
                        value={newUrl}
                        onChange={e => setNewUrl(e.target.value)}
                        className="border p-2 rounded"
                    />
                    <button
                        onClick={handleAddItem}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Add Item
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 portfolio-container">
                    {galleryItems.map(item => (
                        <div key={item.id} className="relative">
                            <GalleryCard
                                imgPath={item.url}
                                id={item.id.toString()}
                                text={item.title}
                                title={item.title}
                            />
                            <button
                                onClick={() => handleDeleteItem(item.id)}
                                className="absolute top-2 right-2 bg-red-600 text-white rounded px-2 py-1 hover:bg-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </Site>
    );
}
