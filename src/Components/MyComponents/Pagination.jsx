import React, { useState, useEffect } from 'react';

export default function DataTable({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [itemsPerPage] = useState(10); // Número de itens por página
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filtered = data.filter(item =>
      item.nome.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, searchQuery]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            {/* ... outras colunas ... */}
          </tr>
        </thead>
        <tbody>
          {currentItems.map(item => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              {/* ... outras colunas ... */}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {/* Botões de paginação */}
      </div>
    </div>
  );
}