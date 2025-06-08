import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Site from "../../../Layouts/SiteLayout";

interface Track {
    id: number;
    name: string;
    artist: string;
    duration: number;
}

interface Playlist {
    id: number;
    name: string;
    description: string;
    tracks: Track[];
}

export default function Playlist() {
    const [playlists, setPlaylists] = useState<Playlist[]>([]);
    const [selectedPlaylistId, setSelectedPlaylistId] = useState<number | null>(null);

    useEffect(() => {
        fetch("http://localhost:4018/api/playlists")
            .then(res => res.json())
            .then(data => {
                setPlaylists(data);
                if (data.length > 0) setSelectedPlaylistId(data[0].id);
            })
            .catch(err => console.error("Failed to fetch playlists:", err));
    }, []);

    function selectPlaylist(id: number) {
        setSelectedPlaylistId(id);
    }

    function renderPlaylists() {
        return playlists.map(playlist => (
            <li key={playlist.id} draggable="true" onClick={() => selectPlaylist(playlist.id)} className="cursor-pointer p-2 border rounded mb-2">
                <h5 className="text-sm">{playlist.name}</h5>
                <p className="text-xs">{playlist.description}</p>
            </li>
        ));
    }

    function renderTracks() {
        const selectedPlaylist = playlists.find(p => p.id === selectedPlaylistId);
        if (!selectedPlaylist) return null;
        return selectedPlaylist.tracks.map(track => (
            <li key={track.id} className="flex justify-between p-2 border rounded mb-1">
                <div>
                    <h6>{track.name}</h6>
                    <p className="text-xs">{track.artist}</p>
                </div>
                <div>{Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}</div>
            </li>
        ));
    }

    return (
        <Site>
            <div id="spotify" className="p-8 mt-24 flex flex-col min-h-screen">
                <div id="container" className="flex">
                    <aside className="flex flex-col px-2 gap-4 min-h-96 w-64">
                        <h3 className="text-lg font-bold mb-4">Playlists</h3>
                        <ul>{renderPlaylists()}</ul>
                    </aside>
                    <section className="flex flex-col w-full min-h-96 bg-gray-900 rounded-2xl p-4">
                        <h3 className="text-lg font-bold mb-4">Tracks</h3>
                        <ul>{renderTracks()}</ul>
                    </section>
                </div>
            </div>
        </Site>
    );
}
