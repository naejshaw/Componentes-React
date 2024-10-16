import React, { useState, useEffect } from 'react';

export default function DataTable({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 10; // Number of items per page
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
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }} // Improved styling
      />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nome</th>
            {/* ... outras colunas ... */}
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map(item => (
              <tr key={item.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.nome}</td>
                {/* ... outras colunas ... */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="100%" style={{ textAlign: 'center', padding: '8px' }}>Nenhum resultado encontrado</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="pagination" style={{ marginTop: '1rem' }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            style={{
              margin: '0 0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: currentPage === index + 1 ? '#007bff' : '#f1f1f1',
              border: 'none',
              cursor: 'pointer',
              color: currentPage === index + 1 ? 'white' : 'black'
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}