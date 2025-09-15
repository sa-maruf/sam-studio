import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import MovieUpload from './components/MovieUpload';
import './index.css';

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Initial dummy data
  useEffect(() => {
    const initialData = [
      { id: 1, name: 'The Matrix', description: 'A computer programmer discovers a bizarre truth.', poster: 'https://via.placeholder.com/150', type: 'movie', downloadLink: '#' },
      { id: 2, name: 'Breaking Bad', description: 'A high school chemistry teacher starts making meth.', poster: 'https://via.placeholder.com/150', type: 'tv_series', downloadLink: '#' },
      { id: 3, name: 'Inception', description: 'A thief who steals corporate secrets through dream-sharing technology.', poster: 'https://via.placeholder.com/150', type: 'movie', downloadLink: '#' },
      { id: 4, name: 'Game of Thrones', description: 'Nine noble families fight for control over the mythical lands of Westeros.', poster: 'https://via.placeholder.com/150', type: 'tv_series', downloadLink: '#' },
    ];
    setItems(initialData);
  }, []);

  useEffect(() => {
    let newFilteredItems = items;

    // Filter by type
    if (currentFilter !== 'all') {
      newFilteredItems = newFilteredItems.filter(item => item.type === currentFilter);
    }

    // Filter by search term
    if (searchTerm) {
      newFilteredItems = newFilteredItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredItems(newFilteredItems);
  }, [items, currentFilter, searchTerm]);

  const handlePost = (newItem) => {
    setItems([...items, newItem]);
    setCurrentFilter('all');
    setSearchTerm('');
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleFilter = (type) => {
    setCurrentFilter(type);
    setSearchTerm('');
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentFilter('all');
  };

  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Navbar onSearch={handleSearch} onFilter={handleFilter} />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Hero items={filteredItems} />} />
            <Route path="/sam.mov.bd/movie-upload"
              element={<MovieUpload items={items} onPost={handlePost} onDelete={handleDelete} />} />
            <Route path="/about" element={
              <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p>Welcome to SAM.MOV.BD, your ultimate destination for movies and TV series.</p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;