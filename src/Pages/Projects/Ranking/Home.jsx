import { useState } from "react";
import Site from "../../../Layouts/SiteLayout";
  

export default function Ranking()
{
    const [users] = useState([
        { name: 'Alice', score: 80 },
        { name: 'Bob', score: 95 },
        { name: 'Charlie', score: 72 },
        { name: 'Jean', score: 92 },
        { name: 'Josie', score: 25 },
    ]);
    return(<>
        <Site>
            <div id="container" className="mt-24 p-8 flex items-center justify-start">
                <RankingList users={users} />
            </div>
        </Site>
    </>);
}

function RankingList({ users }) {
    // Função de ordenação por pontuação (descendente)
    const sortedUsers = [...users].sort((a, b) => b.score - a.score);
  
    return (
      <div>
        <h2>Ranking</h2>
        <ul>
          {sortedUsers.map((user, index) => (
            <li key={index}>
              <User name={user.name} score={user.score} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function User({ name, score }) {
    return (
      <div>
        {name} - {score} pontos
      </div>
    );
  }
