import { useState } from "react";
import Site from "../../../Layouts/SiteLayout";
import { IRanking, IUser } from "./types";

export default function Ranking() {
    const [users] = useState<IUser []>([
        { name: 'Alice', score: 80 },
        { name: 'Bob', score: 95 },
        { name: 'Charlie', score: 72 },
        { name: 'Jean', score: 92 },
        { name: 'Josie', score: 25 },
    ]);

    return (
        <Site>
            <div id="container" className="mt-24 p-8 flex items-center justify-start">
                <RankingList users={users} />
            </div>
        </Site>
    );
}

function RankingList({ users }: IRanking) {
    // Sort users by score in descending order
    const sortedUsers = [...users].sort((a, b) => b.score - a.score);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Ranking</h2>
            {sortedUsers.length > 0 ? (
                <ul className="list-decimal pl-5">
                    {sortedUsers.map((user, index) => (
                        <li key={index}>
                            <User  name={user.name} score={user.score} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users available.</p>
            )}
        </div>
    );
}

function User({ name, score }: IUser) {
    return (
        <div className="flex justify-between gap-4">
            <span>{name}</span>
            <span>{score} pontos</span>
        </div>
    );
}